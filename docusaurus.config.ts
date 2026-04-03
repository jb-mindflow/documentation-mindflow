import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Mindflow Help Center',
  tagline: 'Guides and tutorials to navigate our automation platform with ease',
  favicon: 'img/favicon.ico',

  url: 'https://jb-mindflow.github.io',
  baseUrl: '/documentation-mindflow/',

  organizationName: 'jb-mindflow',
  projectName: 'documentation-mindflow',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl:
            'https://github.com/jb-mindflow/documentation-mindflow/tree/main/',
        },
        blog: {
          path: 'changelog',
          routeBasePath: 'changelog',
          blogTitle: 'Changelog',
          blogDescription: 'Mindflow release notes and changelog',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/mindflow-social-card.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Mindflow',
      logo: {
        alt: 'Mindflow Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Help Center',
        },
        {to: '/changelog', label: 'Changelog', position: 'left'},
        {
          href: 'https://mindflow.io',
          label: 'mindflow.io',
          position: 'right',
        },
        {
          href: 'https://github.com/jb-mindflow/documentation-mindflow',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Company',
          items: [
            {
              label: 'Home',
              href: 'https://mindflow.io',
            },
            {
              label: 'Hiring',
              href: 'https://mindflow.io/hiring',
            },
            {
              label: 'Security',
              href: 'https://mindflow.io/security',
            },
          ],
        },
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/getting-started/overview',
            },
            {
              label: 'Guides',
              to: '/guides/building-flows/start-a-flow-from-a-template',
            },
            {
              label: 'Integrations',
              to: '/integrations',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'X (Twitter)',
              href: 'https://x.com/mindaboraflow',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/mindflow/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mindflow. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: undefined, // TODO: Configure Algolia DocSearch for search
  } satisfies Preset.ThemeConfig,
};

export default config;
