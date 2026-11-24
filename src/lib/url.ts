import { siteConfig } from '../../site.config';

/** Root-relative URL that respects the configured `base`. */
export function withBase(path: string) {
  const base = siteConfig.base.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}` || '/';
}

/** Absolute URL for canonical/OG tags. */
export function absolute(path: string) {
  return new URL(withBase(path), siteConfig.site).toString();
}
