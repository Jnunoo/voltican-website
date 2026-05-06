import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

// POST /api/revalidate — called by voltican-crm after CMS writes
// Body: { tag: string }
// Header: x-revalidate-secret must match WEBSITE_REVALIDATE_SECRET
export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-revalidate-secret')
  if (!process.env.WEBSITE_REVALIDATE_SECRET || secret !== process.env.WEBSITE_REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let tag: string | undefined
  try {
    const body = await req.json()
    tag = body?.tag
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  if (!tag || typeof tag !== 'string') {
    return NextResponse.json({ error: 'tag required' }, { status: 400 })
  }

  revalidateTag(tag, 'max')
  return NextResponse.json({ ok: true, tag })
}
