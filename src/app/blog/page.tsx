import { blogPosts } from "@/data/blog-posts";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Blog | Voltican",
  description:
    "Expert perspectives on AI strategy, enterprise technology, and digital transformation from the Voltican team.",
};

const categoryColors: Record<string, string> = {
  "AI Strategy": "bg-purple-100 text-purple-700",
  "Data Strategy": "bg-blue-100 text-blue-700",
  "Enterprise Technology": "bg-sky-100 text-sky-700",
  "AI Tools": "bg-amber-100 text-amber-600",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <main className="min-h-screen bg-[#f8f9fc]">
      {/* Page header */}
      <section className="bg-gradient-to-b from-[#001f3d] to-[#003163] pt-36 pb-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-6xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-brand-orange" />
            <span className="text-brand-orange text-xs font-semibold tracking-widest uppercase">Insights</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight leading-tight max-w-2xl mb-4">
            Ideas that move the industry
          </h1>
          <p className="text-white/55 text-lg max-w-xl leading-relaxed">
            Expert perspectives on AI strategy, enterprise transformation, and the technology decisions
            that define competitive advantage.
          </p>

          {/* Category filters (static, decorative) */}
          <div className="flex flex-wrap gap-2 mt-8">
            {["All", "AI Strategy", "Data Strategy", "Enterprise Technology", "AI Tools"].map((cat) => (
              <span
                key={cat}
                className={`text-xs px-3.5 py-1.5 rounded-full font-medium cursor-pointer transition-colors ${
                  cat === "All"
                    ? "bg-brand-orange text-white"
                    : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-6xl py-14">
        {/* Featured post */}
        <div className="mb-12">
          <p className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-5">Featured</p>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-5 gap-0 bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            {/* Image side */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[#001f3d] to-[#003475] min-h-[220px] flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-orange text-3xl font-bold">AI</span>
                </div>
                <p className="text-white/40 text-xs uppercase tracking-widest">Voltican Insights</p>
              </div>
            </div>
            {/* Content */}
            <div className="lg:col-span-3 p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${categoryColors[featured.category] ?? "bg-slate-100 text-slate-600"}`}>
                    {featured.category}
                  </span>
                  <span className="text-slate-400 text-xs">{featured.date} · {featured.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 leading-snug mb-3 group-hover:text-brand-blue transition-colors">
                  {featured.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {featured.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-700 text-sm font-semibold">{featured.author.name}</p>
                  <p className="text-slate-400 text-xs">{featured.author.title}</p>
                </div>
                <div className="flex items-center gap-2 text-brand-blue text-sm font-semibold group-hover:gap-3 transition-all">
                  Read article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Rest of posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
            >
              {/* Color stripe */}
              <div className="h-1 bg-gradient-to-r from-brand-orange to-brand-blue" />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${categoryColors[post.category] ?? "bg-slate-100 text-slate-600"}`}>
                    {post.category}
                  </span>
                </div>
                <h2 className="text-base font-bold text-slate-800 leading-snug mb-3 group-hover:text-brand-blue transition-colors flex-1">
                  {post.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                  <div>
                    <p className="text-slate-600 text-xs font-semibold">{post.author.name}</p>
                    <p className="text-slate-400 text-xs">{post.date} · {post.readTime}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-blue transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-14 bg-white border border-slate-100 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-1">Get insights in your inbox</h3>
            <p className="text-slate-500 text-sm">Monthly perspectives on AI strategy and enterprise transformation.</p>
          </div>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="your@company.com"
              className="border border-slate-200 rounded-full px-5 py-2.5 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-brand-blue/30 min-w-[220px]"
            />
            <button className="bg-brand-blue hover:bg-brand-blue/90 text-white text-sm font-semibold px-6 py-2.5 rounded-full whitespace-nowrap transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
