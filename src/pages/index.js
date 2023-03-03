import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={clsx("row", styles.buttons)}>
          <div className="col">
            <Link
              className="button button--secondary button--lg button--block col--2 col--offset-1 shadow--md"
              to="/docs/category/plattform">
              Plattform
            </Link>
          </div>
          <div className="col">
            <Link
              className="button button--secondary button--lg button--block col--2 col--offset-1 shadow--md"
              to="/blog">
              Neuigkeiten
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Willkommen auf der Webseite von ${siteConfig.title}`}
      description="Hier schreibt Team Bauermeister">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
