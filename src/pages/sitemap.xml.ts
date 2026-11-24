import { absolute } from '../lib/url';
import { getPosts, getProjects } from '../lib/content';

export async function GET() {
  const projects = await getProjects();
  const posts = await getPosts();
  const paths = [
    '/',
    '/projects',
    '/writing',
    '/about',
    '/resume',
    ...projects.map((project) => `/projects/${project.id}`),
    ...posts.map((post) => `/writing/${post.id}`),
  ];
  const urls = paths
    .map((path) => `  <url><loc>${absolute(path)}</loc></url>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
