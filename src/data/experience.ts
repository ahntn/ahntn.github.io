export interface Experience {
  org: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
  url?: string;
}

// Only facts supplied by Anh. Anything else is a TODO: placeholder.
// NOTE: the order below is a placeholder. Confirm it is newest first.
export const experience: Experience[] = [
  {
    org: 'Gambasoft',
    role: 'Founder',
    period: 'TODO: dates',
    summary: 'Own products plus client work in web, cloud and AI.',
    bullets: [],
    url: 'https://gambasoft.com',
  },
  {
    org: 'Consulting',
    role: 'Software consultant, fintech and medical SaaS',
    period: 'TODO: dates',
    summary: 'Consulted for fintech and medical SaaS companies.',
    bullets: ['React upgrades', 'A component library', 'An Nx monorepo'],
  },
  {
    org: 'Dapper Labs',
    role: 'TODO: role title',
    period: 'TODO: dates',
    summary: 'Built a Next.js, GraphQL and XState wallet platform for the FLOW network.',
    bullets: [],
  },
  {
    org: 'TODO: employer name',
    role: 'TODO: role title',
    period: 'TODO: dates',
    summary: 'Form systems, document processing and real-time services.',
    bullets: [
      'Led a form-system rebuild with XState: 30% faster rendering',
      'Built document-processing services',
      'Built real-time updates with SignalR',
      'Built an AWS and Docker deployment flow',
    ],
  },
];
