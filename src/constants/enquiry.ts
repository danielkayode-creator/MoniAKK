import { z } from "zod/v4"

export const enquiryServiceOptions = [
    { value: "water-treatment-design-and-installation", label: "Water Treatment Design and Installation" },
    { value: "borehole-installation", label: "Borehole Installation" },
    { value: "second-fix-contractor", label: "Second-Fix Contractor" },
    { value: "renovation", label: "Renovation" },
    { value: "design-and-build-contractor", label: "Design and Build Contractor" },
    { value: "construction-management", label: "Construction Management" },
    { value: "electrical-installation-and-services", label: "Electrical Installation and Services" },
    { value: "masonry-work", label: "Masonry Work" },
    { value: "plumbing-installation-and-services", label: "Plumbing Installation and Services" },
] as const

export const enquirySchema = z.object({
    name: z.string().trim().min(1, "Please enter your name").max(200, "Please use 200 characters or fewer"),
    email: z.email("Please enter a valid email address").max(254),
    telephone: z.string().trim().min(1, "Please enter your telephone number").max(50),
    projectType: z.string().refine(
        (value) => enquiryServiceOptions.some((option) => option.value === value),
        "Please select a project type",
    ),
    message: z.string().trim().min(1, "Please tell us about your project").max(10000, "Please use 10,000 characters or fewer"),
    marketingConsent: z.boolean().optional(),
})

export type EnquiryData = z.infer<typeof enquirySchema>

export const enquirySuccessMessage = "Thank you for contacting Moni-AK. Your enquiry has been received, and a member of our team will respond shortly."
export const enquiryErrorMessage = "We could not send your enquiry. Please try again. If the problem continues, contact us using the phone or WhatsApp numbers on this website."
