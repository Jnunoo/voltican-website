import { getPublishedBlogPosts } from "@/lib/cms/blog-posts";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Blog | Voltican",
  description:
    "Expert perspectives on AI strategy, enterprise technology, and digital transformation from the Voltican team.",
};

const categoryColors: Record<string, string> = {
  "AI Strategy":           "#003e6a",
  "Data Strategy":         "#0a4a7a",
  "Enterprise Technology": "#003e6a",
  "AI Tools":              "#0a3d5c",
};

export default async function BlogPage() {
  const blogPosts = await getPublishedBlogPosts();
  const [featured, ...rest] = blogPosts;

  return (
    <main className="min-h-screen bg-white">

      {/* ── Page header — white bg, navy text (matches Case Studies) ── */}
      <section className="pt-28 pb-14 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-6xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-slate-300" />
            <span className="text-slate-400 text-xs font-semibold tracking-[0.2em] uppercase">
              Insights
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#003e6a] tracking-tight leading-tight max-w-3xl mb-4">
            Ideas that move<br className="hidden md:block" /> the industry
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
            Expert perspectives on AI strategy, enterprise transformation, and the technology decisions
            that define competitive advantage.
          </p>
        </div>
      </section>

      {/* ── Card grid ── */}
      <section className="bg-white py-14">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-6xl">

          {/* Featured post — full-width horizontal card */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-1 flex flex-col md:flex-row mb-8"
            style={{ background: categoryColors[featured.category] ?? "#003e6a" }}
          >
            {/* Left: AI image */}
            <div className="md:w-72 lg:w-80 shrink-0 relative overflow-hidden min-h-[220px]">
              <Image
                src={featured.image}
                alt={featured.category}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 320px"
              />
              {/* Dark gradient right-edge blend */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-black/5 to-[#003e6a]" />
              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-white/15 backdrop-blur-sm border border-white/25 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full uppercase tracking-widest">
                  {featured.category}
                </span>
              </div>
            </div>

            {/* Right: content */}
            <div className="flex-1 p-8 flex flex-col justify-between" style={{ background: categoryColors[featured.category] ?? "#003e6a" }}>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-white/40 text-xs">{featured.date}</span>
                  <span className="text-white/25 text-xs">·</span>
                  <span className="text-white/40 text-xs">{featured.readTime}</span>
                  <span className="ml-auto bg-white/10 border border-white/15 text-white/60 text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-widest">
                    Featured
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white leading-snug mb-3 group-hover:text-white/90 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-white/55 text-sm leading-relaxed mb-5 line-clamp-2">
                  {featured.excerpt}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {featured.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/55 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/70 text-sm font-semibold">{featured.author.name}</p>
                  <p className="text-white/35 text-xs">{featured.author.title}</p>
                </div>
                <div className="flex items-center gap-2 text-white/50 group-hover:text-white text-sm font-medium group-hover:gap-3 transition-all duration-200">
                  Read article <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </Link>

          {/* Remaining posts — 2-column grid (matches Case Studies) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rest.map((post) => {
              const bg = categoryColors[post.category] ?? "#001f3d";
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 hover:-translate-y-1 flex flex-col"
                  style={{ background: bg }}
                >
                  {/* AI image top panel */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.category}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Gradient overlay — blends into the card body colour */}
                    <div
                      className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-[var(--bg)]"
                      style={{ '--bg': bg } as React.CSSProperties}
                    />
                    {/* Category badge top-left */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/15 backdrop-blur-sm border border-white/25 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full uppercase tracking-widest">
                        {post.category}
                      </span>
                    </div>
                    {/* Read time top-right */}
                    <div className="absolute top-4 right-4">
                      <span className="text-white/60 text-xs">{post.readTime}</span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-7" style={{ background: bg }}>
                    <p className="text-white/40 text-xs mb-1">{post.author.name} · {post.date}</p>
                    <h2 className="text-base font-bold text-white leading-snug mb-3 group-hover:text-white/90 transition-colors flex-1">
                      {post.title}
                    </h2>
                    <p className="text-white/55 text-sm leading-relaxed mb-5 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/55 border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-white/50 group-hover:text-white text-sm font-medium group-hover:gap-3 transition-all duration-200 mt-auto">
                      Read article <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* ── Newsletter CTA ── */}
          <div className="mt-16 bg-[#001f3d] rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Get insights in your inbox</h3>
              <p className="text-white/55 text-sm">Monthly perspectives on AI strategy and enterprise transformation.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <input
                type="email"
                placeholder="your@company.com"
                className="bg-white/10 border border-white/20 rounded-full px-5 py-2.5 text-sm text-white placeholder:text-white/35 outline-none focus:ring-2 focus:ring-white/20 min-w-[220px]"
              />
              <button className="bg-brand-orange hover:bg-brand-orange/90 text-white text-sm font-semibold px-6 py-2.5 rounded-full whitespace-nowrap transition-colors shadow-md shadow-brand-orange/20">
                Subscribe
              </button>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
