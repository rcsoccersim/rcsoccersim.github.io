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
  {
    title: 'What is Soccer Simulation?',
    image: 'img/ss2d.png',
    description: (
      <>
        Soccer simulation 2D is a league in RoboCup that simulates
        a soccer game in a 2D environment.
        The game is played by two teams of twelve autonomous software agents.
      </>
    ),
    link: '/blog/SS2D'
  },
  {
    title: 'How to Start?',
    image: 'img/developping2d.png',
    description: (
      <>
        To start using Soccer Simulation 2D, you need to install the server
        and Start developing your own team from scratch or use the existing ones.
      </>
    ),
    link: '/blog/HowToStart'
  },
  {
    title: 'How to Participate?',
    image: 'img/ss2drobocup.png',
    description: (
      <>
        To participate in RoboCup Soccer Simulation 2D League,
        you need to develop your team, prepare a team description paper (TDP),
        submit it to the league committee.
      </>
    ),
    link: '/blog/HowToParticipate'
  },
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
