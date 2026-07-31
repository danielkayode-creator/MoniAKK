"use client"

import { standardSchemaResolver } from "@hookform/resolvers/standard-schema"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { CheckCircle2, LoaderCircle } from "lucide-react"
import { z } from "zod/v4"

import { Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import FormField from "@/components/ui/form-field"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const enquirySchema = z.object({
    name: z.string().min(1, "Please enter your name"),
    email: z.email("Please enter a valid email address"),
    telephone: z.string().min(1, "Please enter your telephone number"),
    projectType: z.string().min(1, "Please select a project type"),
    message: z.string().min(1, "Please tell us about your project"),
    marketingConsent: z.boolean().optional(),
})

type TEnquiryFormData = z.infer<typeof enquirySchema>

async function submitEnquiry(data: TEnquiryFormData) {
    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT
    if (endpoint) {
        const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
        if (!response.ok) throw new Error("We could not send your enquiry. Please try again.")
        return "sent"
    }
    const body = [data.name, data.email, data.telephone, data.projectType, "", data.message].join("\n")
    window.location.href = "mailto:moniak@project.com?subject=Project%20enquiry&body=" + encodeURIComponent(body)
    return "email"
}

const projectTypes = [
    { value: "construction", label: "Construction" },
    { value: "renovation", label: "Renovation" },
    { value: "engineering-design", label: "Engineering Design" },
    { value: "project-management", label: "Project Management" },
    { value: "other", label: "Other Enquiry" },
]

const EnquiryForm = () => {
    const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null)
    const form = useForm<TEnquiryFormData>({
        resolver: standardSchemaResolver(enquirySchema),
        defaultValues: {
            name: "",
            email: "",
            telephone: "",
            projectType: "",
            message: "",
            marketingConsent: false,
        },
    })

    const onSubmit = async (data: TEnquiryFormData) => {
        setFeedback(null)
        try {
            const result = await submitEnquiry(data)
            setFeedback({ type: "success", text: result === "sent" ? "Thank you. Your enquiry has been sent successfully." : "Your enquiry has been prepared in your email application." })
            form.reset()
        } catch (error) {
            setFeedback({ type: "error", text: error instanceof Error ? error.message : "We could not send your enquiry." })
        }
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid gap-4 lg:grid-cols-2">
                <FormField name="name" control={form.control}>
                    {({ value, ...field }) => (
                        <Input
                            {...field}
                            value={value as string}
                            placeholder="Name"
                            className="h-12 rounded-lg border-[#E5E5E5] placeholder:text-xs placeholder:text-[#858B8E]"
                        />
                    )}
                </FormField>

                <FormField name="email" control={form.control}>
                    {({ value, ...field }) => (
                        <Input
                            {...field}
                            value={value as string}
                            type="email"
                            placeholder="Email"
                            className="h-12 rounded-lg border-[#E5E5E5] placeholder:text-xs placeholder:text-[#858B8E]"
                        />
                    )}
                </FormField>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
                <FormField name="telephone" control={form.control}>
                    {({ value, ...field }) => (
                        <Input
                            {...field}
                            value={value as string}
                            type="tel"
                            placeholder="Telephone"
                            className="h-12 rounded-lg border-[#E5E5E5] placeholder:text-xs placeholder:text-[#858B8E]"
                        />
                    )}
                </FormField>

                <FormField name="projectType" control={form.control}>
                    {({ value, onChange }) => (
                        <Select value={value as string} onValueChange={onChange}>
                            <SelectTrigger className="h-12! w-full rounded-lg border-[#E5E5E5] text-xs text-[#858B8E]">
                                <SelectValue placeholder="Project type" />
                            </SelectTrigger>
                            <SelectContent>
                                {projectTypes.map((option, index) => (
                                    <SelectItem key={option.value + index} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    )}
                </FormField>
            </div>

            <FormField name="message" control={form.control}>
                {({ value, ...field }) => (
                    <Textarea
                        {...field}
                        value={value as string}
                        placeholder="Tell us more about your project or enquiry."
                        className="min-h-32 rounded-lg border-[#E5E5E5] placeholder:text-xs placeholder:text-[#858B8E]"
                    />
                )}
            </FormField>

            <FormField name="marketingConsent" control={form.control} orientation="horizontal">
                {({ value, onChange }) => (
                    <div className="flex items-start gap-3">
                        <Checkbox
                            id="marketingConsent"
                            checked={value as boolean}
                            onCheckedChange={onChange}
                            className="mt-1"
                        />
                        <label htmlFor="marketingConsent" className="text-sm leading-relaxed">
                            Yes, I&apos;d like to receive occasional marketing emails from us. I have the right to opt
                            out at any time.{" "}
                            <Link to="/" className="text-[#20A91E] underline">
                                View privacy policy.
                            </Link>
                        </label>
                    </div>
                )}
            </FormField>

            {feedback && <div role={feedback.type === "error" ? "alert" : "status"} aria-live="polite" className="flex items-center gap-2 rounded-lg border p-3 text-sm">{feedback.type === "success" && <CheckCircle2 aria-hidden="true" />}{feedback.text}</div>}
            <Button type="submit" disabled={form.formState.isSubmitting} className="h-14 w-full rounded-lg lg:text-lg">
                {form.formState.isSubmitting ? <><LoaderCircle className="animate-spin" aria-hidden="true" />Sending enquiry...</> : "Make an Enquiry"}
            </Button>
        </form>
    )
}

export default EnquiryForm
