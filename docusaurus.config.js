// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */


const config = {
  title: 'BlockC',
  tagline: 'stedet du kan begynne og lære om krypto',
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
        id: 'announcementbar',
        backgroundColor: '#dfe9fb',
        textColor: "#000",
        isCloseable: true,
        content: 'Hvis du liker siden følg oss på',
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
            docId: 'komigang/setteigang',
            position: 'left',
            label: 'Kom i gang!',
          },
          { to: '/blog', label: 'Hva skjer?', position: 'left' },
          { to: '/docs/konsepter/introduksjon', label: 'Konsepter', position: 'left' },
          { to: '/docs/omsiden', label: 'Om siden', position: 'left' },
          {
            href: 'https://github.com/toitoi999/blockc',
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
