import { render } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

/** Minutes, computed by the remark-reading-time plugin at render time. */
export async function getReadingTime(post: CollectionEntry<'writing'>) {
  const rendered = await render(post);
  const minutes = rendered.remarkPluginFrontmatter?.readingTime;
  return typeof minutes === 'number' ? minutes : 1;
}
