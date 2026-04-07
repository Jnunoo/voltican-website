import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Uses service role to bypass RLS — safe because this runs server-side only
// Lazy-initialized so the build doesn't crash when env vars aren't available
function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_VOLTICAN_CRM_URL!,
    process.env.VOLTICAN_CRM_SERVICE_ROLE_KEY!
  );
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      first_name,
      last_name,
      email,
      company,
      job_title,
      company_size,
      industry,
      services,
      challenge,
      timeline,
      budget_range,
      how_heard,
    } = body;

    // Basic validation
    if (!first_name || !last_name || !email) {
      return NextResponse.json(
        { error: 'first_name, last_name, and email are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Insert into prospect_intake — this feeds directly into the Voltican CRM pipeline
    const { data, error } = await getSupabase()
      .from('prospect_intake')
      .insert({
        first_name: first_name.trim(),
        last_name: last_name.trim(),
        email: email.trim().toLowerCase(),
        company: company?.trim() || null,
        job_title: job_title?.trim() || null,
        company_size: company_size || null,
        industry: industry?.trim() || null,
        services: Array.isArray(services) ? services : [],
        challenge: challenge?.trim() || null,
        timeline: timeline?.trim() || null,
        budget_range: budget_range || null,
        how_heard: how_heard?.trim() || null,
        status: 'new',
      })
      .select('id')
      .single();

    if (error) {
      console.error('[/api/contact] Supabase insert error:', error);
      return NextResponse.json(
        { error: 'Failed to submit enquiry. Please try again.' },
        { status: 500 }
      );
    }

    console.log(`[/api/contact] New lead captured: ${email} (id: ${data?.id})`);

    return NextResponse.json(
      { success: true, message: 'Thank you — we will be in touch shortly.' },
      { status: 201 }
    );
  } catch (err) {
    console.error('[/api/contact] Unexpected error:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
