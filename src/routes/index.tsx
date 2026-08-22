import { Link, createFileRoute } from "@tanstack/react-router"
import Autoplay from "embla-carousel-autoplay"
import EnquiryDialog from "@/components/features/enquiry-dialog"
import EnquiryForm from "@/components/features/forms/enquiry-form"
import ScrollDownBadge from "@/components/features/scroll-down-badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import ArrowRight from "@/components/ui/icons/arrow-right"
import ArrowUpRight from "@/components/ui/icons/arrow-up-right"
import { keyFeatures, recentProjects, services, trustedBy } from "@/constants"
import { createSeoTags } from "@/lib/seo"
import { cn } from "@/lib/utils"

export const Route = createFileRoute("/")({
    head: () => ({
        meta: createSeoTags({
            title: "MoniAK | Construction & Engineering Excellence",
            description:
                "MoniAK is a full-service construction and engineering company specializing in civil infrastructure, building construction, and project management in Nigeria.",
            path: "/",
        }),
    }),
    component: App,
})

function App() {
    const partnerLogoSizeClasses = {
        aec: "max-h-[70px] max-w-[160px] md:max-h-[85px] md:max-w-[190px]",
        railink: "max-h-[65px] max-w-[170px] md:max-h-[75px] md:max-w-[200px]",
        ccecc: "max-h-[110px] max-w-[145px] md:max-h-[130px] md:max-w-[170px]",
        lamata: "max-h-[85px] max-w-[105px] md:max-h-[100px] md:max-w-[125px]",
        nexant: "max-h-[60px] max-w-[190px] md:max-h-[72px] md:max-w-[230px]",
        veoctech: "max-h-[100px] max-w-[115px] md:max-h-[120px] md:max-w-[135px]",
    }

    return (
        <main>
            <header className="relative pt-6 pb-15 md:pt-10">
                <div className="w-contain flex flex-col">
                    <div className="relative flex items-end justify-center">
                        <p className="absolute left-0 hidden xl:block">
                            We would love to work
                            <br /> with you on your project
                        </p>
                        <h1 className="text-center text-4xl break-all lg:text-6xl lg:leading-[130%] lg:break-normal xl:text-[5rem]">
                            CONSTRUCTION
                            <br /> EXPLOITS AT IT'S
                            <br /> FINEST
                        </h1>
                        <p className="absolute right-0 hidden text-right xl:block">
                            We create places that deserve to
                            <br /> be lived with the highest quality
                            <br /> materials and attention to detail
                        </p>
                    </div>

                    <div className="relative mx-auto mt-6 flex w-4/5 items-center lg:mt-8 lg:w-fit">
                        <img src="/images/construction-rails.svg" alt="" />
                        <Link
                            to="/"
                            className={cn(
                                buttonVariants(),
                                "absolute right-0 size-14 translate-x-1/2 rounded-full shadow-[0px_3.52px_3.52px_0px_#00000040] sm:size-18 md:size-20 lg:size-25",
                            )}
                        >
                            <ArrowUpRight className="size-6 sm:size-7 md:size-8 lg:size-10" />
                        </Link>
                    </div>

                    <p className="mt-6 text-center text-sm lg:hidden">
                        We create places that deserve to be lived with the
                        <br /> highest quality materials and attention to detail
                    </p>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                variant="secondary"
                                className="mx-auto mt-8 h-auto w-fit rounded-lg px-6! py-3! text-sm font-semibold sm:px-8! sm:py-4! sm:text-base md:mt-10 md:px-10! md:py-5! md:text-lg"
                            >
                                Make an Enquiry <ArrowRight className="size-3" />
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="max-h-dvh max-w-full items-start overflow-auto rounded-b-none bg-[#FDFEFE] text-[#171717] sm:max-w-full md:rounded-t-[82px] lg:max-h-[95%] lg:grid-cols-2 lg:place-content-center lg:gap-0 lg:overflow-visible lg:px-20 lg:pt-20 lg:pb-40 lg:**:data-[slot='dialog-close']:hidden min-[100rem]:w-4/5">
                            <DialogHeader className="sr-only">
                                <DialogTitle>Start Your Project with Us</DialogTitle>
                                <DialogDescription>
                                    Whatever your goal or project size, we will handle it using standards-compliant
                                    methods. We aim for your 100% satisfaction.
                                </DialogDescription>
                            </DialogHeader>

                            <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-0 lg:pt-10">
                                <div className="space-y-4 lg:space-y-6">
                                    <h4 className="text-center text-2xl lg:text-left lg:text-3xl">
                                        Start Your
                                        <br className="md-br" /> Project With Us
                                    </h4>
                                    <p className="text-sm">
                                        Whatever your goal or project size, we will
                                        <br className="md-br" /> handle it using standards-compliant
                                        <br className="md-br" />
                                        methods. We aim for your 100% satisfaction.
                                    </p>
                                </div>
                                <img src="/images/lilac-dotted-arrow.svg" alt="" className="hidden lg:block" />
                                <img src="/images/lilac-dotted-arrow-mobile.svg" alt="" className="lg:hidden" />
                            </div>

                            <div className="space-y-6 lg:px-8">
                                <h4 className="text-lg lg:text-3xl">
                                    Fill out the form and we&apos;ll be in touch as soon as possible.
                                </h4>

                                <EnquiryForm />
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </header>

            {/* Our Commitment to Sustainability. */}
            <section className="w-contain py-15">
                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <h2 className="text-center text-2xl text-white/50 text-outline lg:text-left lg:text-[2.8125rem]">
                                Our Commitment to Sustainability.
                            </h2>
                            <p className="text-center text-sm lg:text-left lg:text-xl">
                                At MoniAK, we take pride in our commitment to sustainable practices and environmental
                                responsibility. As a forward-thinking company, we understand the importance of
                                minimizing our ecological footprint and contributing to a greener future. Our
                                sustainable initiatives encompass every aspect of our operations, from eco-friendly
                                building materials to energy-efficient construction practices.
                            </p>
                        </div>

                        <div className="space-y-4 lg:space-y-6">
                            <p className="font-extrabold text-primary-light lg:text-2xl">Key Features:</p>
                            <ul className="flex flex-col gap-2 text-sm lg:text-lg">
                                {keyFeatures.map((feature, index) => (
                                    <li key={feature.title + index} className="flex items-start gap-1">
                                        <img src="/icons/circle-check.svg" alt="" className="mt-1 size-5 shrink-0" />
                                        <span>
                                            <span className="font-bold text-primary-light">{feature.title}</span>{" "}
                                            {feature.description}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="relative row-start-1 flex items-end lg:row-start-auto">
                        <img
                            src="/images/engineers-working.svg"
                            alt="Engineers collaborating on a construction project"
                            loading="lazy"
                            className="size-full"
                        />
                        <ScrollDownBadge className="absolute right-0 block lg:hidden" />
                    </div>
                </div>

                <p className="mt-10 text-sm lg:text-xl">
                    By choosing MoniAK, you're not just selecting a construction
                    <br className="md-br" /> partner - you're choosing a team committed to building a
                    <br className="md-br" /> better and more sustainable future. Join us in creating
                    <br className="md-br" /> structures that stand the test of time while preserving our
                    <br className="md-br" /> planet for generations to come.
                </p>

                <div className="mt-10 flex items-end justify-center lg:mt-0 lg:justify-between">
                    <EnquiryDialog><button
                        type="button"
                        className={cn(
                            buttonVariants({ variant: "secondary" }),
                            "h-auto rounded-lg px-10 font-semibold lg:py-5 lg:text-lg",
                        )}
                    >
                        Make an Enquiry
                    </button></EnquiryDialog>
                    <ScrollDownBadge className="hidden lg:block" />
                </div>
            </section>

            {/* Services */}
            <section className="w-contain py-15">
                <div className="grid">
                    <div className="mb-6 flex flex-col items-center gap-6 border-primary lg:mb-0 lg:flex-row lg:gap-0 lg:border-2">
                        <div className="border-y-2 border-r-2 border-l-2 border-primary p-4 lg:border-y-0 lg:border-l-0 lg:p-8">
                            <h2 className="text-xl text-white/50 text-outline lg:text-[2.8125rem]">Services</h2>
                        </div>
                        <div className="border-2 border-primary p-4 lg:border-0 lg:p-8">
                            <p className="text-sm lg:text-lg">
                                Welcome to MoniAK, your partner in construction excellence. From groundbreaking designs
                                to meticulous renovations, we offer a comprehensive range of services
                            </p>
                        </div>
                    </div>
                    {services.map(({ label, to }, index) => (
                        <Link key={label + index} to={to}>
                            <div className="flex items-center justify-between border-x-2 border-b-2 border-primary p-4 first:border-t-2 lg:p-8 lg:first:border-t-0">
                                <h2 className="text-lg lg:text-6xl">{label}</h2>
                                <div className="flex size-7.5 shrink-0 items-center justify-center rounded-full bg-primary transition-colors hover:bg-primary/90 lg:size-25">
                                    <ArrowRight className="size-3.5 lg:size-10" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* RECENT PROJECTS */}
            <section className="bg-[url(/images/recent-project-mobile-vector.svg),linear-gradient(var(--primary),var(--primary))] bg-position-[top_right] bg-no-repeat py-15 lg:bg-[url(/images/recent-project-vector.svg),linear-gradient(var(--primary),var(--primary))]">
                <div className="w-contain">
                    <h3 className="mb-15 text-center text-3xl text-white/50 text-outline lg:mb-8 lg:text-left lg:text-[2.8125rem]">
                        RECENT
                        <br className="lg:hidden" /> PROJECTS
                    </h3>

                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 5000,
                                stopOnInteraction: false,
                                stopOnMouseEnter: true,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent>
                            {recentProjects.map((project, index) => (
                                <CarouselItem key={project.src + index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                                    <img
                                        src={project.src}
                                        alt={project.alt}
                                        className="size-full"
                                        loading="lazy"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4 bg-primary" />
                        <CarouselNext className="right-4 bg-primary" />
                    </Carousel>
                </div>
            </section>

            {/* Trusted By */}
            <section className="bg-[#020d05] py-12 md:py-16">
                <div className="w-contain">
                    <h3 className="mb-8 text-3xl text-white/80 text-outline lg:text-[2.8125rem]">Trusted By</h3>

                    <div className="flex items-center gap-(--marquee-gap) overflow-hidden [--marquee-gap:calc(var(--spacing)*6)] md:[--marquee-gap:calc(var(--spacing)*8)] lg:[--marquee-gap:calc(var(--spacing)*10)] lg:mask-x-from-90% hover:[&>:is(div)]:paused">
                        {Array.from({ length: 2 }, (_, i) => (
                            <div key={i} className="flex shrink-0 animate-marquee items-center gap-(--marquee-gap)">
                                {trustedBy.map((partner, index) => (
                                    <div
                                        key={partner.name + index}
                                        className="group flex h-[110px] min-w-[150px] shrink-0 items-center justify-center px-3 py-2 md:h-[132px] md:min-w-[175px] md:px-4"
                                    >
                                        {partner.image ? (
                                            <img
                                                src={partner.image}
                                                alt={`${partner.name} logo`}
                                                loading="lazy"
                                                className={cn(
                                                    "h-auto w-auto object-contain opacity-95 transition-[transform,filter,opacity] duration-300 group-hover:scale-105 group-hover:opacity-100",
                                                    partnerLogoSizeClasses[partner.size],
                                                    "invertOnDark" in partner &&
                                                        partner.invertOnDark &&
                                                        "brightness-0 invert",
                                                )}
                                            />
                                        ) : (
                                            <span className="max-w-[170px] text-center font-michroma text-xl font-semibold text-white/90 transition-transform duration-300 group-hover:scale-105 group-hover:text-white md:max-w-[210px] md:text-2xl">
                                                {partner.name}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
