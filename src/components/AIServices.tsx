const aiServices = [
  {
    number: "01",
    title: "AI Strategy & Consulting",
    description:
      "AI readiness assessments, opportunity identification, roadmap design, and executive AI literacy workshops. We help you build the business case and governance framework before investing.",
    tags: ["AI Readiness", "Roadmaps", "Governance"],
  },
  {
    number: "02",
    title: "Generative AI Implementation",
    description:
      "Enterprise chatbots, RAG systems using your proprietary data, document intelligence, LLM fine-tuning, and AI-powered content generation integrated into SAP, Salesforce, and Dynamics.",
    tags: ["LLMs", "RAG", "Enterprise Integration"],
  },
  {
    number: "03",
    title: "Intelligent Process Automation",
    description:
      "AI-enhanced RPA with cognitive bots that handle unstructured data, intelligent document processing, computer vision for quality inspection, and decision AI for approvals.",
    tags: ["Cognitive RPA", "Document AI", "Computer Vision"],
  },
  {
    number: "04",
    title: "AI-Powered Data Analytics",
    description:
      "Natural language querying, automated insight generation, AI-powered forecasting, agentic analytics, and embedded AI in Power BI, Tableau, and Qlik.",
    tags: ["NL Querying", "Forecasting", "Agentic Analytics"],
  },
  {
    number: "05",
    title: "AI Governance & Responsible AI",
    description:
      "AI risk assessment, model explainability (XAI), bias detection, regulatory compliance (EU AI Act, NIST AI RMF), and AI incident response planning.",
    tags: ["Ethics", "Compliance", "Risk"],
  },
  {
    number: "06",
    title: "MLOps & AI Infrastructure",
    description:
      "ML platform design on Databricks, SageMaker, and Azure ML. Feature stores, vector databases, CI/CD for models, and GPU compute cost optimization.",
    tags: ["MLOps", "Platforms", "Scaling"],
  },
];

import ScrollReveal from "./ScrollReveal";

export default function AIServices() {
  return (
    <section id="ai-services" className="py-20 lg:py-28 bg-brand-navy relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-blue/10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-brand-orange/5" />

      <div className="relative mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-brand-orange font-semibold text-sm tracking-widest uppercase mb-3">
              AI Services
            </p>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white leading-tight">
              AI capabilities that transform how you work
            </h2>
            <p className="mt-4 text-brand-ice/80 text-lg">
              Six AI practice areas that extend our 15+ years of enterprise
              expertise into the intelligence era.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiServices.map((service) => (
              <div
                key={service.number}
                className="reveal-child bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-orange/30 hover:bg-white/10 transition-all group"
              >
                <span className="text-brand-orange font-mono text-sm font-bold">
                  {service.number}
                </span>
                <h3 className="mt-3 text-xl font-heading font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-brand-ice/70 leading-relaxed text-sm mb-5">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-brand-blue/20 text-brand-ice text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#ai-assessment"
              className="inline-flex items-center justify-center h-13 px-8 rounded-full bg-brand-orange text-white font-semibold text-base hover:bg-brand-orange/90 transition-colors"
            >
              Start with a Free AI Assessment
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
