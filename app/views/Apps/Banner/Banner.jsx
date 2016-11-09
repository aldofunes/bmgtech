import React from 'react';
import styles from './Banner.scss';

const Banner = () => (
  <section className={styles.section}>
    <div className={styles.text}>
      <h1>Apps for the future</h1>
      <h3>Elegant solutions to simplify tasks</h3>
    </div>
    <img
      className={styles.image}
      src={require('./web-design-development.svg')}
      alt="We build apps"
    />
  </section>
);

export default Banner;
