import type { APIRoute, GetStaticPaths } from 'astro';
import { readFileSync } from 'node:fs';
import satori from 'satori';
import sharp from 'sharp';
import { siteConfig } from '../../../site.config';
import { getPosts, getProjects } from '../../lib/content';

const inter = readFileSync(
  'node_modules/@fontsource/spectral/files/spectral-latin-400-normal.woff',
);
const serif = readFileSync(
  'node_modules/@fontsource/spectral/files/spectral-latin-800-normal.woff',
);

interface Card {
  heading: string;
  sub: string;
}

export const getStaticPaths: GetStaticPaths = async function getPaths() {
  const projects = await getProjects();
  const posts = await getPosts();
  const cards: Array<{ slug: string; card: Card }> = [
    { slug: 'default', card: { heading: siteConfig.name, sub: siteConfig.positioning } },
    ...projects.map(function toCard(project) {
      return {
        slug: `projects-${project.id}`,
        card: { heading: project.data.title, sub: project.data.summary },
      };
    }),
    ...posts.map(function toCard(post) {
      return {
        slug: `writing-${post.id}`,
        card: { heading: post.data.title, sub: post.data.description },
      };
    }),
  ];
  return cards.map(function toPath(item) {
    return { params: { slug: item.slug }, props: { card: item.card } };
  });
};

export const GET: APIRoute = async function get(context) {
  const props = context.props as { card: Card };
  const { card } = props;
  const isDefault = card.heading === siteConfig.name;

  const tree = {
    type: 'div',
    props: {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '72px',
        background: '#17483a',
        color: '#eef0e9',
      },
      children: [
        {
          type: 'div',
          props: {
            style: { fontFamily: 'Spectral', fontSize: 28, color: '#ff7a52' },
            children: isDefault ? siteConfig.location : siteConfig.name,
          },
        },
        {
          type: 'div',
          props: {
            style: { display: 'flex', flexDirection: 'column', gap: 24, width: 1056 },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontFamily: 'SpectralHead',
                    fontSize: isDefault ? 110 : 80,
                    lineHeight: 1.05,
                  },
                  children: card.heading,
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    fontFamily: 'Spectral',
                    fontSize: 34,
                    color: '#a9cbbb',
                    lineHeight: 1.35,
                  },
                  children:
                    card.sub.length > 140 ? `${card.sub.slice(0, 137)}...` : card.sub,
                },
              },
            ],
          },
        },
        {
          type: 'div',
          props: {
            style: { fontFamily: 'Spectral', fontSize: 26, color: '#a9cbbb' },
            children: new URL(siteConfig.site).host,
          },
        },
      ],
    },
  };

  const svg = await satori(tree as Parameters<typeof satori>[0], {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Spectral', data: inter, weight: 400, style: 'normal' },
      { name: 'SpectralHead', data: serif, weight: 800, style: 'normal' },
    ],
  });
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
