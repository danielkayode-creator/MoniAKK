import { createServerFn } from "@tanstack/react-start"
import { getRequest } from "@tanstack/react-start/server"
import { enquirySchema } from "@/constants/enquiry"

export const submitEnquiry = createServerFn({ method: "POST" })
    .inputValidator(enquirySchema)
    .handler(async ({ data }) => {
        const { deliverEnquiry } = await import("./enquiry.server")
        return deliverEnquiry(data, getRequest())
    })
