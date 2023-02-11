import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx(styles.container)}>
        <h1 className="hero__title" style={{fontFamily: "initial-serif"}}>{siteConfig.title}</h1>
        <h3 className="hero__title" style={{fontFamily: "initial"}}>{"a front-end developer"}</h3>
        <h3 className="hero__subtitle" style={{fontFamily: "initial"}}>{siteConfig.tagline}</h3>
        <div className={styles.button}>
          <Link
          style={{width: "auto", backgroundColor: 'whitesmoke', borderRadius: 15}}
            className="button button--secondary button--lg"
            to="/blog">
            ✨ click to explore my technical insights ✨
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from Bailing`}
      description="Description will go into a meta tag in <head />">
     
      <main> 
        <HomepageHeader/>
      </main>
    </Layout>
  );
}
