import type { ReactNode } from "react"
import EnquiryForm from "@/components/features/forms/enquiry-form"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function EnquiryDialog({ children }: { children: ReactNode }) {
    return <Dialog><DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="max-h-dvh max-w-full overflow-auto bg-[#FDFEFE] text-[#171717] sm:max-w-full lg:max-h-[95%] lg:grid-cols-2 lg:gap-12 lg:px-20 lg:py-20">
            <DialogHeader className="sr-only"><DialogTitle>Make an Enquiry</DialogTitle><DialogDescription>Tell us about your project and our team will be in touch.</DialogDescription></DialogHeader>
            <div className="space-y-5 lg:pt-10"><h2 className="text-2xl lg:text-3xl">Start Your Project With Us</h2><p>Whatever your project size, we are ready to help.</p></div>
            <div className="space-y-6"><h2 className="text-lg lg:text-3xl">Fill out the form and we&apos;ll be in touch.</h2><EnquiryForm /></div>
        </DialogContent></Dialog>
}
