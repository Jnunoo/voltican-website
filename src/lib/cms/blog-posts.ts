import { unstable_cache } from 'next/cache'
import { getSupabase } from '@/lib/supabase'
import { blogPosts as fallbackPosts, type BlogPost } from '@/data/blog-posts'

interface DbBlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  author_name: string
  author_role: string
  published_at: string
  read_time: string
  tags: string[]
  sections: { heading: string; content: string }[]
  is_published: boolean
}

function sectionsToContent(sections: { heading: string; content: string }[]): string {
  if (!sections || sections.length === 0) return ''
  return sections.map(s => (s.heading ? `## ${s.heading}\n\n${s.content}` : s.content)).join('\n\n')
}

function mapToWebsitePost(row: DbBlogPost): BlogPost {
  const date = row.published_at
    ? new Date(row.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : ''
  return {
    slug: row.slug,
    category: row.category,
    title: row.title,
    excerpt: row.excerpt,
    content: sectionsToContent(row.sections ?? []) || row.excerpt,
    author: { name: row.author_name, title: row.author_role },
    readTime: row.read_time,
    date,
    tags: row.tags ?? [],
    image: '',
  }
}

export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  return unstable_cache(
    async () => {
      try {
        const { data, error } = await getSupabase()
          .from('blog_posts')
          .select('*')
          .eq('is_published', true)
          .order('published_at', { ascending: false })

        if (error || !data || data.length === 0) return fallbackPosts
        return data.map(mapToWebsitePost)
      } catch {
        return fallbackPosts
      }
    },
    ['cms-blog-published'],
    { revalidate: 60, tags: ['cms:blog'] }
  )()
}

export async function getBlogPostBySlugCms(slug: string): Promise<BlogPost | undefined> {
  return unstable_cache(
    async () => {
      try {
        const { data, error } = await getSupabase()
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .eq('is_published', true)
          .single()

        if (error || !data) return fallbackPosts.find(p => p.slug === slug)
        return mapToWebsitePost(data)
      } catch {
        return fallbackPosts.find(p => p.slug === slug)
      }
    },
    ['cms-blog-slug', slug],
    { revalidate: 60, tags: ['cms:blog'] }
  )()
}

export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const { data } = await getSupabase()
      .from('blog_posts')
      .select('slug')
      .eq('is_published', true)
    if (data && data.length > 0) return data.map(r => r.slug)
  } catch { /* fall through */ }
  return fallbackPosts.map(p => p.slug)
}
