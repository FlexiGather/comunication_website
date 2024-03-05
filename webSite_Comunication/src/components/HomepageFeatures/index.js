import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/src/images/first.svg').default,
    description: (
      <>
        FlexiGather is a collection of several simple interfaces that together
        create an integrated event management system.
        The different interfaces must be used by the right staff or participants.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/src/images/puzzle.svg').default,
    description: (
      <>
        FlexiGather allows you to create the event of your choice and fullfil your expectations.
        Want a sport competition? Do you want a scouts event? We will created the perfect platform for you!
      </>
    ),
  },
  {
    title: 'Health and Safety',
    Svg: require('@site/src/images/third.svg').default,
    description: (
      <>
        Our system will promote the safety and well-being of participants and staff since we use a medical zone
        and record everything that happens inside the event (entrances and exits, medical emergencies, ...).
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
