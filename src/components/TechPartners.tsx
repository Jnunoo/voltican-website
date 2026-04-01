import ScrollReveal from "./ScrollReveal";

const partners = [
  { name: "SAP", accent: "bg-brand-blue" },
  { name: "Microsoft", accent: "bg-brand-navy" },
  { name: "Oracle", accent: "bg-red-600" },
  { name: "IBM", accent: "bg-brand-blue" },
  { name: "AWS", accent: "bg-brand-orange" },
  { name: "Salesforce", accent: "bg-blue-500" },
  { name: "QAD", accent: "bg-brand-navy" },
  { name: "Worksoft", accent: "bg-brand-steel" },
];

export default function TechPartners() {
  return (
    <section className="py-16 bg-white border-y border-surface-muted/50">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-center text-sm font-semibold text-text-muted tracking-widest uppercase mb-10">
            Technology Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="reveal-child group relative flex items-center gap-3 px-6 py-3 rounded-xl border border-surface-muted/60 bg-surface-light/50 hover:bg-white hover:border-brand-blue/20 hover:shadow-md transition-all"
              >
                <div className={`w-2 h-2 rounded-full ${partner.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />
                <span className="text-lg font-heading font-bold text-brand-navy/70 group-hover:text-brand-navy transition-colors tracking-tight">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
