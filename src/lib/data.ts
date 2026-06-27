export const CMS_DATA = {
  research: {
    articles: [
      { id: 1, title: 'The Future of Rural Education in Bihar', author: 'Dr. A. Kumar', date: 'Oct 15, 2026', excerpt: 'An in-depth look at how digital literacy is reshaping classrooms in Tier-3 cities.', tags: ['Education', 'Digital'] },
      { id: 2, title: 'Agricultural Modernization', author: 'S. Singh', date: 'Sep 28, 2026', excerpt: 'Evaluating the impact of micro-irrigation policies on local farmers.', tags: ['Agriculture', 'Policy'] },
    ],
    policyBriefs: [
      { id: 1, title: 'Policy Brief: Healthcare Accessibility', author: 'Health Panel', date: 'Nov 01, 2026', excerpt: 'Summary of the recent healthcare reform impact on rural Bihar.', tags: ['Health'] },
      { id: 2, title: 'Review: Economic Zones', author: 'Econ Team', date: 'Oct 05, 2026', excerpt: 'A review of the newly proposed special economic zones.', tags: ['Economy'] },
    ],
    reports: [
      { id: 1, title: 'Annual Impact Report 2025-2026', author: 'BRAIN Foundation', date: 'Jan 10, 2026', excerpt: 'Comprehensive analysis of our grassroots initiatives over the past year.', tags: ['Annual Report'] },
    ],
    newsletters: [
      { id: 1, title: 'BRAIN Monthly - October', date: 'Oct 31, 2026', excerpt: 'Updates on our recent capacity building sessions and new partnerships.', tags: ['Newsletter'] },
    ]
  },
  grassroots: {
    capacityBuilding: [
      { id: 1, title: 'Women Leadership Workshop', location: 'Patna', date: 'Oct 20, 2026', description: 'Empowering local women leaders with governance tools.' },
      { id: 2, title: 'Digital Literacy for Youth', location: 'Gaya', date: 'Nov 12, 2026', description: 'Training session on basic IT skills for rural youth.' },
    ],
    diasporaConnect: [
      { id: 1, title: 'Global Bihari Summit 2026', location: 'Virtual', date: 'Dec 05, 2026', description: 'Connecting the diaspora to fund local initiatives.' },
    ],
    janShiksha: [
      { id: 1, title: 'Night School Initiative', location: 'Darbhanga', date: 'Ongoing', description: 'Providing education to working adults after hours.' },
    ]
  },
  about: {
    whoWeAre: `Bihar Rejuvenation and Innovation Network Foundation (BRAIN Foundation) is a not-for-profit Section 8 organisation dedicated to advancing research, innovation, public policy, education and community development across India.
Founded with the vision of building a knowledge-driven and inclusive society, it works at the intersection of governance, public welfare, technology, entrepreneurship and sustainable development. The Foundation serves as a platform that connects researchers, policymakers, institutions, communities and young leaders to generate practical solutions for contemporary challenges.
It undertakes policy research, educational initiatives, social development programmes and community engagement activities that promote evidence-based decision-making and inclusive growth.
Our work spans across multiple sectors, including governance, education, healthcare, digital literacy, environment, entrepreneurship, agriculture, cultural preservation and sustainable development.`,
    vision: `To build an innovative, equitable and knowledge-driven Bihar by promoting community-led development, research, public policy and grass root innovation.`,
    mission: [
      "Promote research, innovation and evidence-based policymaking.",
      "Strengthen governance and citizen participation.",
      "Support education, skill development and leadership initiatives.",
      "Advance sustainable and inclusive development.",
      "Foster partnerships between academia, government, civil society and communities.",
      "Create platforms for dialogue, collaboration and social impact."
    ],
    coreCircle: [
      { name: "Madhusudan Kumar", role: "Operations & Programme Steward" },
      { name: "Anand Raj", role: "Research & Knowledge Steward" },
      { name: "Bhanupriya Anand", role: "Legal & Compliance Steward" },
      { name: "Harsh Kumar", role: "Digital Outreach & Media Steward" }
    ] as { name: string; role: string }[],
    corporateInfo: {
      registeredOffice: "Bihar Rejuvenation and Innovation Network (BRAIN) Foundation\n39, Bardokhar, Halsi, Konag\nLakhisarai – 811311\nBihar, India",
      email: "brainfoundationbihar@gmail.com",
      legalName: "Bihar Rejuvenation and Innovation Network Foundation",
      type: "Section 8 Company (Not-for-Profit)",
      incorporationDate: "17 June 2026",
      cin: "U88900BR2026NPL085681",
      pan: "AAOCB8428Q",
      scopeOfOperations: "Pan India."
    }
  },
  strategy: {
    theProblem: {
      untappedPotential: "Remarkable demographic potential, profound cultural depth, and significant economic possibilities that remain underutilised.",
      thePolicyVoid: "Bihar remains underrepresented in rigorous policy research. Interventions are fragmented, short-term, or event-centric. Critical need for a credible, knowledge-driven institution."
    },
    theApproach: {
      traditional: "Fragmented, top-down policy dictation, highly donor-dependent.",
      brainApproach: "Integrated ecosystem, evidence-based focus, bridging systemic policy to last-mile practice, self-sustaining through mission-aligned enterprise."
    },
    pillars: [
      {
        id: 1,
        name: "Research, Policy & Advocacy (The Roots)",
        items: [
          { title: "Know Bihar", description: "Comprehensive, data-driven profiles covering history, economy, culture, and district-level analysis." },
          { title: "Bihar Policy Briefs", description: "Short, actionable policy notes designed for policymakers seeking evidence-based guidance." },
          { title: "Research & Reports", description: "In-depth studies and white papers offering rigorous analysis of specific development issues." },
          { title: "Articles & Blogs", description: "Opinion pieces and explainers providing accessible insights into challenges and opportunities." }
        ]
      },
      {
        id: 2,
        name: "Rural & Social Transformation (Bridging the Last Mile)",
        items: [
          { title: "Digital Literacy & Access", description: "Rural centres to train youth/women in basic digital skills, e-governance, and cyber safety." },
          { title: "Legal Literacy & Rights Awareness", description: "Awareness camps and basic legal aid clinics on land, labour, and women's rights in vernacular formats." },
          { title: "Health Literacy & Preventive Care", description: "Behavioural change campaigns and periodic mobile health clinics with referral linkages." },
          { title: "Educational Support", description: "Community learning centres to bridge foundational literacy gaps." },
          { title: "Community Capacity Building", description: "Training local leaders and SHGs in governance." },
          { title: "Livelihood & Skill Development", description: "Micro-enterprises, rural entrepreneurs, and access to credit/digital platforms." }
        ]
      },
      {
        id: 3,
        name: "Bihar Mart (The Sustainability Engine)",
        items: [
          { title: "Purpose", description: "Mission-aligned enterprise promoting Bihar's traditional products and GI-tagged goods." },
          { title: "Market Access", description: "Provides commercial visibility to rural artisans and producers." },
          { title: "100% Reinvestment", description: "All proceeds are reinvested solely into the Foundation's research and advocacy." }
        ]
      },
      {
        id: 4,
        name: "Know Bihar Heritage Tours (The Network Catalyst)",
        items: [
          { title: "Target Audience", description: "Students, researchers, professionals, and academic institutions." },
          { title: "Outcomes", description: "Moving beyond commercial tourism to connect academic knowledge with real-world context; transforming visitors into long-term network partners and diaspora advocates." }
        ]
      }
    ],
    partnerships: {
      targeting: "Mentors, academic institutions, CSR partners, policy bodies.",
      coreValues: [
        "Academic integrity",
        "Transparency",
        "Inclusivity",
        "Evidence-based decision-making",
        "Long-term sustainable impact"
      ]
    }
  }
};
