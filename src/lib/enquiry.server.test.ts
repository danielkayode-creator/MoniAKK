import { afterEach, describe, expect, it, vi } from "vitest"
import { deliverEnquiry } from "./enquiry.server"
import { enquiryServiceOptions } from "@/constants/enquiry"

const enquiry = {
    name: "Test Enquirer",
    email: "enquirer@example.com",
    telephone: "+234 800 000 0000",
    projectType: "construction-management",
    message: "Please contact me about a construction enquiry.",
    marketingConsent: false,
}
const request = () => new Request("https://moniak.example/_serverFn/enquiry", {
    method: "POST",
    headers: { Origin: "https://moniak.example", "Sec-Fetch-Site": "same-origin" },
})

afterEach(() => {
    vi.unstubAllEnvs()
    vi.unstubAllGlobals()
})

describe("enquiry delivery", () => {
    it("fails without configuration and never attempts delivery", async () => {
        vi.stubEnv("CONTACT_FORM_ENDPOINT", "")
        const fetchMock = vi.fn()
        vi.stubGlobal("fetch", fetchMock)
        expect(await deliverEnquiry(enquiry, request())).toEqual({ success: false })
        expect(fetchMock).not.toHaveBeenCalled()
    })

    it("forwards all existing fields using server credentials only after validation", async () => {
        vi.stubEnv("CONTACT_FORM_ENDPOINT", "https://enquiries.example/receive")
        vi.stubEnv("CONTACT_FORM_API_TOKEN", "test-server-only-token")
        const fetchMock = vi.fn().mockImplementation(() => Promise.resolve(Response.json({ success: true })))
        vi.stubGlobal("fetch", fetchMock)

        for (const option of enquiryServiceOptions) {
            expect(await deliverEnquiry({ ...enquiry, projectType: option.value }, request())).toEqual({ success: true })
        }
        expect(fetchMock).toHaveBeenCalledTimes(9)
        const [url, options] = fetchMock.mock.calls[0]
        expect(String(url)).toBe("https://enquiries.example/receive")
        expect(options).toMatchObject({
            method: "POST",
            redirect: "error",
            headers: { Authorization: "Bearer test-server-only-token", "Content-Type": "application/json" },
        })
        expect(options.signal).toBeInstanceOf(AbortSignal)
        expect(JSON.parse(options.body)).toEqual({ ...enquiry, projectType: enquiryServiceOptions[0].value })
    })

    it.each([
        { ...enquiry, projectType: "engineering-design" },
        { ...enquiry, name: "   " },
        { ...enquiry, email: "invalid" },
        { ...enquiry, message: "a".repeat(10001) },
        { ...enquiry, marketingConsent: "yes" },
    ])("rejects invalid or excessive input without contacting the backend", async (data) => {
        vi.stubEnv("CONTACT_FORM_ENDPOINT", "https://enquiries.example/receive")
        const fetchMock = vi.fn()
        vi.stubGlobal("fetch", fetchMock)
        expect(await deliverEnquiry(data as typeof enquiry, request())).toEqual({ success: false })
        expect(fetchMock).not.toHaveBeenCalled()
    })

    it.each([undefined, "https://untrusted.example"])("rejects missing or foreign origins", async (origin) => {
        vi.stubEnv("CONTACT_FORM_ENDPOINT", "https://enquiries.example/receive")
        const fetchMock = vi.fn()
        vi.stubGlobal("fetch", fetchMock)
        const req = new Request("https://moniak.example/_serverFn/enquiry", {
            method: "POST", headers: origin ? { Origin: origin } : {},
        })
        expect(await deliverEnquiry(enquiry, req)).toEqual({ success: false })
        expect(fetchMock).not.toHaveBeenCalled()
    })

    it.each(["http://enquiries.example", "https://user:password@enquiries.example", "invalid-url"])(
        "rejects unsafe destination configuration: %s",
        async (endpoint) => {
            vi.stubEnv("CONTACT_FORM_ENDPOINT", endpoint)
            const fetchMock = vi.fn()
            vi.stubGlobal("fetch", fetchMock)
            expect(await deliverEnquiry(enquiry, request())).toEqual({ success: false })
            expect(fetchMock).not.toHaveBeenCalled()
        },
    )

    it.each([
        Response.json({ success: true }, { status: 500 }),
        Response.json({ success: false }),
        Response.json({}),
        Response.json({ success: "true" }),
        new Response("<html>Login page</html>"),
        new Response(null, { status: 204 }),
    ])("does not show success for failed or unconfirmed receipt", async (response) => {
        vi.stubEnv("CONTACT_FORM_ENDPOINT", "https://enquiries.example/receive")
        vi.stubGlobal("fetch", vi.fn().mockResolvedValue(response))
        expect(await deliverEnquiry(enquiry, request())).toEqual({ success: false })
    })

    it("handles timeouts and allows a subsequent retry", async () => {
        vi.stubEnv("CONTACT_FORM_ENDPOINT", "https://enquiries.example/receive")
        const fetchMock = vi.fn()
            .mockRejectedValueOnce(new DOMException("Timed out", "TimeoutError"))
            .mockResolvedValueOnce(Response.json({ success: true }))
        vi.stubGlobal("fetch", fetchMock)
        expect(await deliverEnquiry(enquiry, request())).toEqual({ success: false })
        expect(await deliverEnquiry(enquiry, request())).toEqual({ success: true })
    })
})
