export interface SkillGroup {
  depth: 'Deep' | 'Working' | 'Learning';
  blurb: string;
  skills: string[];
}

// Grouping is a proposal; confirm or adjust.
export const skillGroups: SkillGroup[] = [
  {
    depth: 'Deep',
    blurb: 'Where I am fastest and most opinionated.',
    skills: ['React', 'TypeScript', 'XState'],
  },
  {
    depth: 'Working',
    blurb: 'Used in production, comfortable owning.',
    skills: ['Next.js', 'GraphQL', 'AWS', 'Docker', 'SignalR', 'Nx'],
  },
  {
    depth: 'Learning',
    blurb: 'Actively deepening, mostly on the back end.',
    skills: ['Node.js', 'Python'],
  },
];
