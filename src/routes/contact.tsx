import { createFileRoute } from "@tanstack/react-router"
import { Building2, Clock3, Handshake, Mail, MapPin, Phone } from "lucide-react"
import EnquiryForm from "@/components/features/forms/enquiry-form"
import { createSeoTags } from "@/lib/seo"

export const Route = createFileRoute("/contact")({
    head: () => ({ meta: createSeoTags({ title: "Contact MoniAK", description: "Contact MoniAK to discuss construction projects, corporate partnerships, and general enquiries.", path: "/contact" }) }),
    component: ContactPage,
})

const details = { address: "To be provided", phone: "09066788675", phoneHref: "tel:+2349066788675", email: "moniak@project.com", emailHref: "mailto:moniak@project.com", hours: "To be provided" }
const cards = [
    { label: "Office Address", value: details.address, icon: MapPin },
    { label: "Telephone", value: details.phone, href: details.phoneHref, icon: Phone },
    { label: "Email Address", value: details.email, href: details.emailHref, icon: Mail },
    { label: "Office Hours", value: details.hours, icon: Clock3 },
    { label: "Corporate Enquiries", value: details.email, href: details.emailHref, icon: Building2 },
]
function ContactPage() {
    return <main>
        <header className="relative isolate overflow-hidden border-b border-white/10 py-24 lg:py-36">
            <div className="absolute inset-0 -z-20 bg-[url('/images/high-rise-building.png')] bg-cover bg-center" />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,18,6,0.96)_0%,rgba(16,75,33,0.88)_55%,rgba(4,18,6,0.68)_100%)]" />
            <div className="w-contain">
                <p className="mb-4 font-michroma text-xs tracking-[0.25em] text-[#55C653] uppercase">Start a conversation</p>
                <h1 className="text-4xl leading-tight sm:text-5xl lg:text-7xl">Contact MoniAK</h1>
                <p className="mt-6 max-w-3xl text-base leading-7 text-white/80 lg:text-xl lg:leading-9">We&apos;d be pleased to discuss your project, partnership opportunities, or general enquiries. Our team is ready to assist.</p>
            </div>
        </header>

        <section aria-labelledby="contact-details-title" className="w-contain py-16 lg:py-24">
            <p className="text-sm font-semibold tracking-widest text-[#55C653] uppercase">Contact details</p>
            <h2 id="contact-details-title" className="mt-3 text-2xl lg:text-4xl">Connect with our team</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {cards.map(({ label, value, href, icon: Icon }) => <article key={label} className="group min-h-52 rounded-xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#20A91E]/60">
                    <span className="mb-8 flex size-11 items-center justify-center rounded-full bg-primary-light/40 text-[#55C653]"><Icon aria-hidden="true" /></span>
                    <h3 className="font-montserrat text-sm font-semibold text-white/55">{label}</h3>
                    {href ? <a href={href} className="mt-2 block break-words text-sm hover:text-[#55C653]">{value}</a> : <p className="mt-2 text-sm">{value}</p>}
                </article>)}
            </div>
        </section>

        <section className="border-y border-white/10 bg-primary/35 py-16 lg:py-24">
            <div className="w-contain grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                <div>
                    <p className="text-sm font-semibold tracking-widest text-[#55C653] uppercase">Send an enquiry</p>
                    <h2 className="mt-3 text-3xl leading-tight lg:text-5xl">How can we help?</h2>
                    <p className="mt-6 max-w-lg leading-7 text-white/65">Share a little about what you need. Required fields are marked with an asterisk, and your information is used only to respond to your enquiry.</p>
                    <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-8"><Handshake className="size-9 text-[#55C653]" aria-hidden="true" /><p className="text-sm text-white/70">Projects, partnerships, and corporate enquiries</p></div>
                </div>
                <div className="rounded-2xl bg-[#FDFEFE] p-6 text-[#171717] shadow-2xl sm:p-8 lg:p-10"><EnquiryForm /></div>
            </div>
        </section>

    </main>
}
