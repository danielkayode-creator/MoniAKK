// @vitest-environment jsdom
import { act, cleanup, render } from "@testing-library/react"
import { afterEach, beforeEach, expect, it, vi } from "vitest"
import ProjectsInMotion from "./projects-in-motion"

const observers: Array<IntersectionObserverCallback> = []

beforeEach(() => {
    observers.length = 0
    vi.stubGlobal(
        "matchMedia",
        vi.fn().mockReturnValue({ matches: true, addEventListener: vi.fn(), removeEventListener: vi.fn() }),
    )
    vi.stubGlobal(
        "IntersectionObserver",
        class {
            constructor(callback: IntersectionObserverCallback) {
                observers.push(callback)
            }
            observe = vi.fn()
            unobserve = vi.fn()
            disconnect = vi.fn()
        },
    )
})
afterEach(() => {
    cleanup()
    vi.unstubAllGlobals()
})

it("keeps native playback controls and applies deterrents to every video without download links", () => {
    const { container } = render(<ProjectsInMotion />)
    const videos = container.querySelectorAll("video")
    expect(videos).toHaveLength(8)
    expect(container.querySelector("a")).toBeNull()
    for (const video of videos) {
        expect(video.controls).toBe(true)
        expect(video.getAttribute("controlsList")).toBe("nodownload")
        expect(video.draggable).toBe(false)
        expect(video.playsInline).toBe(true)
        expect(video.textContent).not.toMatch(/\.mp4|\/videos\//)
        for (const type of ["contextmenu", "dragstart"]) {
            const event = new MouseEvent(type, { bubbles: true, cancelable: true })
            video.dispatchEvent(event)
            expect(event.defaultPrevented).toBe(true)
        }
    }
})

it("lazy-loads ordinary public video URLs without requesting playback credentials", () => {
    const fetch = vi.fn()
    vi.stubGlobal("fetch", fetch)
    const { container } = render(<ProjectsInMotion />)
    const videos = container.querySelectorAll("video")
    for (const video of videos) expect(video.getAttribute("src")).toBeNull()
    act(() => {
        for (const callback of observers)
            callback([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver)
    })
    for (const video of videos) {
        expect(video.getAttribute("src")).toMatch(/^\/videos\/projects\/.+\.mp4$/)
        expect(video.getAttribute("src")).not.toContain("?")
    }
    expect(fetch).not.toHaveBeenCalled()
})
