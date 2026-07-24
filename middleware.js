import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/((?!_next|images|favicon\\.ico|.*\\.).*)'],
};

export function middleware() {
  // NOTE: this app statically generates most pages at build time, and a
  // strict nonce-based CSP (script-src 'nonce-...' 'strict-dynamic') only
  // works on dynamically rendered pages -- Next.js can't attach the nonce
  // to its own hydration scripts on a static page, so it silently blocks
  // its own scripts and the page body never renders. Don't reintroduce a
  // nonce here without first converting every route to dynamic rendering.
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: blob: https: http:",
    "connect-src 'self' https://va.vercel-analytics.com https://va.vercel-insights.com https://vitals.vercel-insights.com",
    "object-src 'none'",
    "frame-src https://maps.google.com",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; ');

  const response = NextResponse.next();

  response.headers.set('Content-Security-Policy', csp);
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');

  return response;
}