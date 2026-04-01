import { blogPosts } from "@/data/blog-posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Voltican Insights`,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

const categoryColors: Record<string, string> = {
  "AI Strategy": "bg-purple-100 text-purple-700",
  "Data Strategy": "bg-blue-100 text-blue-700",
  "Enterprise Technology": "bg-sky-100 text-sky-700",
  "AI Tools": "bg-amber-100 text-amber-600",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const currentIndex = blogPosts.indexOf(post);
  const relatedPosts = blogPosts.filter((_, i) => i !== currentIndex).slice(0, 2);

  // Simple markdown-ish renderer: ## becomes h2, \n\n becomes paragraphs
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="text-xl font-bold text-slate-800 mt-10 mb-4 leading-snug">
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("**") && block.endsWith("**")) {
        return (
          <p key={i} className="font-semibold text-slate-700 my-3">
            {block.replace(/\*\*/g, "")}
          </p>
        );
      }
      // Handle bold inline
      const parts = block.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={i} className="text-slate-600 leading-relaxed text-base mb-0">
          {parts.map((part, j) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={j} className="text-slate-800 font-semibold">
                {part.replace(/\*\*/g, "")}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    });
  };

  return (
    <main className="min-h-screen bg-[#f8f9fc]">
      {/* Article header */}
      <section className="bg-gradient-to-b from-[#001f3d] to-[#002d5a] pt-36 pb-14">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to insights
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${categoryColors[post.category] ?? "bg-white/10 text-white/60"}`}>
              {post.category}
            </span>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-white/45 text-xs">{post.date}</span>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-white/45 text-xs">{post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-8">{post.excerpt}</p>

          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center">
              <span className="text-brand-orange font-bold text-sm">
                {post.author.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{post.author.name}</p>
              <p className="text-white/45 text-xs">{post.author.title}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="container mx-auto px-6 md:px-12 lg:px-16 max-w-4xl py-14">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main content */}
          <article className="lg:col-span-3 space-y-5 prose-like">
            {renderContent(post.content)}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-8 border-t border-slate-200 mt-10">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-slate-100 text-slate-600 text-xs px-3 py-1.5 rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Author card */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand-orange/15 flex items-center justify-center mb-3">
                <span className="text-brand-orange font-bold">
                  {post.author.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <p className="font-semibold text-slate-800 text-sm">{post.author.name}</p>
              <p className="text-slate-400 text-xs mb-3">{post.author.title}, Voltican</p>
              <p className="text-slate-500 text-xs leading-relaxed">
                Our team brings deep enterprise technology expertise to every article,
                grounded in real client engagement experience.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#001f3d] to-[#003475] rounded-2xl p-5">
              <h3 className="text-white font-semibold mb-1.5 text-sm">Talk to our team</h3>
              <p className="text-white/50 text-xs leading-relaxed mb-4">
                Get a free AI Readiness Assessment and a personalized roadmap.
              </p>
              <Link
                href="/#ai-assessment"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white text-xs font-semibold px-4 py-2.5 rounded-full inline-block transition-all"
              >
                Book Assessment
              </Link>
            </div>
          </div>
        </div>

        {/* Related articles */}
        <div className="mt-16 pt-10 border-t border-slate-100">
          <h3 className="text-xs text-slate-400 uppercase tracking-widest font-medium mb-6">Related articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium mb-3 inline-block ${categoryColors[related.category] ?? "bg-slate-100 text-slate-600"}`}>
                  {related.category}
                </span>
                <h4 className="text-slate-800 font-bold text-base leading-snug group-hover:text-brand-blue transition-colors mb-2">
                  {related.title}
                </h4>
                <p className="text-slate-400 text-xs">{related.date} · {related.readTime}</p>
                <div className="flex items-center gap-1.5 text-brand-blue text-xs font-semibold mt-4 group-hover:gap-2 transition-all">
                  Read <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
