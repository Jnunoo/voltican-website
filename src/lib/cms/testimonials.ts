import { unstable_cache } from 'next/cache'
import { getSupabase } from '@/lib/supabase'

export interface CmsTestimonial {
  id: string
  author_name: string
  author_role: string
  company: string
  quote: string
  rating: number
  display_order: number
}

const fallback: CmsTestimonial[] = [
  {
    id: '1',
    author_name: 'VP of Technology',
    author_role: 'Fortune 500 Healthcare Company',
    company: '',
    quote: 'Voltican transformed our data infrastructure and integrated AI into our forecasting pipeline — the ROI was visible within the first quarter.',
    rating: 5,
    display_order: 1,
  },
  {
    id: '2',
    author_name: 'Chief Data Officer',
    author_role: 'National Financial Services Firm',
    company: '',
    quote: "Their listening-first approach set them apart. They didn't just implement technology — they understood our business challenges and built solutions around them.",
    rating: 5,
    display_order: 2,
  },
  {
    id: '3',
    author_name: 'Director of IT Operations',
    author_role: 'Global Manufacturing Enterprise',
    company: '',
    quote: "From cloud migration to AI-powered analytics, Voltican delivered on every milestone — on time and under budget. We've renewed our engagement three years running.",
    rating: 5,
    display_order: 3,
  },
]

export const getPublishedTestimonials = unstable_cache(
  async (): Promise<CmsTestimonial[]> => {
    try {
      const { data, error } = await getSupabase()
        .from('testimonials')
        .select('id, author_name, author_role, company, quote, rating, display_order')
        .eq('is_published', true)
        .order('display_order', { ascending: true })

      if (error || !data || data.length === 0) return fallback
      return data
    } catch {
      return fallback
    }
  },
  ['cms-testimonials-published'],
  { revalidate: 60, tags: ['cms:testimonials'] }
)
