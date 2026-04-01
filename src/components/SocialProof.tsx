import ScrollReveal from "./ScrollReveal";

const metrics = [
  { value: "95%", label: "Client Retention Rate" },
  { value: "200+", label: "Enterprise Implementations" },
  { value: "40%", label: "Avg. Cost Reduction" },
];

const testimonials = [
  {
    quote:
      "Voltican transformed our data infrastructure and integrated AI into our forecasting pipeline — the ROI was visible within the first quarter.",
    name: "VP of Technology",
    company: "Fortune 500 Healthcare Company",
  },
  {
    quote:
      "Their listening-first approach set them apart. They didn't just implement technology — they understood our business challenges and built solutions around them.",
    name: "Chief Data Officer",
    company: "National Financial Services Firm",
  },
];

export default function SocialProof() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-brand-blue font-semibold text-sm tracking-widest uppercase mb-3">
              Results That Speak
            </p>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-navy leading-tight">
              Trusted by enterprises to deliver{" "}
              <span className="text-brand-blue">measurable impact</span>
            </h2>
          </div>

          {/* Metrics strip */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="reveal-child bg-brand-navy rounded-2xl p-8 text-center"
              >
                <div className="text-4xl lg:text-5xl font-heading font-bold text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-brand-ice/70">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="reveal-child relative bg-surface-light rounded-2xl p-8 lg:p-10 border border-surface-muted/50"
              >
                {/* Quote mark */}
                <svg
                  className="absolute top-6 right-8 w-10 h-10 text-brand-blue/10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
                <blockquote className="text-brand-navy leading-relaxed text-lg font-medium mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      className="text-brand-blue"
                    >
                      <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-brand-navy text-sm">
                      {t.name}
                    </div>
                    <div className="text-text-muted text-xs">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
