import { createClient } from '@supabase/supabase-js'

// Public read-only Supabase client for the website CMS fetchers.
// Uses the publishable (anon) key — only reads published rows via RLS.
// Created lazily so the build doesn't fail if env vars aren't set.
function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_VOLTICAN_CRM_URL!,
    process.env.NEXT_PUBLIC_VOLTICAN_CRM_PUBLISHABLE_KEY!,
    { auth: { persistSession: false } }
  )
}

export { getSupabase }
