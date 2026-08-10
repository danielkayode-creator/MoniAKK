export type LeadershipItem = { title: string; description: string }

export type LeadershipProfile = {
    name: string
    role: string
    summary: string
    background: Array<string>
    roleAtMoniak: Array<string>
    strengths: Array<LeadershipItem>
    values: Array<LeadershipItem>
}

export const leadershipOverview = [
    "MoniAK is built on the joint leadership of Engr. Rofiat SULAIMON and Toks AKINBADE, combining design excellence with practical construction delivery expertise.",
    "Engr. Rofiat SULAIMON drives the design vision, technical coordination and engineering-quality focus, while Toks AKINBADE drives construction delivery, site execution, HSE, project management and client-side delivery control. Together, they shape MoniAK's strategy, business development, client relations, procurement discipline, quality assurance and end-to-end delivery performance.",
    "They are supported by a trusted pool of specialist consultants and key team members whose expertise reflects MoniAK's core services: construction planning support, logistics, procurement support, personnel management, project delivery and Design & Build implementation.",
    "With over 30 years of combined experience, the leadership team is committed to delivering safe, compliant, client-focused, and value-driven projects across Nigeria’s building, infrastructure, and development sectors.",
]

export const leadershipModel = [
    { name: "Engr. Rofiat SULAIMON", role: "Lead, Design", skills: "Design vision, technical coordination, structural/architectural coordination, design quality, engineering precision, innovation in design, compliance with standards and best design practices." },
    { name: "Toks AKINBADE", role: "Lead, Construction", skills: "Construction delivery, site execution, project management, HSE and QA/QC coordination, programme management, vendor management." },
    { name: "Specialist Consultants & Key Members", role: "Technical and Delivery Support", skills: "Technical assistance, resource mobilisation, specialist input, commercial and risk assessment, logistics, cost control and site supervision support." },
]

const sharedValues = [
    { title: "Leadership", description: "Proven ability to lead teams and deliver complex projects successfully." },
    { title: "Expertise", description: "Extensive experience in engineering and construction management." },
    { title: "Commitment", description: "Committed to excellence, safety and stakeholder satisfaction." },
    { title: "Delivery", description: "Delivering high-profile projects worth billions of dollars successfully." },
]

export const leadershipProfiles: Array<LeadershipProfile> = [
    {
        name: "Engr. Rofiat SULAIMON",
        role: "Lead, Design",
        summary: "A First Class Civil Engineering graduate who drives MoniAK's design thinking, technical coordination and design-quality focus.",
        background: ["Engr. Rofiat SULAIMON is a First Class graduate of Civil Engineering and leads Moni-AK’s design thinking, technical coordination and design-quality focus. She brings civil/structural engineering capability, design review discipline, project documentation strength and a practical understanding of constructability from multidisciplinary infrastructure and building project environments. Her role complements Toks AKINBADE’s construction delivery leadership, giving Moni-AK a balanced design-to-site execution model backed by 30+ years of combined experience."],
        roleAtMoniak: ["At MoniAK, Engr. Rofiat SULAIMON leads the design division and coordinates the technical front-end of the company's Design & Build and construction-support assignments. Her responsibilities include design coordination, structural/architectural interface support, technical documentation, constructability input, design quality checks and coordination with specialist engineering consultants.", "Her leadership is directly relevant to MoniAK's Design & Build Contractor delivery on Yala Heights and Legacy Court, where design control and construction execution must operate as one integrated delivery system."],
        strengths: [
            { title: "Design Leadership", description: "Leads design thinking, drives quality-focused innovative and fit-for-purpose solutions." },
            { title: "Technical Coordination", description: "Coordinates multidisciplinary inputs and interfaces to ensure seamless design integration and delivery." },
            { title: "Constructability Review", description: "Provides practical design reviews to ensure ease of construction, cost-efficiency and buildability." },
            { title: "Innovation and Documentation Discipline", description: "Ensures accurate documentation, design-quality checks and application of innovative solutions." },
        ],
        values: sharedValues,
    },
    {
        name: "Toks AKINBADE",
        role: "Lead, Construction",
        summary: "A senior project-delivery and construction-management professional with UK and Nigerian delivery experience.",
        background: ["Toks AKINBADE is a senior project-delivery and construction-management professional with infrastructure construction experience in the UK and Nigeria. His experience covers construction management, HSE leadership, project planning, contract administration, site supervision, project assurance, stakeholder management and delivery controls.", "He leads Moni-AK’s construction delivery discipline and conglomerates Engr. Rofiat SULAIMON’s design leadership within a combined 30+ years of practical industry experience."],
        roleAtMoniak: ["At MoniAK, Toks AKINBADE leads the construction division, overseeing site delivery, programme coordination, construction methodology, HSEQ/QAQC implementation, contractor/supplier coordination and client-facing delivery performance.", "His leadership is particularly relevant to Design & Build delivery, where design decisions must be translated into controlled site execution, procurement discipline and safe construction practices.", "His role is directly linked to MoniAK's Design & Build Contractor delivery on Yala Heights and Legacy Court, as well as the company's wider construction management, procurement, logistics and personnel-management portfolio."],
        strengths: [
            { title: "Site Delivery", description: "Proven ability to deliver projects safely, efficiently and to the required quality standards." },
            { title: "HSE & Compliance", description: "Strong focus on health, safety and environmental compliance and risk management." },
            { title: "Cost and Schedule Control", description: "Expertise in cost management, resource optimisation and programme control." },
            { title: "Stakeholder and Contractor Management", description: "Effective stakeholder engagement, contractor coordination and vendor management." },
        ],
        values: sharedValues.map((value) =>
            value.title === "Delivery"
                ? {
                      ...value,
                      description:
                          "Delivering high-profile projects with a strong focus on successful project delivery.",
                  }
                : value,
        ),
    },
]

export const leadershipClosingStatement = "Our greatest strength is our people, committed to building a better tomorrow."
