export type Project = {
    slug: string
    title: string
    serviceCategory?: string
    description: { brief: string; details: string }
    overview?: string
    designObjective: Array<string> | null
    projectScope: Array<{ items: Array<string>; image?: string }> | null
    services?: Array<{ title: string; description: string }>
    images: { displayImage: string; gallery: Array<string>; alt?: Array<string> }
}
export const ourProjects: Array<Project> = [
    {
        slug: "apapa-lga-multipurpose-building",
        title: "Proposed Apapa Local Government New Multi-Propose Building",
        description: {
            brief: "Design-led delivery of a new multipurpose LG office complex with key amenities.",
            details:
                "The Apapa Local Government in Lagos, Nigeria, requires a modern, sustainable, and multipurpose office complex on a 1539 square meter land parcel. The building will feature a mix of open-plan and private offices, a clinic, staff canteen, multifunctional conference rooms, library, and other amenities. The design should prioritize natural lighting, sustainability, and accessibility. The full design concept and build was developed by MoniAK.",
        },
        designObjective: ["Building Layout", "Accessibility", "Sustainability", "Amenities"],
        projectScope: null,
        images: {
            displayImage: "/images/proposed-apapa-lga.png",
            gallery: ["/images/proposed-apapa-lga-1.png", "/images/proposed-apapa-lga-2.png"],
        },
    },
    {
        slug: "nmpw-pedestrian-walkway",
        title: "Non-Motorized Pedestrian Walkway (NMPW) Project",
        description: {
            brief: "Builds safe under-bridge pedestrian walkways along the Lagos Red Line corridor.",
            details:
                "The Non-Motorized Pedestrian Walkway (NMPW) Project is LAMATA's flagship sustainable mobility initiative along the Lagos Red Line corridor, covering Oyingbo, Yaba, Mushin, and Ikeja. Designed as a clean, green solution to reduce carbon emissions and improve air quality, it transforms under-bridge spaces into safe pedestrian pathways. MoniAK has been appointed as the Principal Contractor to construct and deliver these facilities, including all associated civil, structural, and finishing works, breathing new life into these high-density areas.",
        },
        designObjective: ["Building Layout", "Accessibility", "Sustainability", "Amenities"],
        projectScope: null,
        images: {
            displayImage: "/images/nmpw.png",
            gallery: ["/images/nmpw-1.png", "/images/nmpw-2.png", "/images/nmpw-3.png", "/images/nmpw-4.png"],
        },
    },
    {
        slug: "yala-heights",
        title: "Yala Heights",
        serviceCategory: "Structural Design and Construction",
        description: {
            brief:
                "A residential development supported by MoniAK through structural design and construction services.",
            details:
                "Yala Heights is a residential development for which MoniAK provided structural design and construction services. The project reflects the companyï¿½s integrated approach to engineering design, structural coordination, and construction delivery.",
        },
        overview:
            "Yala Heights is a residential development delivered with MoniAKï¿½s involvement in both structural design and construction. The engagement combined structural engineering input with coordinated construction execution to support the projectï¿½s architectural intent and overall delivery.",
        designObjective: null,
        projectScope: null,
        services: [
            {
                title: "Structural Design",
                description:
                    "Development and coordination of the structural design required to support the buildingï¿½s architectural and functional requirements.",
            },
            {
                title: "Construction",
                description:
                    "Execution and coordination of the construction works in accordance with the approved design and project requirements.",
            },
        ],
        images: {
            displayImage: "/images/1.jpg",
            gallery: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"],
            alt: [
                "Yala Heights architectural exterior view",
                "Yala Heights development aerial rendering",
                "Yala Heights residential building exterior",
                "Yala Heights outdoor amenity and pool area",
            ],
        },
    },
    {
        slug: "fences-gate-houses-replacement",
        title: "Replacement of Fences, Gate Houses and other Ancillary Structures",
        description: {
            brief: "Rebuilt perimeter security and access facilities impacted by Red Line works.",
            details:
                "The Replacement of Fences, Gate Houses, and Ancillary Structures affected by the Red Line Rail Project at Murtala Muhammed Way, Yaba is a remedial works project aimed at restoring and enhancing boundary security and site access facilities impacted by the ongoing Lagos Rail Mass Transit (LRMT) Red Line construction.",
        },
        designObjective: null,
        projectScope: [
            {
                items: [
                    "Demolition & Clearance: Careful removal of existing boundary fences, gate houses, and ancillary facilities within the Red Line Right-of-Way (RoW), including clearing and proper disposal of debris in line with environmental guidelines.",
                    "Site Alignment: Ensuring all works align with the Red Line rail project design, specifically regarding track alignment, station access, and safety clearances.",
                    "HSE Management: Implementation of strict HSE management plans during demolition and reconstruction to ensure public safety.",
                    "Minimal Disruption: Execution of works designed to minimize disruption to residents, commuters, and traffic flow along Murtala Muhammed Way.",
                ],
                image: "/images/gate-house-scope-1.png",
            },
            {
                items: [
                    "Perimeter Security: Erection of reinforced concrete block walls (or approved alternatives) along adjusted property boundaries with adequate height and security features like razor wire and anti-climb measures.",
                    "Gate House Construction: Building of modern gate houses and entrance security posts to replace demolished structures, including electrical fittings, lighting, and CCTV conduits.",
                    "Ancillary Works: Reconstruction of drainage channels, walkways, driveways, and re-provision of water supply and sewage connections disturbed during works.",
                    "Handover: Final testing, snag rectification, and handover of all reconstructed structures to ensure they meet aesthetic and functional standards.",
                ],
                image: "/images/gate-house-scope-2.png",
            },
        ],
        images: {
            displayImage: "/images/gate-house.png",
            gallery: ["/images/gate-house-1.png", "/images/gate-house-2.png"],
        },
    },
    {
        slug: "iju-station-building",
        title: "Replacement of Iju Station Building",
        description: {
            brief: "Upgraded Iju Station by replacing the old structure with a modern passenger station.",
            details:
                "Replacement of fences, gate houses and other ancillary structures affected by the Red Line Rail Project at Murtala Mohammed Way, Yaba, ensuring security, access, and aesthetics restored to affected institutions, businesses, and residences. The project involves demolition of existing structures within the Right-of-Way (RoW), followed by construction of new perimeter fences, modern gate houses, and ancillary infrastructure to meet current safety, security and aesthetics requirements.",
        },
        designObjective: null,
        projectScope: [
            {
                items: [
                    "Site Clearance: Careful dismantling and removal of the existing Iju Station building, temporary structures, and boundary fences within the Right-of-Way (RoW), ensuring safe disposal of debris in compliance with environmental regulations.",
                    "Structural Construction: Construction of a new station foundation and superstructure using reinforced concrete and structural steel, strictly adhering to NRC design specifications.",
                    "Platform Upgrades: Provision of platforms with adequate height, length, and accessibility features to accommodate both commuter and intercity trains.",
                    "Building Envelope: Installation of modern roofing, cladding, and durable finishes designed to withstand heavy passenger usage and local weather conditions.",
                ],
                image: "/images/iju-station-building-scope-1.png",
            },
            {
                items: [
                    "Passenger Facilities: Construction of functional ticketing halls, waiting lounges, restrooms, retail kiosks, and baggage areas, ensuring universal accessibility via ramps and tactile flooring.",
                    "MEP & Systems: Installation of comprehensive electrical systems (solar/inverter backup), HVAC for comfort, fire alarms, and ICT data cabling.",
                    "Smart Integration: Integration of CCTV surveillance, passenger information display boards, and public address systems with NRC's signaling operations.",
                    "External Works & Handover: Construction of access roads, parking lots, and flood-protection drainage systems, followed by rigorous testing, commissioning, and formal handover to the Nigerian Railway Corporation.",
                ],
                image: "/images/iju-station-building-scope-2.png",
            },
        ],
        images: {
            displayImage: "/images/iju-station-building.png",
            gallery: [
                "/images/iju-station-building-1.jpg",
                "/images/iju-station-building-2.png",
                "/images/iju-station-building-3.png",
                "/images/iju-station-building-4.jpg",
            ],
        },
    },
    {
        slug: "mushin-primary-school",
        title: "Mushin Primary School",
        description: {
            brief: "Supplied blocks and managed onsite personnel for the school's reconstruction.",
            details:
                "Lagos state through LAMATA constructed rail lines and  stations across the state, this led to a few demolitions, one  of which is the old Mushin Primary school and  reconstructed by BANCI. MoniAK was involved in supplying  blocks for the new primary school and on-site personnel  management.",
        },
        designObjective: null,
        projectScope: null,
        images: {
            displayImage: "/images/mushin-primary-school.png",
            gallery: [
                "/images/mushin-primary-school-1.png",
                "/images/mushin-primary-school-2.png",
                "/images/mushin-primary-school-3.png",
                "/images/mushin-primary-school-4.png",
            ],
        },
    },
]
