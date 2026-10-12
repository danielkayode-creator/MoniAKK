import { createFileRoute } from "@tanstack/react-router"
import { ArrowUpRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { featuredPartner } from "@/constants"
import { createSeoTags } from "@/lib/seo"
import { cn } from "@/lib/utils"

const sulinkServices = [
    {
        title: "Building-material sourcing",
        description: "Support for identifying and sourcing building materials for residential and commercial needs.",
    },
    {
        title: "Custom furnishing",
        description: "Furnishing options shaped around the practical and visual requirements of a project.",
    },
    {
        title: "Installation services",
        description:
            "Installation capability that helps carry selected materials and furnishings into completed spaces.",
    },
] as const

const complementaryServices = [
    "Construction implementation",
    "Engineering and technical coordination",
    "Design and build delivery",
    "Procurement and logistics support",
    "Construction planning support",
    "Project delivery management",
] as const

export const Route = createFileRoute("/partners/sulink")({
    head: () => ({
        meta: createSeoTags({
            title: "Sulink Global × Moni-AK",
            description:
                "Explore how Sulink Global's sourcing, furnishing, and installation capabilities complement MoniAK's construction, engineering, and project delivery services.",
            path: featuredPartner.pagePath,
        }),
    }),
    component: SulinkPartnerPage,
})

function SulinkPartnerPage() {
    return (
        <main>
            <header className="relative overflow-hidden border-b border-primary/40">
                <div
                    className="pointer-events-none absolute -top-24 -right-32 size-72 rounded-full border border-primary/30 sm:size-96"
                    aria-hidden="true"
                />
                <div
                    className="pointer-events-none absolute top-16 -right-20 size-48 rounded-full border border-primary/20 sm:size-72"
                    aria-hidden="true"
                />

                <div className="w-contain grid gap-12 py-16 md:py-20 lg:grid-cols-[minmax(0,1.3fr)_minmax(18rem,0.7fr)] lg:items-end lg:gap-16 lg:py-24">
                    <div className="relative max-w-5xl">
                        <p className="text-xs font-semibold tracking-[0.24em] text-primary-light">OUR PARTNERS</p>
                        <h1 className="mt-5 text-3xl leading-tight md:text-5xl lg:text-[5rem]">
                            Sulink Global × Moni-AK
                        </h1>
                        <p className="mt-6 max-w-4xl font-michroma text-xl leading-relaxed text-white/75 md:text-2xl lg:text-3xl">
                            From Global Sourcing to Local Construction.
                        </p>
                        <p className="mt-8 max-w-3xl text-sm leading-7 text-white/80 md:text-lg md:leading-8">
                            This collaboration connects complementary capabilities for residential and commercial
                            projects: Sulink Global's access to building materials, furnishing, and installation
                            services, alongside MoniAK's construction, engineering, and project delivery experience in
                            Nigeria.
                        </p>
                    </div>

                    <div className="relative grid gap-3 rounded-2xl border border-primary/50 bg-primary/10 p-4 backdrop-blur-sm sm:grid-cols-3 sm:p-5 lg:grid-cols-1">
                        {sulinkServices.map((service, index) => (
                            <div
                                key={service.title}
                                className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/20 px-4 py-4"
                            >
                                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-primary-light/50 font-michroma text-xs text-primary-light">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span className="text-sm leading-5 font-semibold text-white/85">{service.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </header>

            <section className="bg-primary py-14 md:py-20" aria-labelledby="collaboration-overview">
                <div className="w-contain">
                    <div className="max-w-3xl">
                        <p className="text-xs font-semibold tracking-[0.24em] text-white/70">COMPLEMENTARY EXPERTISE</p>
                        <h2 id="collaboration-overview" className="mt-4 text-2xl leading-tight md:text-4xl">
                            Connecting supply capability with local delivery.
                        </h2>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-2">
                        <article className="rounded-2xl border border-white/20 bg-black/15 p-6 transition-transform duration-300 hover:-translate-y-1 md:p-8">
                            <p className="text-xs font-semibold tracking-[0.2em] text-white/60">ABOUT SULINK GLOBAL</p>
                            <h3 className="mt-4 text-xl md:text-2xl">Materials, furnishing and installation</h3>
                            <p className="mt-4 text-sm leading-7 text-white/80 md:text-base">
                                Sulink Global provides access to building-material sourcing, custom furnishing, and
                                installation services. Its offering can support projects seeking a coordinated route
                                from product selection to installation.
                            </p>
                        </article>

                        <article className="rounded-2xl border border-white/20 bg-black/15 p-6 transition-transform duration-300 hover:-translate-y-1 md:p-8">
                            <p className="text-xs font-semibold tracking-[0.2em] text-white/60">WORKING WITH MONIAK</p>
                            <h3 className="mt-4 text-xl md:text-2xl">Construction knowledge on the ground</h3>
                            <p className="mt-4 text-sm leading-7 text-white/80 md:text-base">
                                MoniAK contributes local construction implementation, engineering coordination,
                                planning, procurement support, logistics, and project delivery management. Together,
                                these capabilities can help clients consider sourcing decisions in the context of the
                                wider construction programme.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="w-contain py-14 md:py-20" aria-labelledby="sulink-capabilities">
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                    <div>
                        <p className="text-xs font-semibold tracking-[0.24em] text-primary-light">
                            SULINK CAPABILITIES
                        </p>
                        <h2 id="sulink-capabilities" className="mt-4 text-2xl leading-tight md:text-4xl">
                            Relevant services
                        </h2>
                        <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 md:text-base">
                            A concise view of Sulink's offer for project teams evaluating material and interior
                            requirements.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        {sulinkServices.map((service, index) => (
                            <article
                                key={service.title}
                                className="grid gap-4 border-b border-white/20 py-6 first:pt-0 sm:grid-cols-[3rem_1fr]"
                            >
                                <span className="font-michroma text-lg text-primary-light" aria-hidden="true">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <div>
                                    <h3 className="text-lg md:text-xl">{service.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-white/70 md:text-base">
                                        {service.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#020d05] py-14 md:py-20" aria-labelledby="project-services">
                <div className="w-contain">
                    <div className="max-w-3xl">
                        <p className="text-xs font-semibold tracking-[0.24em] text-primary-light">PROJECT CONTINUITY</p>
                        <h2 id="project-services" className="mt-4 text-2xl leading-tight md:text-4xl">
                            From sourcing decisions to site delivery
                        </h2>
                        <p className="mt-5 text-sm leading-7 text-white/70 md:text-base">
                            Sulink's sourcing offer complements the services MoniAK already provides across the project
                            lifecycle.
                        </p>
                    </div>

                    <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {complementaryServices.map((service) => (
                            <li
                                key={service}
                                className="rounded-xl border border-primary/60 bg-primary/10 px-5 py-5 text-sm font-semibold transition-colors hover:bg-primary/20 md:text-base"
                            >
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="w-contain py-14 md:py-20" aria-labelledby="visit-sulink">
                <div className="flex flex-col items-start justify-between gap-8 border-y border-primary/60 py-10 md:flex-row md:items-end">
                    <div className="max-w-3xl">
                        <p className="text-xs font-semibold tracking-[0.24em] text-primary-light">EXPLORE SULINK</p>
                        <h2 id="visit-sulink" className="mt-4 text-2xl leading-tight md:text-4xl">
                            Learn more about Sulink Global.
                        </h2>
                        <p className="mt-4 text-sm leading-7 text-white/70 md:text-base">
                            Visit Sulink's website for more information about its materials, furnishing, and
                            installation offer.
                        </p>
                    </div>

                    <a
                        href={featuredPartner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            buttonVariants({ variant: "secondary" }),
                            "h-auto shrink-0 rounded-lg px-6 py-4 font-semibold",
                        )}
                    >
                        Visit Sulink Website <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                </div>
            </section>
        </main>
    )
}
