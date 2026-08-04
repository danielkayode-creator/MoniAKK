import { Link, createFileRoute } from "@tanstack/react-router"
import EnquiryDialog from "@/components/features/enquiry-dialog"
import { buttonVariants } from "@/components/ui/button"
import ArrowLeft from "@/components/ui/icons/arrow-left"
import ArrowRight from "@/components/ui/icons/arrow-right"
import { ourProjects } from "@/constants/projects"
import { createSeoTags } from "@/lib/seo"
import { cn } from "@/lib/utils"

export const Route = createFileRoute("/projects/$slug")({
    loader: ({ params }) => {
        const project = ourProjects.find((p) => p.slug === params.slug)
        return { project }
    },
    head: ({ loaderData }) => {
        if (!loaderData?.project) {
            return {
                meta: createSeoTags({
                    title: "Project Not Found",
                    description: "The requested project could not be found.",
                    path: "/projects",
                }),
            }
        }

        const isYalaHeights = loaderData.project.slug === "yala-heights"
        return {
            meta: createSeoTags({
                title: isYalaHeights ? "Yala Heights | MoniAK Projects" : loaderData.project.title,
                description: isYalaHeights
                    ? "Explore Yala Heights, a residential development for which MoniAK provided structural design and construction services."
                    : loaderData.project.description.brief,
                path: `/projects/${loaderData.project.slug}`,
                image: loaderData.project.images.displayImage,
            }),
            links: [{ rel: "canonical", href: `https://moniak.vercel.app/projects/${loaderData.project.slug}` }],
        }
    },
    component: ProjectPage,
})

function ProjectPage() {
    const { slug } = Route.useParams()
    const project = ourProjects.find((p) => p.slug === slug)

    if (!project) {
        return (
            <main className="w-contain flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
                <h1 className="text-4xl font-bold lg:text-6xl">404</h1>
                <p className="text-lg lg:text-xl">Project not found</p>
            </main>
        )
    }

    return (
        <main>
            <div className="w-contain pt-10">
                <Link to=".." className={cn(buttonVariants({ variant: "secondary" }))}>
                    <ArrowLeft /> Go Back
                </Link>
            </div>

            <header className="w-contain space-y-6 pt-15">
                <div className="space-y-4 text-center lg:px-10">
                    <h1 className="text-3xl lg:text-[4rem] lg:leading-tight">{project.title}</h1>
                    {project.serviceCategory && (
                        <p className="text-base font-semibold text-primary lg:text-xl">{project.serviceCategory}</p>
                    )}
                    <p className="text-sm leading-relaxed lg:text-lg">{project.description.details}</p>
                </div>
                <img
                    src={project.images.displayImage}
                    alt={project.images.alt?.[0] ?? project.title}
                    className="max-h-[46rem] w-full rounded-2xl object-cover object-center"
                />
            </header>

            {project.overview && (
                <section className="w-contain grid gap-4 py-10 lg:grid-cols-[1fr_2fr] lg:gap-15 lg:py-15">
                    <h2 className="text-xl font-semibold lg:text-3xl">Project Overview</h2>
                    <p className="text-sm leading-relaxed lg:text-xl">{project.overview}</p>
                </section>
            )}

            {project.services && (
                <section className="w-contain space-y-6 py-10 lg:py-15">
                    <h2 className="text-xl font-semibold lg:text-3xl">Scope of Services</h2>
                    <div className="grid gap-4 lg:grid-cols-2">
                        {project.services.map((service) => (
                            <article key={service.title} className="space-y-3 rounded-2xl bg-primary p-6 lg:p-10">
                                <h3 className="text-lg font-semibold lg:text-2xl">{service.title}</h3>
                                <p className="text-sm leading-relaxed lg:text-lg">{service.description}</p>
                            </article>
                        ))}
                    </div>
                </section>
            )}

            {project.designObjective && (
                <section className="w-contain space-y-6 py-10 text-center lg:py-15">
                    <h2 className="text-xl font-semibold lg:text-3xl">Design Objective</h2>
                    <div className="hide-scrollbar flex items-center gap-2 overflow-auto lg:justify-center lg:gap-8">
                        {project.designObjective.map((objective) => (
                            <div key={objective} className="shrink-0 rounded-full bg-primary px-4 py-2 lg:px-8 lg:py-4">
                                <p className="text-sm lg:text-2xl">{objective}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {project.projectScope && (
                <section className="w-contain space-y-6 py-10 lg:py-15">
                    <h2 className="text-xl lg:text-3xl">Project Scope</h2>
                    {project.projectScope.map((scope, index) => (
                        <div key={scope.image ?? index} className="grid items-center gap-8 lg:grid-cols-2">
                            <ul className="list-inside list-disc space-y-2 text-sm lg:text-2xl">
                                {scope.items.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                            {scope.image && (
                                <img
                                    src={scope.image}
                                    alt="Project scope"
                                    loading="lazy"
                                    className={cn("order-first w-full rounded-xl lg:order-last", {
                                        "lg:order-first": index % 2 !== 0,
                                    })}
                                />
                            )}
                        </div>
                    ))}
                </section>
            )}

            {project.images.gallery.length > 0 && (
                <section className="w-contain space-y-6 py-10 lg:py-15" aria-labelledby="project-gallery-title">
                    <h2 id="project-gallery-title" className="text-xl font-semibold lg:text-3xl">Project Gallery</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        {project.images.gallery.map((image, index) => (
                            <img
                                key={image}
                                src={image}
                                alt={project.images.alt?.[index] ?? `${project.title} ï¿½ project view ${index + 1}`}
                                loading={index === 0 ? "eager" : "lazy"}
                                className="aspect-4/3 size-full rounded-xl object-cover object-center transition-transform duration-300 hover:scale-[1.01]"
                            />
                        ))}
                    </div>
                </section>
            )}

            <div className="w-contain flex justify-center py-15">
                <EnquiryDialog projectName={project.title}>
                    <button
                        type="button"
                        className={cn(buttonVariants({ variant: "secondary" }), "lg:h-17.5! lg:w-3/5 lg:text-2xl")}
                    >
                        Make an Enquiry
                        <ArrowRight />
                    </button>
                </EnquiryDialog>
            </div>
        </main>
    )
}
