// Shared service definitions — used by Services.tsx grid and /services/[slug] detail pages

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  tag: string;
  title: string;
  headline: string;
  summary: string;
  description: string;
  imgUrl: string;
  heroImgUrl: string;
  capabilities: ServiceFeature[];
  approach: { step: string; title: string; description: string }[];
  outcomes: string[];
}

export const services: ServiceDetail[] = [
  {
    slug: 'data-analytics',
    tag: 'Analytics',
    title: 'Data & Analytics',
    headline: 'Turn data into your most powerful competitive asset',
    summary:
      'AI/ML, predictive analytics, data mining, and executive dashboards that turn raw data into decisions your leadership team can act on.',
    description:
      'Most organizations are sitting on untapped intelligence. We help enterprises move from reactive reporting to predictive, prescriptive analytics — embedding AI and machine learning directly into the business workflows where decisions are made.',
    imgUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop',
    heroImgUrl:
      'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1600&auto=format&fit=crop',
    capabilities: [
      {
        title: 'Predictive & Prescriptive Analytics',
        description:
          'ML models that forecast demand, churn, and risk — with recommended actions embedded into BI dashboards.',
      },
      {
        title: 'AI/ML Model Development',
        description:
          'Custom machine learning pipelines built on your data, deployed to production with full MLOps lifecycle support.',
      },
      {
        title: 'Executive Dashboards & KPIs',
        description:
          'Real-time C-suite and operational dashboards on Power BI, Tableau, and Qlik with natural language querying.',
      },
      {
        title: 'Data Mining & Pattern Discovery',
        description:
          'Unsupervised and supervised learning to surface hidden patterns in customer, operational, and financial data.',
      },
      {
        title: 'Business Process Analytics',
        description:
          'Process mining to identify bottlenecks, inefficiencies, and optimization opportunities across your value chain.',
      },
      {
        title: 'Real-Time Streaming Analytics',
        description:
          'Event-driven architectures using Apache Kafka, Azure Event Hubs, and Databricks Delta Live Tables.',
      },
    ],
    approach: [
      {
        step: '01',
        title: 'Data Discovery & Profiling',
        description:
          'We audit your existing data sources, assess quality and completeness, and identify the highest-value analytics use cases.',
      },
      {
        step: '02',
        title: 'Architecture & Modeling',
        description:
          'Design the semantic layer, data models, and AI/ML pipelines that will power your analytics platform.',
      },
      {
        step: '03',
        title: 'Build & Deploy',
        description:
          'Develop, test, and deploy dashboards, ML models, and self-service analytics tools integrated into your existing workflows.',
      },
      {
        step: '04',
        title: 'Optimize & Scale',
        description:
          'Ongoing model retraining, performance tuning, and user adoption support to ensure lasting business impact.',
      },
    ],
    outcomes: [
      '40% reduction in time-to-insight for executive decision-making',
      'AI-powered forecasting with 85–95% accuracy on demand and churn models',
      'Self-service analytics adoption across non-technical business units',
      'Real-time operational dashboards with sub-second refresh rates',
    ],
  },
  {
    slug: 'data-governance',
    tag: 'Governance',
    title: 'Data Governance & Strategy',
    headline: 'Build an AI-ready data estate you can trust',
    summary:
      'GDPR, HIPAA, PCI DSS compliance frameworks, data quality management, access controls, and AI-readiness assessments.',
    description:
      'AI is only as reliable as the data that powers it. We help organizations establish the policies, processes, and technology frameworks that ensure your data is accurate, compliant, secure, and accessible — the foundation for every AI initiative.',
    imgUrl:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=900&auto=format&fit=crop',
    heroImgUrl:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1600&auto=format&fit=crop',
    capabilities: [
      {
        title: 'Regulatory Compliance (GDPR, HIPAA, PCI DSS)',
        description:
          'End-to-end compliance frameworks covering data classification, lineage, retention, and right-to-erasure workflows.',
      },
      {
        title: 'Data Quality Management',
        description:
          'Profiling, cleansing, and monitoring pipelines with automated quality scoring across all data domains.',
      },
      {
        title: 'Data Catalog & Lineage',
        description:
          'Enterprise data catalogs on Collibra, Alation, or Microsoft Purview with automated lineage tracking.',
      },
      {
        title: 'Access Control & Data Security',
        description:
          'Role-based access controls, column-level security, and data masking across cloud and on-premise platforms.',
      },
      {
        title: 'AI Readiness Assessment',
        description:
          'Evaluate your data estate quality, completeness, and structure for AI model training and deployment readiness.',
      },
      {
        title: 'Master Data Management',
        description:
          'Single source of truth for customer, product, and supplier data across your enterprise application landscape.',
      },
    ],
    approach: [
      {
        step: '01',
        title: 'Governance Assessment',
        description:
          'Audit current data policies, ownership, quality scores, and compliance posture to identify critical gaps.',
      },
      {
        step: '02',
        title: 'Framework Design',
        description:
          'Design your governance operating model — policies, stewardship roles, data domains, and quality standards.',
      },
      {
        step: '03',
        title: 'Technology Implementation',
        description:
          'Deploy catalog, lineage, quality, and compliance tooling integrated with your enterprise data platforms.',
      },
      {
        step: '04',
        title: 'Operationalize & Train',
        description:
          'Embed governance into daily workflows with role-specific training, dashboards, and automated monitoring.',
      },
    ],
    outcomes: [
      'Full GDPR / HIPAA compliance with automated audit trails',
      'Data quality scores improved from below 60% to 90%+ across critical domains',
      'Reduced data incident response time by 70% with automated lineage tracing',
      'AI-ready data estate certified for model training and regulatory submission',
    ],
  },
  {
    slug: 'automation-rpa',
    tag: 'Automation',
    title: 'Automation (RPA)',
    headline: 'Eliminate manual work. Free your people for higher-value tasks',
    summary:
      'Intelligent process automation with cognitive bots. We deploy RPA using UiPath, Blue Prism, and Power Automate with AI-integrated decision support.',
    description:
      'Traditional RPA handles structured workflows. AI-enhanced RPA handles the unpredictable ones — invoices, emails, documents, images, and voice. We combine the two to automate end-to-end business processes that were previously considered too complex to touch.',
    imgUrl:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=900&auto=format&fit=crop',
    heroImgUrl:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    capabilities: [
      {
        title: 'RPA Bot Development',
        description:
          'Attended and unattended bots on UiPath, Blue Prism, and Power Automate for finance, HR, operations, and supply chain.',
      },
      {
        title: 'Cognitive Document Processing',
        description:
          'AI-powered document extraction and classification for invoices, contracts, purchase orders, and medical records.',
      },
      {
        title: 'Process Discovery & Mining',
        description:
          'Task mining and process intelligence tools to identify the highest-ROI automation candidates across your organization.',
      },
      {
        title: 'Intelligent Workflow Orchestration',
        description:
          'End-to-end workflow automation spanning multiple systems, with human-in-the-loop escalation for exception handling.',
      },
      {
        title: 'Computer Vision & Quality Inspection',
        description:
          'AI vision models for product defect detection, document verification, and visual compliance checking.',
      },
      {
        title: 'Hyperautomation Strategy',
        description:
          'Enterprise-wide automation roadmaps combining RPA, AI, APIs, and low-code platforms for maximum throughput.',
      },
    ],
    approach: [
      {
        step: '01',
        title: 'Process Discovery',
        description:
          'Task mining and stakeholder workshops to identify, prioritize, and document automation candidates by ROI.',
      },
      {
        step: '02',
        title: 'Bot Architecture & Design',
        description:
          'Design bots with reusable components, exception handling, and AI decision support built in from the start.',
      },
      {
        step: '03',
        title: 'Build, Test & Deploy',
        description:
          'Agile bot development with parallel testing in UAT environments and controlled production rollout.',
      },
      {
        step: '04',
        title: 'Monitor & Optimize',
        description:
          'Bot performance dashboards, exception analytics, and continuous improvement as processes evolve.',
      },
    ],
    outcomes: [
      '60–80% reduction in manual processing time for target workflows',
      'Error rates reduced to near-zero on rule-based processes',
      'Average ROI achieved within 6–9 months of deployment',
      'Full-time equivalent savings of 3–12 FTEs per major automation initiative',
    ],
  },
  {
    slug: 'data-architecture',
    tag: 'Engineering',
    title: 'Data Architecture & Engineering',
    headline: 'Modern data infrastructure built for AI at scale',
    summary:
      'Modern data platforms — lakehouses, mesh architectures, real-time streaming on Databricks, Snowflake, and Azure Synapse.',
    description:
      'Without sound data architecture, every AI initiative is built on sand. We design and implement modern, scalable data platforms that can support both analytical workloads and AI/ML at enterprise scale — from ingestion to serving.',
    imgUrl:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=900&auto=format&fit=crop',
    heroImgUrl:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1600&auto=format&fit=crop',
    capabilities: [
      {
        title: 'Data Lakehouse Architecture',
        description:
          'Unified storage and compute on Databricks, Apache Iceberg, or Delta Lake — combining the flexibility of lakes with warehouse reliability.',
      },
      {
        title: 'Data Mesh Implementation',
        description:
          'Domain-driven data ownership models with federated governance, self-serve infrastructure, and product-thinking for data.',
      },
      {
        title: 'Real-Time Data Pipelines',
        description:
          'Streaming ingestion and processing on Apache Kafka, Azure Event Hubs, and Databricks Structured Streaming.',
      },
      {
        title: 'Cloud Data Warehouse',
        description:
          'Snowflake, Azure Synapse, Google BigQuery, and Amazon Redshift — architecture, implementation, and optimization.',
      },
      {
        title: 'Data Migration & Modernization',
        description:
          'Legacy data warehouse migration to cloud-native platforms with zero-downtime cutover strategies.',
      },
      {
        title: 'Feature Stores & Vector Databases',
        description:
          'AI-ready infrastructure including feature stores (Feast, Tecton) and vector databases (Pinecone, Weaviate, pgvector).',
      },
    ],
    approach: [
      {
        step: '01',
        title: 'Architecture Assessment',
        description:
          'Review current data infrastructure, identify scalability bottlenecks, and define target-state architecture.',
      },
      {
        step: '02',
        title: 'Platform Design',
        description:
          'Design the end-to-end data platform blueprint — ingestion, storage, transformation, serving, and governance layers.',
      },
      {
        step: '03',
        title: 'Implementation & Migration',
        description:
          'Build pipelines, migrate data, and validate with parallel-run testing before production cutover.',
      },
      {
        step: '04',
        title: 'Optimize & Handover',
        description:
          'Performance tuning, cost optimization, documentation, and knowledge transfer to your engineering team.',
      },
    ],
    outcomes: [
      'Query performance improved 10–50x on analytical workloads post-migration',
      'Data pipeline latency reduced from hours to minutes with real-time streaming',
      'Cloud infrastructure costs reduced 30–45% through optimization and right-sizing',
      'AI/ML teams unblocked within 4 weeks of feature store deployment',
    ],
  },
  {
    slug: 'cloud-devsecops',
    tag: 'Cloud',
    title: 'Cloud & DevSecOps',
    headline: 'Accelerate delivery with security baked in, not bolted on',
    summary:
      'AWS, Azure, and GCP migration with security-first DevOps. CI/CD pipelines, infrastructure as code, and cost-optimized container orchestration.',
    description:
      'Cloud is the engine of modern enterprise — but cloud without governance creates sprawl, cost overruns, and security exposure. We deliver end-to-end cloud advisory, migration, and engineering services that balance speed with operational excellence.',
    imgUrl:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=900&auto=format&fit=crop',
    heroImgUrl:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop',
    capabilities: [
      {
        title: 'Cloud Migration & Modernization',
        description:
          'Lift-and-shift, re-platform, and re-architect strategies across AWS, Azure, and GCP with minimal business disruption.',
      },
      {
        title: 'CI/CD Pipeline Engineering',
        description:
          'Automated build, test, and deployment pipelines on GitHub Actions, Azure DevOps, and Jenkins with quality gates.',
      },
      {
        title: 'Infrastructure as Code (IaC)',
        description:
          'Terraform, Bicep, and AWS CDK for repeatable, version-controlled infrastructure provisioning across environments.',
      },
      {
        title: 'Kubernetes & Container Orchestration',
        description:
          'AKS, EKS, and GKE cluster design, deployment, and cost optimization for containerized workloads.',
      },
      {
        title: 'Security Engineering (DevSecOps)',
        description:
          'SAST/DAST integration, secrets management, policy-as-code with OPA, and cloud security posture management.',
      },
      {
        title: 'FinOps & Cost Optimization',
        description:
          'Cloud spend visibility, rightsizing recommendations, reserved instance strategy, and continuous cost governance.',
      },
    ],
    approach: [
      {
        step: '01',
        title: 'Cloud Readiness Assessment',
        description:
          'Inventory applications, assess dependencies, security posture, and define the migration wave plan.',
      },
      {
        step: '02',
        title: 'Architecture & Platform Design',
        description:
          'Design landing zones, network topology, IAM, and the DevSecOps platform that will underpin your cloud estate.',
      },
      {
        step: '03',
        title: 'Migration & Pipeline Build',
        description:
          'Execute migration waves with parallel validation, CI/CD automation, and security scanning integrated throughout.',
      },
      {
        step: '04',
        title: 'Run & Optimize',
        description:
          'Cloud operations, cost governance, security monitoring, and continuous platform improvement.',
      },
    ],
    outcomes: [
      'Cloud migration completed 30–40% faster with our accelerator frameworks',
      'Infrastructure provisioning time reduced from days to minutes with IaC',
      'Security vulnerabilities reduced 80%+ with DevSecOps pipeline integration',
      'Average 35% cloud cost reduction through FinOps governance',
    ],
  },
  {
    slug: 'saas-erp',
    tag: 'ERP',
    title: 'SaaS & ERP Solutions',
    headline: 'Enterprise platforms that work the way your business works',
    summary:
      'End-to-end SAP, Salesforce, Dynamics 365, and Oracle implementation — upgrades, integrations, and ongoing managed services.',
    description:
      'ERP and CRM implementations fail when technology is deployed without deep business process understanding. Our consultants combine platform expertise with industry knowledge to deliver SAP, Salesforce, and Dynamics implementations that actually stick.',
    imgUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop',
    heroImgUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1600&auto=format&fit=crop',
    capabilities: [
      {
        title: 'SAP S/4HANA Implementation & Migration',
        description:
          'Greenfield, brownfield, and selective data transition approaches to SAP S/4HANA with Change Management built in.',
      },
      {
        title: 'Salesforce CRM & Sales Cloud',
        description:
          'End-to-end Salesforce implementation — Sales Cloud, Service Cloud, Marketing Cloud, and Einstein AI integration.',
      },
      {
        title: 'Microsoft Dynamics 365',
        description:
          'Dynamics 365 Finance, Supply Chain, and Customer Engagement — with Power Platform and Copilot integration.',
      },
      {
        title: 'Oracle Cloud ERP',
        description:
          'Oracle Fusion Cloud implementation, Oracle EBS migration, and integration with third-party platforms.',
      },
      {
        title: 'ERP Integration & Middleware',
        description:
          'API-first integration between ERP, CRM, and data platforms using MuleSoft, Azure Integration Services, and custom middleware.',
      },
      {
        title: 'Managed Services & Support',
        description:
          'Post-go-live managed services with defined SLAs, proactive monitoring, and continuous improvement roadmaps.',
      },
    ],
    approach: [
      {
        step: '01',
        title: 'Business Process Review',
        description:
          'Workshop-driven process discovery to document current state, define future state, and identify fit-gap for the target platform.',
      },
      {
        step: '02',
        title: 'Solution Blueprint',
        description:
          'Detailed design of configuration, customization, data migration strategy, and integration architecture.',
      },
      {
        step: '03',
        title: 'Build, Test & Go-Live',
        description:
          'Agile implementation with sprint reviews, UAT, end-user training, and a structured go-live cutover plan.',
      },
      {
        step: '04',
        title: 'Hypercare & Optimization',
        description:
          'Intensive post-go-live support followed by optimization sprints to tune performance and drive adoption.',
      },
    ],
    outcomes: [
      'ERP go-live on time and on budget for 90%+ of our implementations',
      'User adoption rates of 85%+ within 90 days of go-live through our change management approach',
      'Integration delivery times reduced 50% using our pre-built connector library',
      'Average 25% reduction in total cost of ownership over 3 years post-implementation',
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find((s) => s.slug === slug);
}
