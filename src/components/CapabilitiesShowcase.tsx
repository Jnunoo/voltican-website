"use client";

import {
  FeatureCarousel,
  type ImageSet,
  type Step,
} from "@/components/ui/animated-feature-carousel";

const steps: readonly Step[] = [
  {
    id: "1",
    name: "Data & Analytics",
    title: "Turn Data Into Decisions",
    description:
      "AI/ML models, predictive analytics, and executive dashboards — integrated into your enterprise platforms so insights reach the people who act on them.",
  },
  {
    id: "2",
    name: "Cloud & DevSecOps",
    title: "Modernize Your Infrastructure",
    description:
      "Cloud migration, security-first DevOps pipelines, and disaster recovery — built for scale with AWS partnership backing.",
  },
  {
    id: "3",
    name: "Automation & RPA",
    title: "Eliminate Manual Work",
    description:
      "Cognitive bots, intelligent document processing, and AI-driven workflow automation — freeing your team to focus on high-value tasks.",
  },
  {
    id: "4",
    name: "SaaS & ERP",
    title: "Optimize Enterprise Platforms",
    description:
      "SAP, Salesforce, Dynamics 365, and Oracle — implementation, integration, upgrades, and ongoing managed services.",
  },
];

const images: ImageSet = {
  alt: "Enterprise technology solution",
  step1img1:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop",
  step1img2:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1715&auto=format&fit=crop",
  step2img1:
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1740&auto=format&fit=crop",
  step2img2:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1734&auto=format&fit=crop",
  step3img:
    "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1674&auto=format&fit=crop",
  step4img:
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1752&auto=format&fit=crop",
};

export default function CapabilitiesShowcase() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-brand-blue font-semibold text-sm tracking-widest uppercase mb-3">
            Capabilities
          </p>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-navy leading-tight">
            Enterprise solutions,{" "}
            <span className="text-brand-blue">visualized</span>
          </h2>
          <p className="mt-4 text-text-muted text-lg">
            Explore our core practice areas — each backed by 15+ years of
            delivery experience across global enterprises.
          </p>
        </div>

        <FeatureCarousel image={images} steps={steps} />
      </div>
    </section>
  );
}
