import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/((?!_next|images|favicon\\.ico|.*\\.).*)'],
};

export async function middleware(request) {
  const nonce = crypto.randomUUID();

  const res = await fetch(request.url, {
    headers: { 'x-middleware': '1' },
  });

  const contentType = res.headers.get('content-type') || '';

  if (contentType.includes('text/html')) {
    let html = await res.text();

    // Inject nonce into all inline <script> tags (no src attribute)
    html = html.replace(
      /<script(?![^>]*\bsrc\s*=)([^>]*)>/gi,
      `<script nonce="${nonce}"$1>`
    );

    const headers = new Headers(res.headers);
    headers.set(
      'Content-Security-Policy',
      [
        "default-src 'self'",
        `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: blob: https: http:",
        "connect-src 'self' https://va.vercel-analytics.com https://vitals.vercel-insights.com",
        "object-src 'none'",
        "frame-ancestors 'none'",
        "base-uri 'self'",
        "form-action 'self'",
      ].join('; ')
    );
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.set('X-Frame-Options', 'DENY');

    return new Response(html, { status: res.status, headers });
  }

  const headers = new Headers(res.headers);
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-Frame-Options', 'DENY');
  return new Response(res.body, { status: res.status, headers });
}
