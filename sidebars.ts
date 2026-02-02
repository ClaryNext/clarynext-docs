import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  gettingStartedSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/what-is-clarynext',
        'getting-started/registration',
        'getting-started/first-activity',
        'getting-started/dashboard-tour',
      ],
    },
  ],

  featuresSidebar: [
    {
      type: 'category',
      label: 'Activities',
      collapsed: false,
      items: [
        'features/activities/running-activities',
        'features/activities/activity-components',
        'features/activities/engagement-modes',
      ],
    },
    {
      type: 'category',
      label: 'Workspace',
      collapsed: false,
      items: [
        'features/workspace/action-items',
        'features/workspace/insights',
        'features/workspace/reminders',
      ],
    },
    {
      type: 'category',
      label: 'Marketplace',
      collapsed: false,
      items: [
        'features/marketplace/browsing',
        'features/marketplace/purchasing',
        'features/marketplace/subscriptions',
      ],
    },
    {
      type: 'category',
      label: 'Communication',
      collapsed: false,
      items: [
        'features/chat/messaging',
      ],
    },
  ],

  authoringSidebar: [
    {
      type: 'category',
      label: 'Activity Designer',
      collapsed: false,
      items: [
        'authoring/designer-overview',
        'authoring/canvas-tools',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      collapsed: false,
      items: [
        'authoring/components/text-components',
        'authoring/components/input-components',
        'authoring/components/ai-prompts',
        'authoring/components/action-components',
      ],
    },
    {
      type: 'category',
      label: 'AI Features',
      collapsed: false,
      items: [
        'authoring/sketchbook-ai',
      ],
    },
    {
      type: 'category',
      label: 'Settings & Publishing',
      collapsed: false,
      items: [
        'authoring/activity-settings',
        'authoring/sharing-publishing',
      ],
    },
  ],

  rolesSidebar: [
    {
      type: 'category',
      label: 'For Experts & Mentors',
      collapsed: false,
      items: [
        'mentoring/expert-overview',
        'mentoring/managing-mentees',
        'mentoring/mentor-sessions',
        'mentoring/groups-organizations',
      ],
    },
    {
      type: 'category',
      label: 'For Vendors',
      collapsed: false,
      items: [
        'selling/vendor-overview',
        'selling/creating-products',
        'selling/pricing-credits',
        'selling/analytics',
      ],
    },
    {
      type: 'category',
      label: 'For Administrators',
      collapsed: false,
      items: [
        'administration/admin-overview',
        'administration/user-management',
        'administration/organizations',
        'administration/marketplace-config',
        'administration/ai-configuration',
      ],
    },
    {
      type: 'category',
      label: 'Use Cases',
      collapsed: false,
      items: [
        'use-cases/personal-coaching',
        'use-cases/corporate-training',
        'use-cases/education',
        'use-cases/habit-building',
      ],
    },
  ],
};

export default sidebars;
