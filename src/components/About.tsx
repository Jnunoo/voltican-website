import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "6", label: "Core Practice Areas" },
  { value: "8+", label: "Technology Partners" },
  { value: "3", label: "Global Offices" },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — text */}
            <div>
              <p className="text-brand-blue font-semibold text-sm tracking-widest uppercase mb-3">
                Who We Are
              </p>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-navy leading-tight">
                Transforming enterprise vision into{" "}
                <span className="text-brand-blue">AI-era reality</span>
              </h2>
              <p className="mt-6 text-text-muted leading-relaxed text-lg">
                Voltican Inc is a global management consulting, technology services,
                and outsourcing company headquartered in Houston, Texas. Since 2009
                we&apos;ve helped organizations of all sizes harness technology to create
                sustainable value.
              </p>
              <p className="mt-4 text-text-muted leading-relaxed">
                We don&apos;t just build AI prototypes — we integrate artificial
                intelligence into your core business processes, enterprise
                platforms, and data infrastructure to deliver measurable,
                lasting results. Our listening-first approach ensures every
                solution is built around what matters most to your organization.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-brand-blue text-white font-semibold text-sm hover:bg-brand-blue/90 transition-colors"
                >
                  Explore Services
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center h-11 px-6 rounded-full border-2 border-brand-navy/20 text-brand-navy font-semibold text-sm hover:bg-surface-light transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Right — stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="reveal-child bg-surface-light rounded-2xl p-8 text-center border border-surface-muted/50"
                >
                  <div className="text-4xl lg:text-5xl font-heading font-bold text-brand-blue">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
