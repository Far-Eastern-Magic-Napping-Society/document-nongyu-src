// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '农屿文档',
  tagline: '川农智慧校园助手 - 让校园生活更简单',
  favicon: 'https://nongzhuan555.github.io/img/logo/logo.jpg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://nongzhuan555.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nongzhuan555', // Usually your GitHub org/user name.
  projectName: 'nongyu', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'zh',
  //   locales: ['zh'],
  // },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tkzzzzzz6/document-nongyu-src/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tkzzzzzz6/document-nongyu-src/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '农屿文档',
        logo: {
          alt: '网站Logo',
          src: 'https://nongzhuan555.github.io/img/logo/logo.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          { to: '/blog', label: '博客', position: 'left' },
          { href: 'https://nongzhuan555.github.io/', label: '下载', position: 'left' },
          {
            href: 'https://github.com/tkzzzzzz6/document-nongyu-src',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '农屿介绍',
                to: '/docs/nongyu-intro',
              },
              {
                label: '功能详解',
                to: '/docs/nongyu-features',
              },
              {
                label: '用户手册',
                to: '/docs/nongyu-manual',
              },
            ],
          },
          {
            title: '农屿APP',
            items: [
              {
                label: '立即下载',
                href: 'https://nongzhuan555.github.io/',
              },
              {
                label: '功能特色',
                to: '/docs/nongyu-features',
              },
              {
                label: '使用指南',
                to: '/docs/nongyu-manual',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/tkzzzzzz6/document-nongyu-src',
              },
            ],
          },
        ],
        copyright: `版权所有 © ${new Date().getFullYear()} 农屿APP。川农智慧校园助手。`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
