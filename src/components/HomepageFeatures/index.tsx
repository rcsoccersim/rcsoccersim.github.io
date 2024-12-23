import styles from './styles.module.css';
import News from './myblogs';
import React from 'react';
import FeatureList from './featureBlogs';


function MainPageText() {
  return (
    <div></div>
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
          <MainPageText />
          <div className="row">
            <FeatureList />
          </div>
        </div>

      </section>
    </div>

  );
}
