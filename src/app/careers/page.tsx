import Link from "next/link";
import { ArrowRight, MapPin, Briefcase, Users, Zap, Globe, Shield } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Opportunities | Voltican",
  description:
    "Join Voltican — a global AI and enterprise technology consulting firm. Explore open roles in AI, data, cloud, cybersecurity, and ERP consulting.",
};

const openRoles = [
  {
    title: "AI Strategy Consultant",
    department: "AI & Data",
    location: "Remote",
    type: "Full-time",
    description:
      "Help Fortune 500 and mid-market clients define and execute AI transformation roadmaps. You'll lead discovery workshops, build business cases, and guide implementation teams.",
    color: "#003e6a",
  },
  {
    title: "AI/ML Engineer",
    department: "AI & Data",
    location: "Remote",
    type: "Full-time",
    description:
      "Design and deploy machine learning pipelines, LLM integrations, and intelligent automation solutions across client environments in finance, healthcare, and manufacturing.",
    color: "#003e6a",
  },
  {
    title: "Data Science & Analytics Internship",
    department: "AI & Data",
    location: "Remote",
    type: "Internship",
    description:
      "Hands-on exposure to enterprise analytics projects. Work alongside senior consultants on data modeling, dashboarding, and AI proof-of-concept development.",
    color: "#003e6a",
  },
  {
    title: "Cybersecurity Director",
    department: "Security",
    location: "Remote",
    type: "Full-time",
    description:
      "Senior leadership role overseeing Voltican's security practice. You'll manage client cybersecurity engagements, build the practice pipeline, and mentor security engineers.",
    color: "#003558",
  },
  {
    title: "Cloud & DevSecOps Engineer",
    department: "Cloud",
    location: "Remote / Hybrid",
    type: "Full-time",
    description:
      "Architect and implement secure cloud infrastructure on AWS, Azure, and GCP. Experience with IaC, CI/CD pipelines, and policy-as-code (OPA, Sentinel) required.",
    color: "#003558",
  },
  {
    title: "ERP Consultant — SAP / Oracle",
    department: "ERP & Business Apps",
    location: "Remote / Hybrid",
    type: "Full-time",
    description:
      "Lead ERP modernization and migration engagements across SAP S/4HANA, Oracle Cloud, and Microsoft Dynamics. Client-facing with strong configuration and integration skills.",
    color: "#0a3d5c",
  },
  {
    title: "Administrative Assistant",
    department: "Operations",
    location: "Remote",
    type: "Full-time",
    description:
      "Support operations across a fast-growing global consulting firm. Coordinate scheduling, communications, proposal administration, and internal project logistics.",
    color: "#0a3d5c",
  },
];

const values = [
  {
    icon: Zap,
    title: "Move fast with purpose",
    body: "We work in high-trust, low-bureaucracy teams. Good ideas get tested quickly — not delayed by committees.",
  },
  {
    icon: Globe,
    title: "Global reach, local accountability",
    body: "With offices in Houston, Sacramento, India, and Canada, you'll work across cultures and time zones on real enterprise engagements.",
  },
  {
    icon: Users,
    title: "Multidisciplinary by design",
    body: "Our consultants don't specialize in silos. You'll develop depth in your domain while building breadth across AI, cloud, data, and enterprise systems.",
  },
  {
    icon: Shield,
    title: "Seasoned team, real mentorship",
    body: "Every engagement is staffed with experienced leads. Junior consultants grow fast because they're doing real work alongside veterans — not warming benches.",
  },
];

const departmentColors: Record<string, string> = {
  "AI & Data":            "bg-blue-50 text-blue-700 border-blue-100",
  "Security":             "bg-red-50 text-red-700 border-red-100",
  "Cloud":                "bg-sky-50 text-sky-700 border-sky-100",
  "ERP & Business Apps":  "bg-purple-50 text-purple-700 border-purple-100",
  "Operations":           "bg-slate-50 text-slate-600 border-slate-200",
};

const typeColors: Record<string, string> = {
  "Full-time":  "bg-green-50 text-green-700 border-green-100",
  "Internship": "bg-amber-50 text-amber-700 border-amber-100",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Page header ── */}
      <section className="pt-24 pb-8 bg-white border-b border-slate-100">
        <div className="w-full px-12 sm:px-16 lg:px-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-slate-300" />
            <span className="text-slate-400 text-xs font-semibold tracking-[0.2em] uppercase">
              Careers &amp; Opportunities
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#003e6a] tracking-tight leading-tight max-w-3xl mb-4">
            Seasoned consultants.<br className="hidden md:block" /> Real impact.
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mb-8">
            We seek energetic consultants with multidisciplinary expertise who want to deliver
            high-impact technology and AI engagements for global enterprises.
          </p>
          <a
            href="#open-roles"
            className="inline-flex items-center gap-2 bg-[#003e6a] hover:bg-[#0a67c7] text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-colors shadow-md"
          >
            View open roles <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ── Why Voltican ── */}
      <section className="py-20 bg-slate-50">
        <div className="w-full px-12 sm:px-16 lg:px-16">
          <div className="mb-12">
            <p className="text-[#0a67c7] font-semibold text-xs tracking-[0.18em] uppercase mb-3">
              Why Voltican
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#003e6a] leading-tight max-w-2xl">
              Where consultants do their best work
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-white rounded-xl border border-slate-100 p-6 hover:border-[#0a67c7]/20 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-[#003e6a]/8 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#003e6a]" />
                </div>
                <h3 className="font-heading font-bold text-[#003e6a] text-base mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Roles ── */}
      <section id="open-roles" className="py-20 bg-white">
        <div className="w-full px-12 sm:px-16 lg:px-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-[#0a67c7] font-semibold text-xs tracking-[0.18em] uppercase mb-3">
                Open Positions
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#003e6a] leading-tight">
                {openRoles.length} roles available
              </h2>
            </div>
            <p className="text-slate-400 text-sm">All roles are remote-friendly</p>
          </div>

          <div className="flex flex-col gap-4">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="group border border-slate-100 rounded-xl p-6 hover:border-[#003e6a]/20 hover:shadow-md transition-all duration-200 bg-white"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${departmentColors[role.department]}`}>
                        {role.department}
                      </span>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${typeColors[role.type]}`}>
                        {role.type}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-[#003e6a] text-lg mb-2 group-hover:text-[#0a67c7] transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-3">{role.description}</p>
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                      <MapPin className="w-3.5 h-3.5" />
                      {role.location}
                      <span className="mx-1">·</span>
                      <Briefcase className="w-3.5 h-3.5" />
                      {role.type}
                    </div>
                  </div>
                  <div className="shrink-0">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#003e6a] hover:bg-[#0a67c7] text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors whitespace-nowrap"
                    >
                      Apply now <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open application CTA ── */}
      <section className="py-20 bg-[#003e6a]">
        <div className="w-full px-12 sm:px-16 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-white/50 text-xs tracking-[0.2em] uppercase font-semibold mb-4">
              Don&apos;t see your role?
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 leading-tight">
              We hire for talent, not just openings
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-xl mx-auto">
              If you&apos;re an experienced consultant in AI, cloud, data, or enterprise systems and
              Voltican feels like the right fit — send us your CV. We&apos;re always building the bench.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#FF9800] hover:bg-[#FF9800]/90 text-white font-semibold px-8 py-4 rounded-full text-sm transition-colors shadow-lg shadow-orange-500/20"
            >
              Send us your CV <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
