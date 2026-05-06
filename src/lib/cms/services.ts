import { unstable_cache } from 'next/cache'
import { getSupabase } from '@/lib/supabase'
import { services as fallbackServices, type ServiceDetail } from '@/data/services'

interface DbService {
  slug: string
  tag: string
  title: string
  headline: string
  summary: string
  description: string
  img_url: string | null
  hero_img_url: string | null
  capabilities: { title: string; description: string }[]
  approach: { step: string; title: string; description: string }[]
  outcomes: string[]
  type: string
  phase: string | null
  display_order: number
  show_on_landing: boolean
  is_published: boolean
}

function mapToServiceDetail(row: DbService): ServiceDetail {
  return {
    slug: row.slug,
    tag: row.tag,
    title: row.title,
    headline: row.headline,
    summary: row.summary,
    description: row.description,
    imgUrl: row.img_url ?? '',
    heroImgUrl: row.hero_img_url ?? '',
    capabilities: row.capabilities ?? [],
    approach: row.approach ?? [],
    outcomes: row.outcomes ?? [],
  }
}

export const getPublishedServices = unstable_cache(
  async (): Promise<ServiceDetail[]> => {
    try {
      const { data, error } = await getSupabase()
        .from('landing_services')
        .select('*')
        .eq('is_published', true)
        .eq('show_on_landing', true)
        .order('display_order', { ascending: true })

      if (error || !data || data.length === 0) return fallbackServices
      return data.map(mapToServiceDetail)
    } catch {
      return fallbackServices
    }
  },
  ['cms-services-published'],
  { revalidate: 60, tags: ['cms:services'] }
)

export const getServiceBySlugCms = unstable_cache(
  async (slug: string): Promise<ServiceDetail | undefined> => {
    try {
      const { data, error } = await getSupabase()
        .from('landing_services')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single()

      if (error || !data) return fallbackServices.find(s => s.slug === slug)
      return mapToServiceDetail(data)
    } catch {
      return fallbackServices.find(s => s.slug === slug)
    }
  },
  ['cms-service-slug'],
  { revalidate: 60, tags: ['cms:services'] }
)

export async function getAllServiceSlugs(): Promise<string[]> {
  try {
    const { data } = await getSupabase()
      .from('landing_services')
      .select('slug')
      .eq('is_published', true)
    if (data && data.length > 0) return data.map(r => r.slug)
  } catch { /* fall through */ }
  return fallbackServices.map(s => s.slug)
}
