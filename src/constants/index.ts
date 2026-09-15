export const navLinks = [
    {
        label: "HOME",
        to: "/",
    },
    {
        label: "ABOUT US",
        to: "/about",
    },
    {
        label: "SERVICES",
        to: "/services",
    },
    {
        label: "PROJECTS",
        to: "/projects",
    },
    {
        label: "CONTACT US",
        to: "/contact",
    },
]

export const keyFeatures = [
    {
        title: "Green Building Materials:",
        description:
            "We prioritize the use of sustainable and recycled materials in our projects to reduce the environmental impact.",
    },
    {
        title: "Energy-Efficient Designs:",
        description:
            "Our team incorporates energy-efficient design principles to optimize the use of natural resources and minimize energy consumption.",
    },
    {
        title: "Waste Reduction Strategies:",
        description:
            "We implement comprehensive waste reduction strategies to minimize construction waste and promote responsible disposal practices.",
    },
    {
        title: "Community Engagement:",
        description:
            "We actively engage with local communities to foster environmentally conscious practices and promote awareness of sustainable construction.",
    },
]

export const services = [
    {
        label: "Construction",
        to: "/services",
    },
    {
        label: "Renovation",
        to: "/services",
    },
    {
        label: "Engineering Design",
        to: "/services",
    },
    {
        label: "Project Management",
        to: "/services",
    },
]

export const recentProjects = [
    { src: "/images/proposed-apapa-lga.png", alt: "Apapa multipurpose building project" },
    { src: "/images/nmpw R.png", alt: "Non-Motorized Pedestrian Walkway" },
    { src: "/images/yala-heights R.jpg", alt: "Yala Heights multi-storey development" },
    { src: "/images/gate-house R.png", alt: "Rail corridor gate house replacement project" },
    { src: "/images/iju-station-building R.png", alt: "Iju railway station building project" },
    { src: "/images/mushin-primary-school R.png", alt: "Mushin Primary School reconstruction project" },
]

export type PartnerLogo = {
    name: string
    image: string | null
    size: "aec" | "railink" | "ccecc" | "lamata" | "nexant" | "veoctech"
    invertOnDark?: boolean
}

export const trustedBy: ReadonlyArray<PartnerLogo> = [
    { name: "AEC", image: "/images/AEC.PNG", size: "aec" },
    { name: "AI RAILLINK", image: "/images/AI RAILLINK.PNG", size: "railink" },
    { name: "CCECC", image: "/images/CCECC-transparent-white-text.png", size: "ccecc" },
    { name: "LAMATA", image: "/images/LAMATA-transparent.png", size: "lamata" },
    { name: "Nexant", image: "/images/nexant1.PNG", size: "nexant" },
    { name: "VeocTech", image: "/images/VeocTech.png", size: "veoctech" },
]
export const contactDetails = {
    email: { label: "Email Us", value: "info@moniakgroup.com", href: "mailto:info@moniakgroup.com" },
    phone: { label: "Call Us", value: "+234 813 465 2745", href: "tel:+2348134652745" },
    whatsapp: {
        label: "WhatsApp Us",
        numbers: [
            { value: "+234 908 330 1780", href: "https://wa.me/2349083301780" },
            { value: "+234 813 465 2745", href: "https://wa.me/2348134652745" },
        ],
    },
    address: "No 2, Faneye Street, Off Borno Way, Alagomeji, Yaba, Lagos",
    hours: "8am–5pm",
} as const
export const footerLinks = [
    {
        title: "Company",
        links: [
            {
                label: "Home",
                to: "/",
            },
            {
                label: "About Us",
                to: "/about",
            },
            {
                label: "Services",
                to: "/services",
            },
            {
                label: "Projects",
                to: "/projects",
            },
            {
                label: "Contact Us",
                to: "/contact",
            },
        ],
    },
    {
        title: "Services",
        links: [
            {
                label: "Construction",
                to: "/services",
            },
            {
                label: "Renovation",
                to: "/services",
            },
            {
                label: "Project Management",
                to: "/services",
            },
            {
                label: "Engineering Design",
                to: "/services",
            },
        ],
    },
    {
        title: "Contact Us",
        links: [
            {
                label: contactDetails.phone.value,
                to: contactDetails.phone.href,
            },
            ...contactDetails.whatsapp.numbers.map(({ value, href }) => ({
                label: value,
                to: href,
            })),
            {
                label: contactDetails.email.value,
                to: contactDetails.email.href,
            },
        ],
    },
]

export const socialLinks = [
    {
        icon: "/icons/facebook.svg",
        to: "/",
    },
    {
        icon: "/icons/instagram.svg",
        to: "/",
    },
    {
        icon: "/icons/twitter.svg",
        to: "/",
    },
    {
        icon: "/icons/linkedin.svg",
        to: "/",
    },
]
