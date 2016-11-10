import React from 'react';
import styles from './Banner.scss';

const Banner = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Beaming Technologies Ltd</h1>
        <h3>Very close to you</h3>
      </div>
      <div className={styles.image}>
        <img src={require('./contact.svg')} alt="Get in touch" />
      </div>
    </div>
  </section>
);

export default Banner;
