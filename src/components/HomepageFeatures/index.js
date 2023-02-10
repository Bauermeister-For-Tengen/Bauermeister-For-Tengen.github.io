import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

function Feature({ Svg, title, description, background }) {
  return (
    // h3 background depending on light/dark mode
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} style={{ background: background }}
          role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3
          style={{ background: "radial-gradient(var(--ifm-color-primary), transparent)" }}>
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default class HomepageFeatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FeatureList: [
        {
          title: "",
          Svg: require('@site/static/img/empty.svg').default,
          description: (
            <>
            </>
          ),
        },
        {
          title: "Lösungen",
          Svg: require('@site/static/img/logo.svg').default,
          background: "whitesmoke",
          description: (
            <>
              <li>Undogmatisch und unverzüglich</li>
              <li>Transparent und Bürgernah</li>
            </>
          ),
        },
        {
          title: "",
          Svg: require('@site/static/img/empty.svg').default,
          description: (
            <>
            </>
          ),
        },
      ]
    };
  }

  render() {
    return (
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {this.state.FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    )
  }
}