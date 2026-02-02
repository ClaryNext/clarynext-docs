import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/getting-started/what-is-clarynext">
            Get Started
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            style={{marginLeft: '1rem'}}
            to="/features/activities/running-activities">
            Explore Features
          </Link>
        </div>
      </div>
    </header>
  );
}

type FeatureItem = {
  title: string;
  description: ReactNode;
  link: string;
  icon: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'For End Users',
    icon: '👤',
    description: (
      <>
        Run activities, track your progress, and build lasting habits. Access
        expert wisdom exactly when you need it.
      </>
    ),
    link: '/getting-started/first-activity',
  },
  {
    title: 'For Activity Authors',
    icon: '✏️',
    description: (
      <>
        Create interactive activities with our visual designer. Use AI to help
        generate content and reach users worldwide.
      </>
    ),
    link: '/authoring/designer-overview',
  },
  {
    title: 'For Experts & Mentors',
    icon: '🎯',
    description: (
      <>
        Scale your coaching practice. Support clients between sessions with
        guided activities and real-time collaboration.
      </>
    ),
    link: '/mentoring/expert-overview',
  },
  {
    title: 'For Vendors',
    icon: '💼',
    description: (
      <>
        Monetize your expertise in the marketplace. Sell activities, services,
        and programs to a global audience.
      </>
    ),
    link: '/selling/vendor-overview',
  },
  {
    title: 'For Administrators',
    icon: '⚙️',
    description: (
      <>
        Configure the platform for your organization. Manage users, set up teams,
        and track engagement across your company.
      </>
    ),
    link: '/administration/admin-overview',
  },
  {
    title: 'Use Cases',
    icon: '📚',
    description: (
      <>
        Explore how ClaryNext is used for coaching, corporate training, education,
        and habit building.
      </>
    ),
    link: '/use-cases/personal-coaching',
  },
];

function Feature({title, icon, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} className={styles.featureLink}>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>{icon}</div>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickLinks(): ReactNode {
  return (
    <section className={styles.quickLinks}>
      <div className="container">
        <Heading as="h2" className={styles.quickLinksTitle}>
          Popular Topics
        </Heading>
        <div className={styles.quickLinksGrid}>
          <Link to="/getting-started/what-is-clarynext" className={styles.quickLink}>
            What is ClaryNext?
          </Link>
          <Link to="/features/activities/activity-components" className={styles.quickLink}>
            Activity Components
          </Link>
          <Link to="/authoring/sketchbook-ai" className={styles.quickLink}>
            Sketchbook AI
          </Link>
          <Link to="/features/marketplace/browsing" className={styles.quickLink}>
            Browse Marketplace
          </Link>
          <Link to="/mentoring/mentor-sessions" className={styles.quickLink}>
            Mentor Sessions
          </Link>
          <Link to="/selling/pricing-credits" className={styles.quickLink}>
            Pricing & Credits
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Documentation Hub"
      description="Comprehensive documentation for ClaryNext - the Actionable Wisdom Exchange Platform">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <QuickLinks />
      </main>
    </Layout>
  );
}
