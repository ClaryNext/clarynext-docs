import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ClaryNext Documentation',
  tagline: 'Learn, Create, and Grow with Interactive Activities',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.clarynext.com',
  baseUrl: '/',

  organizationName: 'ClaryNext',
  projectName: 'clarynext-docs',

  onBrokenLinks: 'throw',

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
          editUrl: 'https://github.com/ClaryNext/clarynext-docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/clarynext-social-card.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'welcome',
      content: 'Welcome to the ClaryNext Documentation Hub! New to ClaryNext? Start with our <a href="/getting-started/what-is-clarynext">Getting Started Guide</a>',
      backgroundColor: '#4B83E5',
      textColor: '#ffffff',
      isCloseable: true,
    },
    navbar: {
      title: 'ClaryNext Docs',
      logo: {
        alt: 'ClaryNext Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'gettingStartedSidebar',
          position: 'left',
          label: 'Getting Started',
        },
        {
          type: 'docSidebar',
          sidebarId: 'featuresSidebar',
          position: 'left',
          label: 'Features',
        },
        {
          type: 'docSidebar',
          sidebarId: 'authoringSidebar',
          position: 'left',
          label: 'Activity Authoring',
        },
        {
          type: 'docSidebar',
          sidebarId: 'rolesSidebar',
          position: 'left',
          label: 'Roles & Use Cases',
        },
        {
          href: 'https://app.clarynext.com',
          label: 'Go to App',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/getting-started/what-is-clarynext',
            },
            {
              label: 'Feature Guide',
              to: '/features/activities/running-activities',
            },
            {
              label: 'Activity Authoring',
              to: '/authoring/designer-overview',
            },
          ],
        },
        {
          title: 'For Different Roles',
          items: [
            {
              label: 'For End Users',
              to: '/getting-started/first-activity',
            },
            {
              label: 'For Activity Authors',
              to: '/authoring/designer-overview',
            },
            {
              label: 'For Experts & Mentors',
              to: '/mentoring/expert-overview',
            },
            {
              label: 'For Vendors',
              to: '/selling/vendor-overview',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Use Cases',
              to: '/use-cases/personal-coaching',
            },
            {
              label: 'ClaryNext App',
              href: 'https://app.clarynext.com',
            },
            {
              label: 'Support',
              href: 'https://support.clarynext.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ClaryNext. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
};

export default config;
