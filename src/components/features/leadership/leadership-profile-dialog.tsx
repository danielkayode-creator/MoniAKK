import { HardHat, Lightbulb, ShieldCheck, UsersRound } from "lucide-react"
import type { LeadershipProfile } from "@/constants/leadership"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const icons = [Lightbulb, UsersRound, ShieldCheck, HardHat]

export default function LeadershipProfileDialog({ profile }: { profile: LeadershipProfile }) {
    return (
        <Dialog>
            <DialogTrigger asChild><Button variant="secondary">Read Full Profile</Button></DialogTrigger>
            <DialogContent className="max-h-[92dvh] overflow-y-auto bg-white text-[#171717] sm:max-w-3xl lg:p-10">
                <DialogHeader className="pr-8 text-left"><DialogTitle className="font-michroma text-2xl leading-tight text-primary lg:text-3xl">{profile.name}</DialogTitle><DialogDescription className="text-base font-semibold text-[#9b7617]">{profile.role}</DialogDescription></DialogHeader>
                <div className="space-y-8">
                    <ProfileCopy title="Background" paragraphs={profile.background} />
                    <ProfileCopy title="Role at MoniAK" paragraphs={profile.roleAtMoniak} />
                    <div className="space-y-4"><h3 className="text-xl text-primary">Key Strengths</h3><div className="grid gap-3 sm:grid-cols-2">{profile.strengths.map((strength, index) => { const Icon = icons[index]; return <article key={strength.title} className="rounded-xl bg-primary p-5 text-white shadow-sm"><Icon aria-hidden="true" className="mb-4 text-[#d4af37]" /><h4 className="text-base">{strength.title}</h4><p className="mt-2 text-sm leading-relaxed">{strength.description}</p></article> })}</div></div>
                    <div className="space-y-4"><h3 className="text-xl text-primary">Leadership Attributes</h3><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{profile.values.map((value) => <article key={value.title} className="rounded-xl border border-[#d4af37]/50 p-4"><h4 className="text-sm text-[#8a6713]">{value.title}</h4><p className="mt-2 text-xs leading-relaxed">{value.description}</p></article>)}</div></div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

function ProfileCopy({ title, paragraphs }: { title: string; paragraphs: Array<string> }) {
    return <section className="space-y-3"><h3 className="text-xl text-primary">{title}</h3>{paragraphs.map((paragraph) => <p key={paragraph} className="text-sm leading-relaxed lg:text-base">{paragraph}</p>)}</section>
}
