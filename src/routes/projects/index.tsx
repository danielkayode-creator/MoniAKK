import { Link, createFileRoute } from "@tanstack/react-router"
import ProjectsInMotion from "@/components/features/projects-in-motion"
import EnquiryDialog from "@/components/features/enquiry-dialog"
import { buttonVariants } from "@/components/ui/button"
import ArrowRight from "@/components/ui/icons/arrow-right"
import { ourProjects } from "@/constants/projects"
import { createSeoTags } from "@/lib/seo"
import { cn } from "@/lib/utils"

export const Route = createFileRoute("/projects/")({
    head: () => ({
        meta: createSeoTags({
            title: "Our Projects",
            description:
                "View MoniAK's portfolio of completed construction projects. From commercial buildings to residential developments, see our commitment to quality.",
            path: "/projects",
        }),
    }),
    component: ProjectsPage,
})

function ProjectsPage() {
    return (
        <main>
            <header className="relative w-contain flex justify-center pt-15 lg:pb-15">
                <div className="space-y-4 text-center lg:space-y-6">
                    <h1 className="text-3xl lg:text-[5rem]">Our Projects</h1>
                    <p className="text-sm lg:text-lg">
                        From commercial buildings to residential developments, our construction company takes pride in
                        delivering
                        <br className="md-br" /> excellence, ensuring every project is a true testament to our
                        commitment to quality and client satisfaction.
                    </p>
                </div>
            </header>

            <section className="w-contain grid gap-8 py-10 lg:grid-cols-2 lg:gap-15">
                {ourProjects.map((project, index) => (
                    <Link
                        key={project.slug + index}
                        to="/projects/$slug"
                        params={{ slug: project.slug }}
                        className="relative aspect-square overflow-hidden rounded-2xl"
                    >
                        <img src={project.images.displayImage} alt={project.title} className="size-full object-cover" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 flex flex-col gap-2 px-4 pb-4 lg:px-8 lg:pb-10">
                            <h5 className="font-montserrat text-xl font-semibold lg:text-2xl">{project.title}</h5>
                            <p className="text-xs lg:text-base">{project.description.brief}</p>
                        </div>
                    </Link>
                ))}
            </section>

            <ProjectsInMotion />

            <div className="w-contain flex justify-center py-15">
                <EnquiryDialog><button
                    type="button"
                    className={cn(buttonVariants({ variant: "secondary" }), "lg:h-17.5! lg:w-3/5 lg:text-2xl")}
                >
                    Make an Enquiry
                    <ArrowRight />
                </button></EnquiryDialog>
            </div>
        </main>
    )
}

