import React from 'react';
import styles from './Banner.scss';

const Banner = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Great results</h1>
        <h3>Every single time</h3>
      </div>
      <div className={styles.image}>
        <img src={require('./product-development.svg')} alt="Product development" />
      </div>
    </div>
  </section>
);

export default Banner;
