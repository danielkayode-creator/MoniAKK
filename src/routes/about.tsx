import { Link, createFileRoute } from "@tanstack/react-router"
import { ArrowUpLeft } from "lucide-react"
import LeadershipSection from "@/components/features/leadership/leadership-section"
import ScrollDownBadge from "@/components/features/scroll-down-badge"
import { buttonVariants } from "@/components/ui/button"
import { missionAndVision, whatWeOffer } from "@/constants/about-us"
import { createSeoTags } from "@/lib/seo"
import { cn } from "@/lib/utils"

export const Route = createFileRoute("/about")({
    head: () => ({
        meta: createSeoTags({
            title: "About Us",
            description:
                "Learn about MoniAK's mission, vision, technical capabilities, and commitment to responsible construction delivery across Nigeria.",
            path: "/about",
        }),
    }),
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <main>
            <header className="relative pt-10 lg:pt-0">
                <div className="absolute inset-x-0 bottom-0 h-[25%] bg-[url('/images/high-rise-building.png'),linear-gradient(var(--primary),var(--primary))] bg-cover bg-top bg-no-repeat lg:h-[85%]" />

                <div className="relative w-contain flex flex-col-reverse items-end gap-6 lg:flex-row lg:gap-0 lg:-space-x-20">
                    <img
                        src="/images/constructor.png"
                        alt="Black construction professional wearing safety equipment"
                        className="hidden lg:block"
                    />
                    <img
                        src="/images/constructor-mobile.png"
                        alt="Black construction professional wearing safety equipment"
                        className="block lg:hidden"
                    />

                    <div className="space-y-2 text-center lg:space-y-6 lg:py-6 lg:text-left">
                        <h2 className="text-3xl lg:text-[5rem]">About Us</h2>
                        <h3 className="lg:text-[2.8125rem]">Who we are</h3>

                        <div className="mt-4 flex items-center gap-10 lg:mt-0 lg:gap-20">
                            <p className="text-sm lg:text-lg">
                                MoniAK is a customer-focused construction and engineering support company delivering
                                coordinated solutions across Nigeria. Our capabilities span construction planning,
                                personnel and logistics management, direct labour, plant and equipment sourcing,
                                material supply, and project implementation support. We work closely with clients and
                                technical partners throughout each engagement, applying disciplined planning, clear
                                communication, and quality-focused execution to meet approved project objectives.
                            </p>

                            <ScrollDownBadge className="absolute right-0 bottom-4 shrink-0 *:bg-inherit lg:static" />
                        </div>
                    </div>
                </div>
            </header>

            {/* What we offer */}
            <section className="w-contain flex flex-col gap-20 py-15">
                <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-0">
                    <div className="space-y-6">
                        <h5 className="lg:text-[2.8125rem]">What we offer</h5>
                        <ul className="flex flex-col gap-2 text-sm lg:text-lg">
                            {whatWeOffer.map((item, index) => (
                                <li key={item + index} className="flex items-start gap-2">
                                    <img src="/icons/circle-check.svg" alt="" className="mt-1 size-4 lg:size-auto" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative flex w-fit items-center">
                        <img src="/images/what-we-offer.svg" alt="" />
                        <Link
                            to="/"
                            className={cn(
                                buttonVariants(),
                                "absolute right-0 size-14 rounded-full shadow-[0px_3.52px_3.52px_0px_#00000040] sm:size-18 md:size-20 lg:size-25",
                            )}
                        >
                            <ArrowUpLeft className="size-6 sm:size-7 md:size-8 lg:size-10" />
                        </Link>
                    </div>
                </div>

                <div className="grid gap-5 lg:grid-cols-2">
                    {missionAndVision.map((item, index) => (
                        <div key={item.title + index} className="flex flex-col items-center gap-5 bg-primary px-4 py-8">
                            <h5 className="text-2xl lg:text-[2.8125rem]">{item.title}</h5>
                            <p className="text-center text-sm lg:text-lg">{item.description}</p>
                            <img src={item.image} alt="" className="lg:mt-5" />
                        </div>
                    ))}
                </div>
            </section>

            <LeadershipSection />

        </main>
    )
}
