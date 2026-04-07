'use client';

import { useState, useEffect, useRef } from 'react';
import { CircularGallery, type GalleryItem } from '@/components/ui/circular-gallery';

const aiServiceItems: GalleryItem[] = [
  {
    common: 'AI Strategy & Consulting',
    binomial: 'Roadmaps · Governance · Readiness',
    photo: {
      url: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&auto=format&fit=crop&q=80',
      text: 'Abstract AI neural network visualization',
      pos: '50% 40%',
      by: 'AI readiness assessments, opportunity identification & executive workshops',
    },
  },
  {
    common: 'Generative AI Implementation',
    binomial: 'LLMs · RAG · Enterprise Integration',
    photo: {
      url: 'https://images.unsplash.com/photo-1655720031554-a929595ffad7?w=900&auto=format&fit=crop&q=80',
      text: 'Generative AI interface and chat system',
      pos: '50% 30%',
      by: 'Enterprise chatbots, RAG systems & document intelligence on SAP, Salesforce, Dynamics',
    },
  },
  {
    common: 'Intelligent Process Automation',
    binomial: 'Cognitive RPA · Document AI · Vision',
    photo: {
      url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&auto=format&fit=crop&q=80',
      text: 'Robotic automation and AI processing',
      pos: '50% 20%',
      by: 'AI-enhanced RPA with cognitive bots for unstructured data & quality inspection',
    },
  },
  {
    common: 'AI-Powered Data Analytics',
    binomial: 'NL Querying · Forecasting · Agentic',
    photo: {
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80',
      text: 'Data analytics dashboard and visualization',
      pos: '50% 50%',
      by: 'Natural language querying, AI forecasting & embedded analytics in Power BI, Tableau, Qlik',
    },
  },
  {
    common: 'AI Governance & Responsible AI',
    binomial: 'Ethics · Compliance · Risk',
    photo: {
      url: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=900&auto=format&fit=crop&q=80',
      text: 'Security and governance framework visualization',
      pos: '50% 35%',
      by: 'AI risk assessment, bias detection & EU AI Act / NIST AI RMF compliance',
    },
  },
  {
    common: 'MLOps & AI Infrastructure',
    binomial: 'MLOps · Platforms · Scaling',
    photo: {
      url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&auto=format&fit=crop&q=80',
      text: 'Cloud infrastructure and ML platform',
      pos: '50% 50%',
      by: 'ML platforms on Databricks, SageMaker & Azure ML — feature stores, vector DBs, GPU optimization',
    },
  },
];

// Breakpoint at which the gallery is shown (must match Tailwind xl = 1280px)
const GALLERY_BREAKPOINT = 1280;

export default function AIServices() {
  // Start with false (card grid) — correct for mobile SSR, corrected on client
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    const check = () => setShowGallery(window.innerWidth >= GALLERY_BREAKPOINT);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="ai-services"
      className="relative overflow-hidden bg-brand-navy pt-16 pb-10"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-blue/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />


      {/* Section header */}
      <div ref={headerRef} className="reveal relative z-10 text-center px-6 mb-4">
        <p className="text-brand-orange font-semibold text-sm tracking-widest uppercase mb-3">
          AI Services
        </p>
        <h2 className="text-3xl xl:text-4xl font-heading font-bold text-white leading-tight">
          AI capabilities that transform how you work
        </h2>
        <p className="mt-3 text-brand-ice/60 text-base max-w-xl mx-auto">
          Six AI practice areas extending our 15+ years of enterprise expertise into the intelligence era.
        </p>
      </div>

      {showGallery ? (
        /* ─── DESKTOP (≥1280px): circular gallery ─── */
        <div className="relative z-10 w-full h-[440px]">
          <CircularGallery
            items={aiServiceItems}
            radius={380}
            autoRotateSpeed={0.018}
          />
        </div>
      ) : (
        /* ─── MOBILE / TABLET (<1280px): stacked card grid ─── */
        <div className="relative z-10 px-6 pb-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {aiServiceItems.map((item) => (
              <div
                key={item.common}
                className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: item.photo.pos }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <p className="text-brand-orange text-[11px] font-semibold tracking-widest uppercase mb-1">
                    {item.binomial}
                  </p>
                  <h3 className="text-white font-heading font-bold text-base mb-2 leading-snug">
                    {item.common}
                  </h3>
                  <p className="text-brand-ice/60 text-sm leading-relaxed">
                    {item.photo.by}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="relative z-10 flex justify-center pt-5 pb-2 px-6">
        <a
          href="#ai-assessment"
          className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-brand-orange text-white font-semibold text-sm hover:bg-brand-orange/90 transition-colors w-full sm:w-auto max-w-xs sm:max-w-none"
        >
          Start with a Free AI Assessment
        </a>
      </div>
    </section>
  );
}
