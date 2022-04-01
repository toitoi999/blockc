// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BlockC',
  tagline: 'Alt du trenger å vite om krypto',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicono.ico',
  organizationName: 'toitoi999', // Usually your GitHub org/user name.
  projectName: 'blockc', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/toitoi999/blockc',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/toitoi999/blockc',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      autoCollapseSidebarCategories: true,
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: 'announcementBar-2', // Increment on change
        content: 'Hvis du liker siden, så registrer deg for dagens ord!',
      },
      navbar: {
        title: 'BlockC',
        logo: {
          alt: 'Hjemmesidelogo',
          src: 'img/logo2.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'hvordan/lommebok',
            position: 'left',
            label: 'Hvordan kryptoe?',
          },
          { to: '/blog', label: 'Hva skjer?', position: 'left' },
          { to: '/docs/category/konsepter', label: 'Konsepter', position: 'left' },
          { to: '/docs/ordliste', label: 'Ordliste', position: 'left' },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',

        copyright: `Copyright © ${new Date().getFullYear()} BlockC. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
