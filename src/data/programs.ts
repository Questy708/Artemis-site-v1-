import { Users, Globe, Zap, Target, Search, LucideIcon } from "lucide-react";

export interface ProgramDetail {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  longDesc?: string;
  details: { label: string; value: string }[];
  icon: LucideIcon;
  color: string;
  link: string;
  image: string;
  stats?: { label: string; value: string }[];
  process?: { title: string; desc: string; extended?: string }[];
  features?: { title: string; desc: string; icon?: string }[];
  companies?: { name: string; desc: string; focus: string; field: string; funding: string; teamSize: string; categories: string; location: string }[];
  isForYouIf?: string[];
  faqs?: { q: string; a: string }[];
  trackRecord?: { label: string; value: string }[];
  testimonial?: { quote: string; author: string; role: string; image: string };
  ideas?: { partner: string; title: string; desc: string; image?: string; partnerImage?: string }[];
}

export const programsData: ProgramDetail[] = [
  {
    id: "xhansa-fellowship",
    title: "xHansa Fellowship",
    tagline: "The Pioneering Enterprises Engine.",
    desc: "Our flagship 24-month human capital deployment engine. We intake 1,000 Xcitizens per cohort, embedding them into ten-person 'Pods' (Stacks) to build ProtoCos across nine civilizational fields.",
    longDesc: "The xHansa Program is the human capital engine of the Hanseatic League. It is fundamentally a military-grade knowledge-deployment pipeline, not an educational initiative or accelerator. The program intakes 1,000 Xcitizens per cohort and deploys them as 100 ten-person Stacks against 100 commissioned ProtoCos operating across the Nine Civilizational Fields. The program is designed to transform raw human potential from across 171 African and 19 Global South countries into a disciplined, cross-functional deployment force capable of executing against civilizational bottlenecks under extreme resource constraint. We do not look for resumes; we look for the cognitive capacity to build under fire.",
    details: [
      { label: "Duration", value: "24 Months" },
      { label: "Deployment", value: "100 Pods" },
      { label: "Focus", value: "9 Civ Fields" },
      { label: "Cadence", value: "Quarterly Gates" }
    ],
    stats: [
      { label: "Xcitizens Per Cohort", value: "1,000" },
      { label: "Stipend", value: "$500-$1,200/mo" },
      { label: "Equity Cliff", value: "23 Months" },
      { label: "Capital Target", value: "5x Multiplication" }
    ],
    process: [
      { 
        title: "The 8-Week Crucible", 
        desc: "Neural reprogramming involving 'The Shock' and 'The Wall' to certify OS installation under cognitive exhaustion.",
        extended: "During the Crucible, candidates undergo Civilizational Field Typing Assessment, where they are sorted into the six Xcitizen Archetypes. It is based on observed behavior under stress, not self-reported aspiration."
      },
      { 
        title: "Q1: 0-to-1 Pilot", 
        desc: "Build the Minimal Version; secure Anchor Partner LOI; deploy physical/digital asset.",
        extended: "In the first 6 months, the focus is on achieving a working version and securing legitimacy through anchor partnerships (AfDB, Ministry, Corporate)."
      },
      { 
        title: "Q2: First Revenue", 
        desc: "Hit exact mathematical metrics; debug all technical and operational failures.",
        extended: "Months 7-12 are dedicated to proving unit economics at baseline and ensuring the venture can generate revenue."
      },
      { 
        title: "Q3: Expansion", 
        desc: "Replicate pilot in 3-5 new geographies; author the permanent Playbook.",
        extended: "Months 13-18 focus on scaling nodes to 3-5 locations and codifying knowledge for the broader network."
      },
      { 
        title: "Q4: Institutionalization", 
        desc: "Replace the temporary Xcitizen stack with local permanent operators.",
        extended: "The final phase ensures the venture is operationally efficient (>80%) and ready for spin-out to local management."
      }
    ],
    features: [
      { title: "The Supremacy Clause", desc: "Mandates absolute supersession of individual interests by the League. Breakthroughs are shared.", icon: "Shield" },
      { title: "The Kill Switch", desc: "Immediate termination for failure to meet quarterly Gate thresholds. Zero margin for error.", icon: "Zap" },
      { title: "Six Archetypes", desc: "Pods are matched using Pilot, Builder, Hustler, Operator, Tracker, and Comms archetypes.", icon: "Users" },
      { title: "Neural Link Protocol", desc: "Real-time biometric and cognitive monitoring to ensure optimal pod performance.", icon: "Activity" }
    ],
    isForYouIf: [
      "You are an informal economy operator, grassroots worker, or self-taught engineer.",
      "You thrive under extreme resource constraint and cognitive exhaustion.",
      "You are willing to surrender individual IP for the League Commons.",
      "You want to build backbone infrastructure for the Global South."
    ],
    faqs: [
      { q: "What is an Xcitizen?", a: "Xcitizens are neither employees nor students; they are deployed operators who receive a flat, needs-based stipend." },
      { q: "What happens after 24 months?", a: "The top 3% (Keepers) transition to permanent payrolls. the remaining 97% (The Cycled) are severed with performance equity." },
      { q: "How are pods formed?", a: "Pods are formed via a deterministic algorithm that weighs Deployment Classification and Archetype compatibility." }
    ],
    trackRecord: [
      { label: "Active Xcitizens", value: "1,000" },
      { label: "Strike Zones", value: "190" },
      { label: "Civ Fields", value: "09" },
      { label: "Success Rate", value: "75%" }
    ],
    ideas: [
      { partner: "Director Hansa", title: "WaterX", desc: "Decentralized atmospheric water generation for arid zones using modular thermal units.", partnerImage: "https://i.pravatar.cc/100?img=10" },
      { partner: "Strategic Lead", title: "PowerGrid", desc: "Peer-to-peer energy sharing for micro-grids in sub-Saharan Africa.", partnerImage: "https://i.pravatar.cc/100?img=11" },
      { partner: "Command Tech", title: "MediLink", desc: "Cold-chain infrastructure for last-mile pharmaceutical delivery via autonomous ground vehicles.", partnerImage: "https://i.pravatar.cc/100?img=12" }
    ],
    testimonial: {
      quote: "The Hansa model is fundamentally a military-grade knowledge-deployment pipeline. It’s the only way to build infrastructure at the scale required for 171 African nations.",
      author: "XHansa Director",
      role: "Strategic Command",
      image: "https://i.pravatar.cc/100?img=1"
    },
    companies: [
      { name: "Nebula", desc: "the decentralized protocol for planetary-scale logistics.", focus: "Logistics Protocol", field: "Mobility", funding: "$2M Pre-Seed", teamSize: "10-25", categories: "Logistics / Protocol", location: "Lagos" },
      { name: "TerraHash", desc: "the blockchain layer for managing sovereign land registries.", focus: "Land Registry", field: "Built Env", funding: "$3M Seed", teamSize: "15-30", categories: "Blockchain / GovTech", location: "Accra" }
    ],
    icon: Globe,
    color: "bg-[#111111]",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    link: "/programs/the-routes"
  },
  {
    id: "xcelero-accelerator",
    title: "xCelero Accelerator",
    tagline: "High-velocity launchpad.",
    desc: "A 4-month immersive experience for exceptional founders. We provide an elite mentorship syndicate and a funding package that breaks conventional boundaries.",
    longDesc: "xCelero Labs is a high-velocity launchpad for exceptional founders looking to redefine the future of innovation. Our program offers a unique blend of immersive experiences, top-tier mentorship from the Hanseatic Syndicate, and unparalleled funding opportunities that far exceed standard YC-style packages. Unlike traditional one-size-fits-all accelerators, we provide individualized support, steering clear of the short-termism that plagues conventional startup playbooks. We aim to equip you with the skills and support necessary to soar when you face investors in just four months, backed by the industrial might of our wider network.",
    details: [
      { label: "Funding", value: "$620k Package" },
      { label: "Equity", value: "3% Fixed" },
      { label: "Batch Size", value: "20 Companies" },
      { label: "Residency", value: "19 Cities" }
    ],
    stats: [
      { label: "Initial Capital", value: "$120,000" },
      { label: "Uncapped SAFE", value: "$500,000" },
      { label: "Funding Rate", value: "75% Success" },
      { label: "Mentor Ratio", value: "3:1" }
    ],
    process: [
      { 
        title: "Deep Dive Audit", 
        desc: "Initial 2-week technical and market analysis to identify leverage points.",
        extended: "We analyze every aspect of your venture to identify the high-multiplication leverage points in your market."
      },
      { 
        title: "Office Hours", 
        desc: "Weekly one-on-one sessions with partners, akin to a doctoral journey.",
        extended: "We address product development, marketing, sales, and management dilemmas, serving as your co-founder."
      },
      { 
        title: "Group Office Hours", 
        desc: "Collaborative platforms to exchange ideas with peers from similar fields.",
        extended: "Find a community of confident founders who share your journey and engage in discussions with peers from similar industries."
      },
      { 
        title: "The Pitch Matrix", 
        desc: "Intensive training in narrative construction for institutional capital.",
        extended: "Equip yourself with the skills and support necessary to soar when you face a myriad of investors in four months."
      },
      { 
        title: "Demo Day", 
        desc: "Presentations to thousands of VC firms, angel investors, and directors.",
        extended: "A launchpad for the future where you showcase your vision, innovation, and the transformative work you've accomplished."
      }
    ],
    features: [
      { title: "Hyper-Localized Immersion", desc: "Takes startups through diverse ecosystems in multiple global cities for market insights.", icon: "Globe" },
      { title: "Elite Mentorship Syndicate", desc: "A curated group of serial entrepreneurs and tech titans committed to your success.", icon: "Users" },
      { title: "Elite Funding Package", desc: "$120,000 for 3% equity plus a $500,000 uncapped SAFE.", icon: "Zap" },
      { title: "Alumni Economic Carry", desc: "Economic participation in our fund's carry for every graduate.", icon: "Activity" }
    ],
    isForYouIf: [
      "You are an exceptional founder looking to redefine the future of innovation.",
      "You want to think bigger, execute faster, and 10x your odds.",
      "You value individualized support over one-size-fits-all playbooks.",
      "You are ready for a transformative 4-month journey."
    ],
    faqs: [
      { q: "What is the investment deal?", a: "We offer $120,000 for 3% equity at a $5M valuation cap, plus a $500,000 uncapped SAFE." },
      { q: "What is the success rate?", a: "We have a 75% success rate in securing follow-on funding within 6 months post-program." },
      { q: "Where does the program take place?", a: "Immersion takes startups through multiple global innovation ecosystems across several cities." }
    ],
    trackRecord: [
      { label: "Batch Size", value: "20" },
      { label: "Funding Package", value: "$620k" },
      { label: "Success Rate", value: "75%" },
      { label: "Total Mult", value: "10x" }
    ],
    ideas: [
      { partner: "Venture Partner", title: "FinFlow", desc: "Cross-border settlement layer for SMEs using liquidity pools and AI risk modeling.", partnerImage: "https://i.pravatar.cc/100?img=13" },
      { partner: "Investment Director", title: "HealthSync", desc: "Remote diagnostics platform connecting rural clinics to specialist hubs via satellite link.", partnerImage: "https://i.pravatar.cc/100?img=14" }
    ],
    testimonial: {
      quote: "xCelero isn't just an accelerator; it's a partnership. They provided the capital and mentorship we needed to go from a prototype to a category leader in record time.",
      author: "Alumni Founder",
      role: "Class of '25",
      image: "https://i.pravatar.cc/100?img=2"
    },
    companies: [
      { name: "EkoHeat", desc: "the next-gen geothermal system for sustainable urban heating.", focus: "Geothermal", field: "Energy", funding: "$5M Series A", teamSize: "30-60", categories: "Energy / Infra", location: "Cairo" },
      { name: "AgriDrone", desc: "the automated drone solution for precision nutrient application.", focus: "AgriTech", field: "Food & Ag", funding: "$2M Seed", teamSize: "20-45", categories: "AgTech / Drones", location: "Nairobi" }
    ],
    icon: Zap,
    color: "bg-[#FFD700]",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80",
    link: "/programs/xcelero-accelerator"
  },
  {
    id: "inception-studios",
    title: "The Inception Studios",
    tagline: "Co-creation with the world's giants.",
    desc: "At the intersection of entrepreneurship and governance. We partner with Fortune 500s, governments, and foundations to identify systemic bottlenecks.",
    longDesc: "Our Studio model, inspired by Thomas Edison's Menlo Park, encompasses labs where seasoned scientists and operational executives collaborate to fuel the creation of companies from scratch. We operate a diverse innovation studio portfolio, forging partnerships with leading corporations and government agencies. By acting as a bridge between entrepreneurial talent and pressing global challenges, we embark on a transformative journey to tackle complex issues affecting cities and industries. We find the problems first, then we recruit the team to solve them.",
    details: [
      { label: "Model", value: "Venture Studio" },
      { label: "Partners", value: "Fortune 500 / GOV" },
      { label: "Outcome", value: "Market-Defining NewCos" },
      { label: "IP Ownership", value: "Studio Model" }
    ],
    process: [
      { 
        title: "Ideation & Inception", 
        desc: "Extensive market research to identify key challenges and disruptive potential.",
        extended: "A team of scientists and industry experts brainstorm 'what if' hypotheses to develop initial business concepts."
      },
      { 
        title: "Prototype Companies", 
        desc: "ProtoCos undergo numerous iterations based on feedback and learning.",
        extended: "Embryonic versions of potential businesses with rudimentary business models and clear objectives."
      },
      { 
        title: "NewCo Stage", 
        desc: "Entity receives substantial capital and begins building teams and leadership.",
        extended: "Substantial capital from xCelero Labs enables the development of platforms and the selection of board and CEO."
      },
      { 
        title: "Spinout & Scale-Up", 
        desc: "Formal establishment and seeking external investment for growth.",
        extended: "NewCo is spun out as an independent entity, forming strategic partnerships and scaling operations."
      }
    ],
    features: [
      { title: "High-Velocity Creation", desc: "A journey designed to accelerate startups with unparalleled speed.", icon: "Zap" },
      { title: "Technology Blueprinting", desc: "Research backed by interdisciplinary teams to create solid foundations.", icon: "Workflow" },
      { title: "Fortune 500 Network", desc: "Direct access to industry giants and government agencies for co-creation.", icon: "Users" },
      { title: "IP Powerhouse", desc: "Leverage shared resources and expertise that would otherwise be inaccessible.", icon: "Shield" }
    ],
    isForYouIf: [
      "You are a seasoned scientist or operational executive looking to fuel growth.",
      "You want to tackle complex issues affecting cities and industries.",
      "You believe in the power of shared resources and expertise.",
      "You want to build a market-defining company from Day 0."
    ],
    faqs: [
      { q: "What is a ProtoCo?", a: "ProtoCos are embryonic versions of potential businesses with clear objectives and resources for development." },
      { q: "How are partners involved?", a: "We work with industry leaders, governments, and entrepreneurs to address complex challenges." },
      { q: "What is the end goal?", a: "To establish a lightning-speed company creation machine that thrives on speed and agility." }
    ],
    trackRecord: [
      { label: "Companies Globally", value: "100+" },
      { label: "Success Rate", value: "75%" },
      { label: "Total Investment", value: "$1Bn" },
      { label: "Jobs Created", value: "20k" }
    ],
    ideas: [
      { partner: "Studio Lead", title: "CivicID v2", desc: "Next-gen zero-knowledge identity protocol for sovereign governance.", partnerImage: "https://i.pravatar.cc/100?img=15" },
      { partner: "Gov Partner", title: "TaxStack", desc: "Automated VAT collection and reconciliation for digital-first emerging economies.", partnerImage: "https://i.pravatar.cc/100?img=16" }
    ],
    testimonial: {
      quote: "The Studio model effectively mitigates early-stage risks. It's about becoming a high-velocity company creation machine.",
      author: "Hansa Scientist",
      role: "Lead Researcher",
      image: "https://i.pravatar.cc/100?img=3"
    },
    companies: [
      { name: "CivicID", desc: "the biometric framework for secure digital identity in emerging markets.", focus: "Identity", field: "Data & Int", funding: "$3M Seed", teamSize: "15-40", categories: "GovTech / Identity", location: "Cape Town" }
    ],
    icon: Target,
    color: "bg-[#00C3C3]",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    link: "/programs/inception-studios"
  },
  {
    id: "quest-fellowship",
    title: "Quest Fellowship",
    tagline: "Frontier Science Bridge (feat. Queen's University).",
    desc: "A specialized partnership bridge between elite academic research and the xCelero engine. We help translate lab-stage breakthroughs into civilizational prototypes.",
    longDesc: "Quest Fellowship is our dedicated pathway for academic excellence, run in partnership with Queen's University and other Ivy-tier global institutions. We identify researchers and engineers whose work has civilizational implications, providing the crucible for technical translation. Fellows gain access to the full XHansa physical network and protocols, allowing them to turn scientific papers into physical prototypes and eventually, scalable venture hypotheses. We provide the operational armor needed to survive the 'Valley of Death' between lab discovery and industrial deployment.",
    details: [
      { label: "Partner", value: "Queen's University" },
      { label: "Domain", value: "Deep Research" },
      { label: "Access", value: "Lab-to-Launch" },
      { label: "Tenure", value: "12-18 Months" }
    ],
    stats: [
      { label: "Active Fellows", value: "120+" },
      { label: "Lab Patents", value: "45 Translating" },
      { label: "University Partners", value: "Elite Tier" },
      { label: "Grant Pool", value: "$4.5M Allocated" }
    ],
    process: [
      { 
        title: "Discovery Harvest", 
        desc: "Reviewing research to identify 'Heavy' breakthroughs with mission alignment.",
        extended: "We identify researchers whose work has civilizational implications."
      },
      { 
        title: "Technical Drafting", 
        desc: "Marrying operators with researchers to draft commercialization blueprints.",
        extended: "We provide the infrastructure needed to translate science into physical prototypes."
      },
      { 
        title: "Sandbox Deployment", 
        desc: "Relocating researchers to specific XEmbassies for rapid prototyping.",
        extended: "Access to heavy hardware labs helps survive the 'Valley of Death'."
      },
      { 
        title: "ProtoCo Genesis", 
        desc: "Formal creation of a venture entity around the breakthrough.",
        extended: "The researcher often serves as Chief Scientist in the new entity."
      }
    ],
    features: [
      { title: "Frontier Science Bridge", desc: "Translation layer for breakthroughs requiring heavy deployment infrastructure.", icon: "Globe" },
      { title: "Institutional Synergy", desc: "Academic rigor paired with the high-velocity execution of the Hansa engine.", icon: "Workflow" },
      { title: "IP Protection Armor", desc: "Expert legal protection to ensure breakthroughs benefit the inventors and the League.", icon: "Shield" },
      { title: "Director Access", desc: "Direct line to League Directors to resolve technical bottlenecks.", icon: "Target" }
    ],
    isForYouIf: [
      "You are a researcher or engineer whose work has civilizational implications.",
      "You want to turn scientific papers into physical prototypes.",
      "You require 'Heavy' deployment infrastructure like wet labs or clean rooms.",
      "You want to survive the 'Valley of Death' between lab and market."
    ],
    faqs: [
      { q: "How long is the fellowship?", a: "The Quest Fellowship typically lasts 12-18 months." },
      { q: "What support do we provide?", a: "We provide operational armor and access to the full XHansa physical network." },
      { q: "What is the focus area?", a: "We identify breakthroughs in deep research across all nine civilizational fields." }
    ],
    trackRecord: [
      { label: "Active Fellows", value: "120+" },
      { label: "Lab Patents", value: "45" },
      { label: "Grant Pool", value: "$4.5M" },
      { label: "Partners", value: "Elite" }
    ],
    ideas: [
      { partner: "Chief Scientist", title: "NanoFilter", desc: "Carbon-nanotube based filtration systems for industrial wastewater recycling.", partnerImage: "https://i.pravatar.cc/100?img=17" },
      { partner: "Research Lead", title: "BioSustain", desc: "Engineered microbes for accelerated plastic degradation in oceanic environments.", partnerImage: "https://i.pravatar.cc/100?img=18" }
    ],
    testimonial: {
      quote: "Quest Fellowship provides the crucible for technical translation. We turn the lab's potential into physical reality.",
      author: "Fellow Graduate",
      role: "Chief Scientist @ BioGen",
      image: "https://i.pravatar.cc/100?img=4"
    },
    companies: [
      { name: "BioGen", desc: "the microbial tech for sustainable bio-fertilizer production.", focus: "Biotech", field: "Food & Ag", funding: "$4M Series A", teamSize: "10-20", categories: "BioTech / Ag", location: "Kingston" }
    ],
    icon: Search,
    color: "bg-[#6366F1]",
    image: "https://images.unsplash.com/photo-1532187863486-abf9d39d6618?auto=format&fit=crop&w=1200&q=80",
    link: "/programs/quest-fellowship"
  }
];
