import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import News from './myblogs';
import React from 'react';


type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
  link?: string;
};

const FeatureList: FeatureItem[] = [
  
];

function Feature({ title, image, description, link }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} alt={title} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <a href={link}><Heading as="h3">{title}</Heading></a>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <div className='homeMainSection'>
      <div className='newsContainer'>
        <div className="rowNews">
          <News />
        </div>
      </div>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>

      </section>
    </div>

  );
}
