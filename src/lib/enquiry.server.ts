import type { EnquiryData } from "@/constants/enquiry"
import { enquirySchema } from "@/constants/enquiry"

// The destination is server configuration, never a URL supplied by a visitor.
export async function deliverEnquiry(data: EnquiryData, request: Request): Promise<{ success: boolean }> {
    try {
        const origin = request.headers.get("origin")
        if (!origin || origin !== new URL(request.url).origin ||
            request.headers.get("sec-fetch-site") === "cross-site") {
            return { success: false }
        }

        const enquiry = enquirySchema.parse(data)
        const endpoint = process.env.CONTACT_FORM_ENDPOINT
        if (!endpoint) return { success: false }

        const destination = new URL(endpoint)
        if (destination.protocol !== "https:" || destination.username || destination.password) {
            return { success: false }
        }

        const headers: Record<string, string> = {
            "Content-Type": "application/json",
            Accept: "application/json",
        }
        const token = process.env.CONTACT_FORM_API_TOKEN
        if (token) headers.Authorization = `Bearer ${token}`

        const response = await fetch(destination, {
            method: "POST",
            headers,
            body: JSON.stringify(enquiry),
            signal: AbortSignal.timeout(15000),
            redirect: "error",
        })
        if (!response.ok) return { success: false }

        // A successful HTTP response alone does not confirm enquiry receipt.
        const result: unknown = await response.json()
        return { success: typeof result === "object" && result !== null &&
            "success" in result && result.success === true }
    } catch {
        // Do not expose backend responses, credentials, or visitor details.
        return { success: false }
    }
}
