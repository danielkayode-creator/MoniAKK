import { createFileRoute } from "@tanstack/react-router"
import ScrollDownBadge from "@/components/features/scroll-down-badge"
import { ourServices } from "@/constants/service"
import { createSeoTags } from "@/lib/seo"
import { cn } from "@/lib/utils"

export const Route = createFileRoute("/services")({
    head: () => ({
        meta: createSeoTags({
            title: "Our Services",
            description:
                "Explore MoniAK's comprehensive construction services including civil infrastructure, building construction, renovations, and project management.",
            path: "/services",
        }),
    }),
    component: ServicesPage,
})

function ServicesPage() {
    return (
        <main>
            <header className="relative w-contain flex items-end justify-center pt-15 lg:pb-15">
                <div className="space-y-4 text-center lg:space-y-6">
                    <h1 className="text-3xl lg:text-[5rem]">Our Services</h1>
                    <p className="text-sm lg:text-lg">
                        Welcome to MoniAK, your partner in construction excellence. From
                        <br className="md-br" /> groundbreaking designs to meticulous renovations, we offer a
                        comprehensive
                        <br className="md-br" /> range of services tailored to your needs. At MoniAK, we don't just
                        build
                        <br className="md-br" /> structures; we create experiences.
                    </p>
                </div>

                <ScrollDownBadge className="absolute right-0 -bottom-4 hidden lg:block" />
            </header>

            <section className="w-contain py-20">
                {ourServices.map((service, index) => (
                    <div
                        key={service.title + index}
                        className={cn(
                            "flex flex-col-reverse gap-8 pb-10 not-first:pt-10 not-last:border-b lg:flex-row lg:items-center lg:gap-15 lg:pb-20 lg:not-first:pt-20",
                            index % 2 !== 0 && "lg:flex-row-reverse",
                        )}
                    >
                        <div className="flex flex-col gap-15 lg:flex-1">
                            <div className="space-y-6 text-center lg:text-left">
                                <h3 className="text-sm lg:text-[2.8125rem]">{service.title}</h3>
                                <p className="text-xs lg:text-lg">{service.description}</p>
                            </div>

                            {service.images.map((image, imageIndex) => (
                                <img
                                    key={image + imageIndex}
                                    src={image}
                                    alt={`${service.title} project detail`}
                                    loading="lazy"
                                    className="hidden lg:block"
                                />
                            ))}
                        </div>

                        <div className="aspect-square lg:flex-1">
                            <img
                                src={service.displayImage}
                                alt={`MoniAK ${service.title.toLowerCase()} service`}
                                loading="lazy"
                                className="size-full object-cover"
                            />
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )
}
