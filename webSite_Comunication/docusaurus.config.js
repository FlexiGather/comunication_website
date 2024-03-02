// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FlexiGather',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://comunication_website.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'FlexiGather', // Usually your GitHub org/user name.
  projectName: 'FlexiGather', // Usually your repo name.

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      image: 'logo/Logo.jpeg',
      navbar: {
        title: 'FlexiGather',
        logo: {
          alt: 'My Site Logo',
          src: 'logo/Logo.jpeg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/milestones',
            label: 'Milestones',
            position: 'left'
          },
          {
            href: 'https://github.com/FlexiGather',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://drive.google.com/drive/folders/1Y9mboL0mh3XECKwF9_vTQU6tiZ36ZMby',
            label: 'Drive',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Project Guiding Teacher',
            items: [
              {
                label: 'Prof. Joaquim Sousa Pinto',
                href: 'https://www.ua.pt/pt/p/10312245',
              },
            ],
          },
          {
            title: 'Group Elements',
            items: [
              {
                label: 'Rafaela Abrunhosa - 107658',
                href: 'mailto:maria.abrunhosa@ua.pt',
              },
              {
                label: 'Marta Inácio - 107826',
                href: 'mailto:marta.oliveira.inacio@ua.pt',
              },
              {
                label: 'Roberto Castro - 107133',
                href: 'mailto:robertorcastro@ua.pt',
              },
              {
                label: 'Sara Almeida - 108796',
                href: 'mailto:sarafalmeida@ua.pt',
              },
              {
                label: 'Tiago Gomes - 108307',
                href: 'mailto:tiagocgomes@ua.pt',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/FlexiGather',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
