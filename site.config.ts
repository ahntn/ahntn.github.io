/**
 * Single source of truth for deployment and identity.
 *
 * Moving to a custom domain: set `site` to the domain, `base` to '/',
 * and add a `public/CNAME` file containing the domain.
 */
export const siteConfig = {
  // Deployment
  site: 'https://ahntn.github.io',
  base: '/',

  // Identity
  name: 'Anh Nguyen',
  title: 'Anh Nguyen — Full-stack engineer',
  description:
    'Full-stack engineer. React and TypeScript first, now deepening Node.js and Python back ends.',
  positioning:
    'Full-stack engineer. React and TypeScript first, now deepening Node.js and Python back ends.',
  jobTitle: 'Senior Full-Stack Engineer',
  location: 'Alberta, Canada',
  openToWork: 'Open to full-time remote roles.',

  // Links (email is intentionally not public; see README)
  links: {
    github: 'https://github.com/ahntn',
    linkedin: 'https://www.linkedin.com/in/anguyen118/',
    gambasoft: 'https://gambasoft.com',
  },

  // Resume PDF in /public. Placeholder until the real file is added.
  resumePdf: '/resume.pdf',
} as const;

export type SiteConfig = typeof siteConfig;
