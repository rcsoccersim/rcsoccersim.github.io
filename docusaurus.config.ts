import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'RoboCup Soccer Simulation 2D',
  tagline: '',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://rcsoccersim.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'robocup', // Usually your GitHub org/user name.
  projectName: 'soccer simulation 2d', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/rcsoccersim/rcsoccersim.github.io/tree/master/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          blogSidebarTitle: 'All our posts',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/rcsoccersim/rcsoccersim.github.io/tree/master/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Soccer Simulation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'competitions',
        //   position: 'left',
        //   label: 'Competitions',
        // },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'openSourceProjects',
        //   position: 'left',
        //   label: 'Open Source Projects',
        // },
        {
          type: 'docSidebar',
          sidebarId: 'papers',
          position: 'left',
          label: 'Papers',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/rcsoccersim/rcsoccersim.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Server Manual',
              to: 'https://rcsoccersim.readthedocs.io/en/latest/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/yFxkCcatGe',
            },
            {
              label: 'Mailing List',
              href: 'https://lists.robocup.org/mm/lists/robocup-sim.lists.robocup.org/',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@rcsoccersim',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'RoboCup',
              href: 'https://robocup.org/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/rcsoccersim',
            },
            {
              label: 'Log & Binary Archive',
              href: 'https://archive.robocup.info/Soccer/Simulation/2D/',
            },
            {
              label: 'RoboCup Soccer Simulator Server',
              href: 'https://github.com/rcsoccersim/rcssserver/releases'
            },
            {
              label: 'RoboCup Soccer Simulator Monitor',
              href: 'https://github.com/rcsoccersim/rcssmonitor/releases'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
      },
    ],
  } satisfies Preset.ThemeConfig,
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  plugins: [require.resolve('./plugins/blog-list-plugin')]
};

export default config;
