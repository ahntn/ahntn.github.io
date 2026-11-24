import { getCollection } from 'astro:content';

const showDrafts = import.meta.env.DEV;

export async function getProjects() {
  const entries = await getCollection('projects', function keep(entry) {
    return showDrafts || !entry.data.draft;
  });
  return entries.sort(function byOrder(a, b) {
    return a.data.order - b.data.order;
  });
}

export async function getPosts() {
  const entries = await getCollection('writing', function keep(entry) {
    return showDrafts || !entry.data.draft;
  });
  return entries.sort(function byDate(a, b) {
    return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
  });
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
