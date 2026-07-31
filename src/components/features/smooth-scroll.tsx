import { ReactLenis } from "lenis/react"
import { cancelFrame, frame } from "motion/react"
import { useEffect, useRef } from "react"
import type { LenisRef } from "lenis/react"

const SmoothScroll = () => {
    const lenisRef = useRef<LenisRef>(null)

    useEffect(() => {
        function update(data: { timestamp: number }) {
            const time = data.timestamp
            lenisRef.current?.lenis?.raf(time)
        }

        frame.update(update, true)

        return () => cancelFrame(update)
    }, [])

    return <ReactLenis root ref={lenisRef} />
}

export default SmoothScroll
