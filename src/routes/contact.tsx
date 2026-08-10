import { createFileRoute } from "@tanstack/react-router"
import { Building2, Clock3, Handshake, Mail, MapPin, Phone } from "lucide-react"
import EnquiryForm from "@/components/features/forms/enquiry-form"
import { createSeoTags } from "@/lib/seo"

export const Route = createFileRoute("/contact")({
    head: () => ({ meta: createSeoTags({ title: "Contact MoniAK", description: "Contact MoniAK to discuss construction projects, corporate partnerships, and general enquiries.", path: "/contact" }) }),
    component: ContactPage,
})

const details = { address: "No 2, Faneye Street, Off Borno Way, Alagomeji, Yaba, Lagos", phone: "09066788675", phoneHref: "tel:+2349066788675", email: "moniak@project.com", emailHref: "mailto:moniak@project.com", hours: "8am–5pm" }
const cards = [
    { label: "Office Address", value: details.address, icon: MapPin },
    { label: "Telephone", value: details.phone, href: details.phoneHref, icon: Phone },
    { label: "Email Address", value: details.email, href: details.emailHref, icon: Mail },
    { label: "Office Hours", value: details.hours, icon: Clock3 },
    { label: "Corporate Enquiries", value: details.email, href: details.emailHref, icon: Building2 },
]
function ContactPage() {
    return <main>
        <header className="relative w-contain flex justify-center pt-15 lg:pb-15">
            <div className="space-y-4 text-center lg:space-y-6">
                <h1 className="text-3xl lg:text-[5rem]">Contact MoniAK</h1>
                <p className="mx-auto max-w-4xl text-sm lg:text-lg">We&apos;d be pleased to discuss your project, partnership opportunities, or general enquiries. Our team is ready to assist.</p>
            </div>
        </header>

        <section aria-labelledby="contact-details-title" className="w-contain py-15">
            <h2 id="contact-details-title" className="text-center text-2xl lg:text-[2.8125rem]">Connect with our team</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {cards.map(({ label, value, href, icon: Icon }) => <article key={label} className="rounded-2xl bg-primary p-6 lg:p-8">
                    <span className="mb-6 flex size-11 items-center justify-center rounded-full bg-primary-light"><Icon aria-hidden="true" /></span>
                    <h3 className="font-montserrat text-sm font-semibold lg:text-lg">{label}</h3>
                    {href ? <a href={href} className="mt-2 block break-words text-sm transition-colors hover:text-white/70 lg:text-base">{value}</a> : <p className="mt-2 text-sm lg:text-base">{value}</p>}
                </article>)}
            </div>
        </section>

        <section className="bg-primary py-15">
            <div className="w-contain grid items-start gap-10 lg:grid-cols-2 lg:gap-15">
                <div className="space-y-6 lg:pt-8">
                    <h2 className="text-2xl leading-tight lg:text-[2.8125rem]">How can we help?</h2>
                    <p className="max-w-lg text-sm leading-7 lg:text-lg">Share a little about what you need. Required fields are marked with an asterisk, and your information is used only to respond to your enquiry.</p>
                    <div className="flex items-center gap-4 pt-4"><Handshake className="size-9 shrink-0" aria-hidden="true" /><p className="text-sm lg:text-base">Projects, partnerships, and corporate enquiries</p></div>
                </div>
                <div className="rounded-2xl bg-secondary p-6 text-secondary-foreground sm:p-8 lg:p-10"><EnquiryForm /></div>
            </div>
        </section>
    </main>
}
