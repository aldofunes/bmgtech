import React from 'react';
import styles from './Banner.scss';

const Banner = () => (
  <section className={styles.section}>
    <div className={styles.text}>
      <h1>Websites for successful enterprises</h1>
      <h3>Free websites with a success-based fee</h3>
    </div>
    <div className={styles.image}>
      <img src={require('./web-design.svg')} alt="Success by design" />
    </div>
  </section>
);

export default Banner;
