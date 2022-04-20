import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx(
              'button button--secondary button--lg',
              styles.buttons,
            )}
            to={useBaseUrl('/docs/category/hvordan-kryptoe')}>
            Kom i gang!
          </Link>
          <Link
            to="/docs/konsepter/introduksjon"
            className={clsx(
              'button button--secondary button--lg',
              styles.buttons,
            )}
          >Konsepter</Link>
          <Link
            to="/blog"
            className={clsx(
              'button button--secondary button--lg',
              styles.buttons,
            )}
          >Hva skjer?</Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Kryptosiden ${siteConfig.title}`}
      description="Siden for deg som vil lære om krypto <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
