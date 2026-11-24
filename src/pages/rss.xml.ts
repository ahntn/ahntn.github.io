import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { siteConfig } from '../../site.config';
import { getPosts } from '../lib/content';
import { withBase } from '../lib/url';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: `${siteConfig.name} — Writing`,
    description: siteConfig.description,
    site: context.site ?? siteConfig.site,
    items: posts.map(function toItem(post) {
      return {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: withBase(`/writing/${post.id}`),
        categories: post.data.tags,
      };
    }),
  });
}
