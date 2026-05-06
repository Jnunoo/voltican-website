// Case study DB schema (CRM operational model) doesn't yet include the rich
// website fields (slug, client, title, images, multi-outcome arrays).
// Fetchers return static fallback data until the schema is extended.
// The webhook revalidation infrastructure is already wired so this file
// can be upgraded to a live fetch without touching the page consumers.

import { caseStudies as fallback, type CaseStudy } from '@/data/case-studies'

export async function getPublishedCaseStudies(): Promise<CaseStudy[]> {
  return fallback
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined> {
  return fallback.find(cs => cs.slug === slug)
}

export function getAllCaseStudySlugs(): string[] {
  return fallback.map(cs => cs.slug)
}
