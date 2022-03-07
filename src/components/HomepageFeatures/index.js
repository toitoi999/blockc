import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Crypto vs krypto',
    Svg: require('@site/static/img/blocks.svg').default,
    description: (
      <>
        For deg som har lurt på hva de forskjellige ordene du hører og leser om betyr..
      </>
    ),
  },
  {
    title: 'Web3?',
    Svg: require('@site/static/img/maker_launch.svg').default,
    description: (
      <>
        Det du trenger for å bevege deg rundt i kryptouniverset og bli en del av Web3.
      </>
    ),
  },
  {
    title: 'Det som rører seg',
    Svg: require('@site/static/img/ether.svg').default,
    description: (
      <>
        Les om hva som rører seg i kryptouniverset.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
