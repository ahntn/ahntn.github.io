import { absolute } from '../lib/url';

export function GET() {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${absolute('/sitemap.xml')}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
