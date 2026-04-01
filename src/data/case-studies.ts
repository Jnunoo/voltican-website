export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  outcomes: { metric: string; label: string }[];
  tags: string[];
  readTime: string;
  date: string;
  heroColor: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "genai-erp-transformation",
    client: "Fortune 500 Energy Firm",
    industry: "Energy & Utilities",
    title: "Embedding GenAI into a Legacy ERP to Cut Processing Time by 71%",
    subtitle: "How a major energy company transformed its SAP environment with AI-powered automation, eliminating 40,000 manual hours per year.",
    challenge: "A Fortune 500 energy company was operating on a heavily-customized SAP S/4HANA landscape with over 800 manual workflows. Month-end close took 12 days, procurement approvals stalled for weeks, and finance teams spent 60% of their time on data reconciliation rather than analysis.",
    solution: "Voltican embedded a GenAI orchestration layer directly into the SAP environment using Azure OpenAI and SAP BTP. We deployed intelligent document processing for vendor invoices, AI-driven anomaly detection for financial reconciliation, and a natural-language query interface for real-time ERP reporting — all without disrupting the existing system architecture.",
    outcomes: [
      { metric: "71%", label: "Reduction in processing time" },
      { metric: "40K", label: "Manual hours eliminated annually" },
      { metric: "4 days", label: "Month-end close (down from 12)" },
      { metric: "$3.2M", label: "Annual cost savings delivered" },
    ],
    tags: ["GenAI", "SAP S/4HANA", "Azure OpenAI", "Finance Automation"],
    readTime: "6 min read",
    date: "March 2026",
    heroColor: "#0a2240",
  },
  {
    slug: "agentic-ai-supply-chain",
    client: "Global Logistics Provider",
    industry: "Supply Chain & Logistics",
    title: "Deploying Agentic AI to Predict Supply Chain Disruptions 14 Days Ahead",
    subtitle: "How an agentic AI system transformed a reactive supply chain into a proactive, self-correcting operation.",
    challenge: "A global logistics provider with operations in 38 countries was losing $18M annually to unplanned disruptions — port delays, supplier failures, and demand spikes that their legacy analytics tools couldn't anticipate. Their data sat in 12 disconnected systems, making real-time decisions impossible.",
    solution: "Voltican built a multi-agent AI system that continuously ingests signals from global shipping APIs, weather data, geopolitical news feeds, and internal ERP data. Autonomous agents monitor risk thresholds, trigger rerouting recommendations, and escalate to human decision-makers only when confidence falls below defined parameters.",
    outcomes: [
      { metric: "14 days", label: "Average disruption forecast lead time" },
      { metric: "83%", label: "Prediction accuracy for tier-1 disruptions" },
      { metric: "$14M", label: "Disruption losses avoided in Year 1" },
      { metric: "6 wks", label: "Time to production deployment" },
    ],
    tags: ["Agentic AI", "Supply Chain", "Predictive Analytics", "Microsoft Azure"],
    readTime: "7 min read",
    date: "February 2026",
    heroColor: "#001a3a",
  },
  {
    slug: "cloud-data-platform-healthcare",
    client: "Regional Health Network",
    industry: "Healthcare",
    title: "Building a HIPAA-Compliant AI Data Platform That Reduced Readmission Rates by 23%",
    subtitle: "Unifying siloed patient data into a governed cloud platform that powers predictive care interventions.",
    challenge: "A regional health network with 14 hospitals was unable to share patient data across facilities. Clinicians were making decisions on incomplete information, readmission rates were above national benchmarks, and compliance teams manually produced regulatory reports — a process taking 200 person-hours per quarter.",
    solution: "Voltican architected a unified healthcare data platform on Azure Synapse with medallion-layer governance. We integrated EHR, claims, pharmacy, and lab data streams, then deployed predictive readmission models trained on 3 years of patient history. A HIPAA-compliant AI dashboard now surfaces next-best-action recommendations directly in clinician workflows.",
    outcomes: [
      { metric: "23%", label: "Reduction in 30-day readmission rates" },
      { metric: "200 hrs", label: "Quarterly compliance reporting eliminated" },
      { metric: "14", label: "Facilities now on unified data platform" },
      { metric: "100%", label: "HIPAA audit compliance maintained" },
    ],
    tags: ["Healthcare AI", "Azure Synapse", "Data Governance", "Predictive Analytics"],
    readTime: "8 min read",
    date: "January 2026",
    heroColor: "#0a1f3a",
  },
  {
    slug: "ai-readiness-manufacturing",
    client: "Mid-Market Manufacturer",
    industry: "Manufacturing",
    title: "From Spreadsheets to AI: A 90-Day Data Modernization That Unlocked $8M in Capacity",
    subtitle: "How a mid-market manufacturer built the data infrastructure needed to compete in the AI era — in 90 days.",
    challenge: "A precision parts manufacturer with $400M in revenue was managing production planning, quality control, and inventory across 47 Excel models maintained by two analysts. AI adoption was impossible without a foundation — no data warehouse, no APIs, no governance framework.",
    solution: "Voltican executed a 90-day AI Readiness Sprint: data warehouse on Snowflake, automated ETL pipelines replacing spreadsheet processes, and a real-time OEE (Overall Equipment Effectiveness) dashboard. In phase two, we layered predictive quality models that identify defect likelihood before a part enters final assembly.",
    outcomes: [
      { metric: "$8M", label: "Unlocked production capacity" },
      { metric: "90 days", label: "From spreadsheets to AI-ready" },
      { metric: "34%", label: "Reduction in quality escapes" },
      { metric: "2 FTE", label: "Analytics capacity freed for strategic work" },
    ],
    tags: ["Data Modernization", "Snowflake", "Manufacturing AI", "OEE Analytics"],
    readTime: "5 min read",
    date: "December 2025",
    heroColor: "#0d1f35",
  },
];
