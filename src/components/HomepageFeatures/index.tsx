import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'How to Start?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
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
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        To participate in RoboCup Soccer Simulation 2D League, 
        you need to develop your team, prepare a team description paper (TDP), 
        submit it to the league committee.
      </>
    ),
    link: '/blog/HowToParticipate'
  },
  {
    title: 'What is Soccer Simulation?',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Soccer simulation 2D is a league in RoboCup that simulates 
        a soccer game in a 2D environment. 
        The game is played by two teams of twelve autonomous software agents.
      </>
    ),
    link: '/blog/SS2D'
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
