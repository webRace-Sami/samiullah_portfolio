import { 
  ProfileData, 
  StatItem, 
  SkillCategory, 
  ProjectItem, 
  ExperienceItem, 
  EducationItem, 
  CertificationItem 
} from '../types';

export const initialProfile: ProfileData = {
  name: "SAMI ULLAH",
  degree: "BSCS",
  title: "Full-Stack Web Developer",
  tagline: "MERN Stack • TypeScript • Prisma ORM • Vite • SQL & MongoDB • Control Management & SCM",
  phone: "0342-8090699",
  phoneFormatted: "+92 342 8090699",
  email: "samiullahnawaz942@gmail.com",
  address: "Post Office Nokhar, Tehsil Noshehra Virkan District Gujranwala, Punjab, Pakistan",
  locationShort: "Gujranwala, Pakistan",
  portfolioUrl: "https://sami-portfolio-nine.vercel.app/",
  githubUrl: "https://github.com/ssn-rao",
  linkedinUrl: "https://www.linkedin.com/in/sami-ullah-webdev",
  whatsappUrl: "https://wa.me/923428090699?text=Hi%20Sami,%20I%20viewed%20your%20portfolio%20and%20would%20like%20to%20connect!",
  bio: "BSCS graduate and detail-oriented software engineer with strong technical foundations in full-stack web development and corporate control management. Experienced in managing complex systems like Microsoft Dynamics 365 (ERP), optimizing production pipelines, and analyzing business operations. Proficient in Supply Chain Management (SCM), Financial Ledgers, Marketing Strategies, and HRM compliance. Skilled in building modern, scalable applications with React, TypeScript, Node.js, Express, Prisma ORM, and SQL/MongoDB databases.",
  specialization: [
    "MERN Stack (MongoDB, Express, React, Node.js)",
    "TypeScript & Modern JavaScript Architecture",
    "Prisma ORM & Relational/NoSQL Databases (PostgreSQL, SQL, MongoDB)",
    "Vite & High-Performance Frontend Tooling",
    "AI-Driven Web Development & Automated Agentic Workflows",
    "Control Management (Supply Chain, Finance, Marketing, HRM)",
    "Microsoft Dynamics 365 ERP & Quality Assurance Auditing"
  ],
  aiFocus: "Professional in creating high-performance websites and web applications using cutting-edge AI tools, modern LLM APIs, and automated agent workflows for lightning-fast delivery and robust architecture.",
  managementExpertise: [
    {
      domain: "Supply Chain Management (SCM)",
      description: "Inward material auditing, PO/IGP/GDN verification, inventory aging analysis, and supplier discrepancy reconciliation."
    },
    {
      domain: "Financial Management & Accounting",
      description: "Commission tracking algorithms, deal transaction ledgers, cash flow balance visibility, and account bookkeeping."
    },
    {
      domain: "Marketing Management & E-Commerce",
      description: "Digital storefront architecture, catalog optimization, product positioning, and conversion-focused customer journeys."
    },
    {
      domain: "Human Resource Management (HRM)",
      description: "Production line workforce tracking, compliance safety logging, corrective action plans (CAPs), and ISO audit reporting."
    }
  ]
};

export const initialStats: StatItem[] = [
  {
    label: "Production Deployments",
    value: "6+",
    description: "Full-stack web apps, enterprise ERP & financial systems",
    icon: "Layers"
  },
  {
    label: "Enterprise Experience",
    value: "3",
    description: "Leading textile giants: Nishat Apparel, CBL & Style Textile",
    icon: "Building2"
  },
  {
    label: "Stack & DB Mastery",
    value: "100%",
    description: "MERN Stack, TypeScript, Prisma ORM, Vite, SQL & MongoDB",
    icon: "Code2"
  },
  {
    label: "Management & ISO",
    value: "SCM/ISO",
    suffix: " Certified",
    description: "Supply Chain, Finance, HRM & ISO 19011/9001/2859-1 Standards",
    icon: "ShieldCheck"
  }
];

export const initialSkills: SkillCategory[] = [
  {
    category: "frontend_backend",
    title: "Full-Stack Web Development",
    description: "Modern component architectures, type-safe backends, and responsive responsive client interfaces.",
    skills: [
      { name: "TypeScript", level: 95, badge: "Type Safety", featured: true },
      { name: "React.js & Vite", level: 95, badge: "UI Framework", featured: true },
      { name: "Node.js & Express", level: 92, badge: "Server Backend", featured: true },
      { name: "MERN Stack", level: 95, badge: "Full Stack", featured: true },
      { name: "Python & Django", level: 85, badge: "Backend / Scripting" },
      { name: "JavaScript (ES6+)", level: 95, badge: "Core Language" },
      { name: "HTML5 & Modern CSS3", level: 98, badge: "Semantic Web" },
      { name: "Tailwind CSS & Animations", level: 92, badge: "Styling & Motion" }
    ]
  },
  {
    category: "databases_orm",
    title: "Databases & ORM",
    description: "Robust data modeling, relation mapping, schema migrations, and high-performance querying.",
    skills: [
      { name: "Prisma ORM", level: 94, badge: "Type-safe ORM", featured: true },
      { name: "MongoDB & Mongoose", level: 94, badge: "NoSQL DB", featured: true },
      { name: "SQL & Relational DBs", level: 92, badge: "Relational Queries", featured: true },
      { name: "PostgreSQL / SQLite", level: 90, badge: "Structured Storage" },
      { name: "Database Schema Design", level: 92, badge: "Data Modeling" }
    ]
  },
  {
    category: "control_management",
    title: "Business & Control Management",
    description: "End-to-end operational governance across supply chain, accounting, marketing, and human resources.",
    skills: [
      { name: "Supply Chain Management (SCM)", level: 95, badge: "Logistics & Audit", featured: true },
      { name: "Financial Management & Ledgers", level: 92, badge: "Accounting Control", featured: true },
      { name: "Marketing Management", level: 90, badge: "Market Strategy", featured: true },
      { name: "Human Resource Management (HRM)", level: 88, badge: "Workforce & QA", featured: true },
      { name: "Operational Data Analysis", level: 96, badge: "Business Intel" }
    ]
  },
  {
    category: "ai_tooling",
    title: "AI Tools & Modern Acceleration",
    description: "Harnessing state-of-the-art AI tooling and agentic systems to accelerate product engineering.",
    skills: [
      { name: "AI-Assisted Web Dev", level: 96, badge: "AI Engineering", featured: true },
      { name: "Web App Generation with AI", level: 95, badge: "Next-Gen Workflows", featured: true },
      { name: "Prompt Engineering & LLM APIs", level: 92, badge: "AI Integration" },
      { name: "Rapid Prototyping & CI/CD", level: 92, badge: "DevOps / Velocity" },
      { name: "Vercel & Render Deployment", level: 95, badge: "Cloud Platforms" }
    ]
  },
  {
    category: "enterprise_erp",
    title: "Enterprise ERP & Operations",
    description: "Mission-critical ERP operations, supply chain tracking, and digital production management.",
    skills: [
      { name: "Microsoft Dynamics 365 (D365)", level: 95, badge: "Enterprise ERP", featured: true },
      { name: "IRN & QO Posting Workflows", level: 96, badge: "ERP Posting" },
      { name: "Supply Chain & PO Verification", level: 94, badge: "Logistics Audit" },
      { name: "Inventory Reconciliation", level: 95, badge: "Stock Control" },
      { name: "Production GT Tracking", level: 92, badge: "Shop-floor Systems" }
    ]
  },
  {
    category: "data_analysis",
    title: "Data Analysis & Productivity",
    description: "Advanced operational reporting, business intelligence dashboards, and audit formats.",
    skills: [
      { name: "MS Excel (Advanced)", level: 96, badge: "Reports & Formulas", featured: true },
      { name: "Power BI (Dashboards & ETL)", level: 88, badge: "Visualization" },
      { name: "MS Word (Audit Documentation)", level: 95, badge: "Formal Reports" },
      { name: "MS PowerPoint", level: 90, badge: "Executive Presentations" }
    ]
  },
  {
    category: "quality_compliance",
    title: "Quality & ISO Compliance",
    description: "International auditing standards, quality management protocols, and defect governance.",
    skills: [
      { name: "ISO 19011 (Auditing Management)", level: 95, badge: "Audit Framework", featured: true },
      { name: "ISO 9001 (Quality Management)", level: 95, badge: "QMS", featured: true },
      { name: "ISO 2859-1 (AQL Sampling)", level: 92, badge: "Acceptance Limits" },
      { name: "CAPs (Corrective Action Plans)", level: 95, badge: "Resolution Logs" }
    ]
  }
];

export const initialProjects: ProjectItem[] = [
  {
    id: "sm-store",
    title: "SM*Store E-Commerce & Admin Portal",
    subtitle: "Enterprise E-Commerce Platform with Full Admin Control",
    category: "Full-Stack",
    description: "A comprehensive digital commerce storefront and back-office administrative platform designed for Pakistani Rupee (PKR) retail, real-time product updates, sales metrics, and secure management authorization.",
    liveUrl: "https://e-commerce-store-pkr-admin.vercel.app/",
    githubUrl: "https://github.com/ssn-rao",
    technologies: ["React", "TypeScript", "Vite", "Prisma ORM", "Tailwind CSS", "Vercel", "REST APIs"],
    features: [
      "Protected Administrative Dashboard with real-time analytics",
      "Dynamic product catalog, PKR pricing, and inventory controls",
      "Order processing pipeline and sales transaction tracking",
      "Instant search, filter by category, and responsive mobile storefront"
    ],
    highlights: "Full-featured online retail ecosystem with secure role-based administrative control and lightning-fast Vite build.",
    badgeColor: "indigo",
    credentials: {
      adminId: "admin@smstore.pk",
      password: "Admin123!",
      note: "Use Admin credentials to access the administrative dashboard."
    }
  },
  {
    id: "showroom-management-system",
    title: "Showroom Management System",
    subtitle: "Vehicle & Inventory Showroom Operations Portal",
    category: "Enterprise",
    description: "An operational showroom management suite built for tracking vehicle inventory, customer deal bookings, sales records, installment schedules, and revenue ledgers.",
    liveUrl: "https://showroommanagementsystem.vercel.app/",
    githubUrl: "https://github.com/ssn-rao",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Vercel", "Prisma ORM"],
    features: [
      "Vehicle showroom inventory tracking with model and status filters",
      "Customer deal booking, sales ledger, and installment scheduling",
      "Authenticated staff portal with customized roles",
      "Real-time showroom revenue analytics and printable summaries"
    ],
    highlights: "Engineered to eliminate manual paperwork in automotive and showroom retail environments.",
    badgeColor: "cyan",
    credentials: {
      username: "samiullah",
      password: "admin123",
      note: "Sign in with username and password to test showroom operations."
    }
  },
  {
    id: "brokerage-management-system",
    title: "Brokerage Management System",
    subtitle: "Financial Transaction Ledger & Deal Tracking System",
    category: "Enterprise",
    description: "A specialized financial and operational brokerage management platform built to handle party accounts, commission tracking, deal records, and auditable ledger generation.",
    liveUrl: "https://brokeragemanagementsystem.vercel.app/",
    githubUrl: "https://github.com/ssn-rao",
    technologies: ["React", "TypeScript", "Vite", "Prisma ORM", "Tailwind CSS", "Chart.js"],
    features: [
      "Comprehensive client & party financial account management",
      "Automated commission calculations and multi-party deal ledgers",
      "Visual deal progress metrics, cash balances, and financial summaries",
      "Fast searchable records table with multi-column filtering"
    ],
    highlights: "Empowers brokers and financial firms with real-time transaction tracking, auditable logs, and streamlined bookkeeping.",
    badgeColor: "amber",
    credentials: {
      username: "admin",
      password: "MadinaAdmin@2026!",
      note: "Sign in with Admin credentials to review broker ledgers."
    }
  },
  {
    id: "inventory-management-system",
    title: "Inventory Management System (IMS)",
    subtitle: "Industrial Stock Control & Departmental Workflow Platform",
    category: "Enterprise",
    description: "A comprehensive digital inventory management web application engineered for real-time stock tracking, incoming shipment logs, and multi-department reconciliation.",
    liveUrl: "https://inventory-management-system-theta-sandy-25.vercel.app/",
    githubUrl: "https://github.com/ssn-rao",
    technologies: ["React", "TypeScript", "Node.js", "Express", "Prisma ORM", "Vercel", "Tailwind CSS"],
    features: [
      "1-Click Department Fast Sign In for seamless test exploration",
      "Real-time stock level monitoring and low-inventory automatic alerts",
      "Inward shipment verification matching PO/GDN/IGP records",
      "Interactive analytics dashboards and exportable stock reports"
    ],
    highlights: "Bridges industrial ERP expertise (D365) with modern web engineering to streamline inventory tracking across units.",
    badgeColor: "emerald",
    credentials: {
      note: "Click 'Open All Department Login IDs & 1-Click Fast Sign In' to instantly access any department."
    }
  },
  {
    id: "burger-point",
    title: "Ameer Muaviya Burger Point",
    subtitle: "Food Ordering & Restaurant Menu Web App",
    category: "Web Apps",
    description: "An appetizing, interactive digital restaurant storefront featuring live menu exploration, custom order building, and direct WhatsApp ordering integration.",
    liveUrl: "https://ameer-muaviya-burger-point.vercel.app/",
    githubUrl: "https://github.com/ssn-rao",
    technologies: ["React", "Vite", "JavaScript", "Tailwind CSS", "Vercel", "Mobile-Optimized"],
    features: [
      "Interactive visual menu with category groupings and deals",
      "Instant item customization, deal selectors, and real-time total",
      "Direct WhatsApp click-to-order integration for frictionless checkout",
      "Fluid micro-animations and ultra-responsive mobile design"
    ],
    highlights: "Custom digital food ordering interface maximizing customer retention and rapid order turnaround.",
    badgeColor: "emerald"
  },
  {
    id: "supersimple-portfolio",
    title: "SuperSimple 2.0 Portfolio",
    subtitle: "Personal Web Showcase & Dynamic Portfolio",
    category: "Web Apps",
    description: "A sleek, responsive portfolio web application designed for high clarity, clean layout presentation, and fast performance.",
    liveUrl: "https://ssn-rao.github.io/SuperSimple-2.0/",
    githubUrl: "https://github.com/ssn-rao/SuperSimple-2.0",
    technologies: ["JavaScript", "HTML5", "CSS3", "GitHub Pages", "Responsive Design"],
    features: [
      "Lightweight high-speed client architecture",
      "Clean portfolio navigation and dynamic project cards",
      "Mobile-first responsive styling and accessibility"
    ],
    highlights: "Custom built web showcase demonstrating clean frontend architecture and responsive layout mastery.",
    badgeColor: "cyan"
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe Interactive Game",
    subtitle: "Logic-Based Web Game with Dynamic Rules",
    category: "Interactive",
    description: "An animated, responsive game application featuring dynamic board rendering, winning line detection algorithms, and score tracking.",
    liveUrl: "https://ssn-rao.github.io/tic_tac_toe/",
    githubUrl: "https://github.com/ssn-rao/tic_tac_toe",
    technologies: ["JavaScript", "HTML5 Canvas/DOM", "CSS Animations", "GitHub Pages"],
    features: [
      "Instant win condition and draw state detection algorithms",
      "Interactive score persistence and turn indicators",
      "Particle celebration effects upon game victory",
      "Cross-device touch-optimized controls"
    ],
    highlights: "Demonstrates core algorithmic problem solving, clean state transitions, and interactive DOM manipulation.",
    badgeColor: "cyan"
  }
];

export const initialExperiences: ExperienceItem[] = [
  {
    id: "nishat-apparel",
    company: "Nishat Apparel Lahore",
    location: "Lahore, Pakistan",
    role: "Computer Operator / Systems & Audit Data Specialist",
    tenure: "2026",
    type: "Full-Time",
    companyOverview: "Flagship company of the renowned Nishat Group and Pakistan's largest vertically integrated textile manufacturer, operating advanced end-to-end production facilities from spinning to high-capacity power generation.",
    duties: [
      {
        title: "Compliance Data Management",
        description: "Accurately enter and update comprehensive audit findings, Corrective Action Plans (CAPs), workplace safety logs, and ISO documentation within internal database systems."
      },
      {
        title: "Audit Report Generation",
        description: "Prepare and format detailed internal audit reports tailored to customer requirements using MS Word, ensuring strict adherence to compliance standards, data accuracy, and presentation rules."
      },
      {
        title: "Reporting & Escalation",
        description: "Directly submit finalized audit reports to the General Manager via email for high-level executive review, risk assessment, and formal sign-off."
      },
      {
        title: "Document Control & External Audits",
        description: "Maintain organized physical and digital filing systems ensuring sub-minute document retrieval during rigorous third-party client audits."
      }
    ],
    technologies: ["Internal ERP Systems", "MS Word Audit Reporting", "MS Excel Data Logs", "CAPs Tracking", "ISO Standards"],
    learnings: [
      "Mastered executive-level audit presentation and escalation channels",
      "Deep operational understanding of large-scale manufacturing compliance",
      "High-precision document control in multinational audit environments"
    ],
    badge: "Textile Giant • Nishat Group"
  },
  {
    id: "cbl-receipt",
    company: "CBL – Crescent Bahuman Limited (Receipt Section)",
    location: "Pindi Bhattian, Pakistan",
    role: "External Auditor / ERP Material Specialist",
    tenure: "2023 – 2024",
    type: "Full-Time",
    companyOverview: "Crescent Bahuman Limited (CBL) is a highly reputable global textile leader recognized as Pakistan's first vertically integrated denim manufacturing facility, producing for top global fashion houses.",
    duties: [
      {
        title: "Inward Material Audit & Verification",
        description: "Inspect incoming shipments against approved Purchase Orders (PO) and Inward Gate Passes (IGP), verifying physical quantities dispatched by vendors against Goods Dispatch Notes (GDN)."
      },
      {
        title: "Quality & ERP Posting (Microsoft Dynamics 365)",
        description: "Generate and post Inspection Receipt Numbers (IRN) and Quality Orders (QO) in Microsoft D365, enabling downstream units (Yarn, Fabric Main, Sewing, and GWP stores) to receive verified stock."
      },
      {
        title: "Supply Chain Escalation & Reconciliation",
        description: "Identify and log material discrepancies—including excess, shortages, unapproved POs, or missing IGPs—and communicate issues to the Supply Chain team via email for prompt resolution."
      },
      {
        title: "Stock Issuance & Inventory Analysis",
        description: "Maintain records for daily departmental material issuance, clear manual issues for production urgencies upon approval, and generate advanced Excel reports for non-moving and slow-lifting stock."
      }
    ],
    technologies: ["Microsoft Dynamics 365 (D365)", "IRN / QO Workflows", "MS Excel Advanced", "Supply Chain Auditing", "Inventory Reconciliations"],
    learnings: [
      "In-depth mastery of Microsoft Dynamics 365 ERP material lifecycle",
      "Statistical discrepancy analysis and vendor reconciliation",
      "Zero-error data discipline in fast-paced raw material environments"
    ],
    badge: "Pioneer Denim Giant"
  },
  {
    id: "style-textile",
    company: "Style Textile Lahore",
    location: "Lahore, Pakistan",
    role: "Quality Checker / Production Data Specialist",
    tenure: "2022 – 2023",
    type: "Full-Time",
    companyOverview: "Style Textile is Pakistan's foremost textile and apparel manufacturer, innovating and providing end-to-end apparel solutions to premier global brands such as Adidas, Nike, Levi’s, Hurley, Reebok, and Tom Tailor.",
    duties: [
      {
        title: "Input & Output Production Tracking",
        description: "Scan GT numbers (Gate Numbers) via tablet to accurately track and log real-time quantities of garments entering the production line (input) versus finished pieces (output)."
      },
      {
        title: "Defect Escalation & Reporting",
        description: "Identify damaged or defective garments received during line transfers, capture visual proof, and email detailed defect reports with attached image evidence to management for immediate resolution."
      },
      {
        title: "Production Line Reconciliation",
        description: "Maintain accurate digital logs of daily line progress to ensure input and output production figures match target metrics with zero unaccounted variance."
      },
      {
        title: "Data Integrity & Verification",
        description: "Verify garment counts before scanning GT records to prevent inventory discrepancies and ensure smooth material flow across production units."
      }
    ],
    technologies: ["Digital Tablet GT Scanner", "Defect Tracking Logs", "Email Reporting Systems", "AQL Quality Checks", "Excel Progress Tracking"],
    learnings: [
      "Application of ISO 2859-1 (AQL) in high-throughput production lines",
      "Real-time defect tracking and root cause communication",
      "Stringent quality standards matching Adidas & Nike audit criteria"
    ],
    badge: "Global Partner: Nike • Adidas • Levi's"
  }
];

export const initialEducation: EducationItem[] = [
  {
    degree: "BS In Computer Sciences (BSCS)",
    institution: "Virtual University Of Pakistan",
    year: "2022 – 2026",
    boardOrUni: "Virtual University of Pakistan",
    description: "Successfully completed degree program covering Software Engineering, Data Structures & Algorithms, Object-Oriented Programming, Relational & NoSQL Database Architecture, Web Engineering, and System Control.",
    status: "Completed"
  },
  {
    degree: "Faculty of Sciences (FSc) In Pre-Engineering",
    institution: "Government Post Graduate College (GPGC)",
    year: "2018 – 2020",
    boardOrUni: "BISE Gujranwala Board",
    description: "Intensive training in Advanced Mathematics, Physics, and analytical logic solving.",
    status: "Completed"
  },
  {
    degree: "Matric In Computer Sciences",
    institution: "Government Higher Secondary School (GHSS)",
    year: "2016 – 2018",
    boardOrUni: "BISE Gujranwala Board",
    description: "Foundational studies in Computer Science, Algorithm basics, Mathematics, and General Sciences.",
    status: "Completed"
  }
];

export const initialCertifications: CertificationItem[] = [
  {
    code: "ISO 19011",
    title: "Guidelines for Auditing Management Systems",
    description: "Comprehensive principles of auditing, managing multi-tier audit programs, executing internal audits, and verifying auditor competence.",
    scope: "Auditing Governance & CAPs"
  },
  {
    code: "ISO 9001",
    title: "Quality Management Systems (QMS)",
    description: "International standard for building robust quality management processes, reducing operational defects, and maintaining rigorous compliance.",
    scope: "Quality Assurance & Production Control"
  },
  {
    code: "ISO 2859-1",
    title: "Acceptance Quality Limits (AQL)",
    description: "Statistical sampling procedures for inspection by attributes, lot acceptance verification, and export-grade defect classification.",
    scope: "Statistical Quality Inspection"
  }
];
