/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { Link, createFileRoute } from "@tanstack/react-router"
import { buttonVariants } from "@/components/ui/button"
import ArrowLeft from "@/components/ui/icons/arrow-left"
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
        return {
            meta: createSeoTags({
                title: loaderData.project.title,
                description: loaderData.project.description.brief,
                path: `/projects/${loaderData.project.slug}`,
                image: loaderData.project.images.displayImage,
            }),
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

            {/* Hero Section - Always present */}
            <header className="w-contain space-y-6 pt-15">
                <div className="space-y-4 text-center lg:px-10">
                    <h1 className="text-3xl lg:text-[4rem] lg:leading-tight">{project.title}</h1>
                    <p className="text-sm lg:text-lg">{project.description.details}</p>
                </div>
                <img
                    src={project.images.displayImage}
                    alt={project.title}
                    className="aspect-square size-full rounded-2xl object-cover lg:aspect-auto"
                />
            </header>

            {/* Design Objective Section - Optional */}
            {project.designObjective && (
                <section className="w-contain space-y-6 py-10 text-center lg:py-15">
                    <h2 className="text-xl font-semibold lg:text-3xl">Design Objective</h2>

                    <div className="hide-scrollbar flex items-center gap-2 overflow-auto lg:justify-center lg:gap-8">
                        {project.designObjective.map((objective, index) => (
                            <div
                                key={objective + index}
                                className="shrink-0 rounded-full bg-primary px-4 py-2 lg:px-8 lg:py-4"
                            >
                                <p className="text-sm lg:text-2xl">{objective}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Project Scope Section - Optional */}
            {project.projectScope && (
                <section className="w-contain space-y-6 py-10 lg:py-15">
                    <h2 className="text-xl lg:text-3xl">Project Scope</h2>
                    {project.projectScope.map((scope, index) => (
                        <div key={scope.image + index} className="grid items-center gap-8 lg:grid-cols-2">
                            <ul className="list-inside list-disc space-y-2 text-sm lg:text-2xl">
                                {scope.items.map((item, itemIndex) => (
                                    <li key={item + itemIndex}>{item}</li>
                                ))}
                            </ul>
                            {scope.image && (
                                <img
                                    src={scope.image}
                                    alt="Scope illustration"
                                    className={cn("order-first w-full rounded-xl lg:order-last", {
                                        "lg:order-first": index % 2 !== 0,
                                    })}
                                />
                            )}
                        </div>
                    ))}
                </section>
            )}

            {/* Gallery Section - Optional */}
            {project.images.gallery && project.images.gallery.length > 0 && (
                <section className="w-contain flex flex-wrap justify-center gap-4 py-10 lg:py-15">
                    {project.images.gallery.map((image, index) => (
                        <img
                            key={image + index}
                            src={image}
                            alt={`${project.title} - Image ${index + 1}`}
                            className="size-full rounded-xl lg:size-auto"
                        />
                    ))}
                </section>
            )}
        </main>
    )
}
