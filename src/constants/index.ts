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
    { src: "/images/nmpw.png", alt: "Non-motorized pedestrian walkway project" },
    { src: "/images/yala-heights.png", alt: "Yala Heights multi-storey development" },
    { src: "/images/gate-house.png", alt: "Rail corridor gate house replacement project" },
    { src: "/images/iju-station-building.png", alt: "Iju railway station building project" },
    { src: "/images/mushin-primary-school.png", alt: "Mushin Primary School reconstruction project" },
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
                label: "09066788675",
                to: "tel:+2349066788675",
            },
            {
                label: "09066788675",
                to: "tel:+2349066788675",
            },
            {
                label: "moniak@project.com",
                to: "mailto:moniak@project.com",
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
