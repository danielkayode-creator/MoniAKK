import { memo, useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "motion/react"

const videoModules = import.meta.glob<string>("/public/videos/projects/*.{mp4,webm,ogg,mov}", {
    eager: true,
    import: "default",
    query: "?url",
})

const videos = Object.entries(videoModules)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
    .map(([path, src]) => ({ path, src }))

const titles = [
    "Infrastructure Development",
    "Construction Progress",
    "Project Delivery",
    "Engineering Operations",
    "Site Execution",
]

type ProjectVideo = (typeof videos)[number]

const VideoCard = memo(function VideoCard({
    video,
    index,
    reduceMotion,
}: {
    video: ProjectVideo
    index: number
    reduceMotion: boolean
}) {
    const cardRef = useRef<HTMLElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const [shouldLoad, setShouldLoad] = useState(false)
    const title = titles[index % titles.length]

    useEffect(() => {
        const card = cardRef.current
        if (!card) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoad(true)
                    observer.disconnect()
                }
            },
            { rootMargin: "300px 0px" },
        )
        observer.observe(card)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const card = cardRef.current
        const player = videoRef.current
        if (!card || !player) return
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting && !player.paused) player.pause()
        })
        observer.observe(card)
        return () => observer.disconnect()
    }, [shouldLoad])

    const playPreview = () => {
        if (reduceMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return
        const player = videoRef.current
        if (!player || !player.paused) return
        player.muted = true
        void player.play().catch(() => undefined)
    }

    const stopPreview = () => {
        const player = videoRef.current
        if (!player || player.paused) return
        player.pause()
        player.currentTime = 0
    }

    return (
        <motion.article
            ref={cardRef}
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: Math.min(index * 0.08, 0.24), ease: "easeOut" }}
            onMouseEnter={playPreview}
            onMouseLeave={stopPreview}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition duration-500 focus-within:border-white/40 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_24px_60px_rgba(0,0,0,0.32)]"
        >
            <div className="aspect-video overflow-hidden bg-black">
                <video
                    ref={videoRef}
                    src={shouldLoad ? video.src : undefined}
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={`${title} project footage`}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.025] focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-white"
                >
                    Your browser does not support HTML5 video. Project footage: {video.path}.
                </video>
            </div>
            <div className="p-5 lg:p-6">
                <h3 className="text-base leading-relaxed font-semibold lg:text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">Real footage from MoniAK project operations.</p>
            </div>
        </motion.article>
    )
})

export default function ProjectsInMotion() {
    const reduceMotion = Boolean(useReducedMotion())
    if (videos.length === 0) return null

    return (
        <motion.section
            aria-labelledby="projects-in-motion-title"
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={reduceMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.6 }}
            className="w-contain py-14 lg:py-24"
        >
            <div className="mx-auto mb-10 max-w-4xl text-center lg:mb-14">
                <p className="mb-3 text-xs font-semibold tracking-[0.24em] text-white/60 uppercase">
                    On-site perspective
                </p>
                <h2 id="projects-in-motion-title" className="text-3xl leading-tight lg:text-5xl">
                    Projects in Motion
                </h2>
                <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/70 lg:text-base">
                    Experience MoniAK&apos;s projects through real construction footage, engineering execution, site
                    operations, and completed developments.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
                {videos.map((video, index) => (
                    <VideoCard key={video.path} video={video} index={index} reduceMotion={reduceMotion} />
                ))}
            </div>
        </motion.section>
    )
}
