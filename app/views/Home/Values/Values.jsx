import React from 'react';
import styles from './Values.scss';

const Values = () => (
  <section className={styles.container}>
    <h2 className={styles.header}>We love what we do</h2>
    <h3 className={styles.subheader}>
      The web is our passion and we want it to become a better place
    </h3>
    <div className={styles.values}>
      <div className={styles.value}>
        <img src={require('./banners.svg')} alt="Design" />
        <h3>Design</h3>
        <p>We want the internet to become as friendly and intuitive as possible.</p>
      </div>
      <div className={styles.value}>
        <img src={require('./handshake.svg')} alt="Design" />
        <h3>Happiness</h3>
        <p>We bring happiness to the world by focusing on the user experience.</p>
      </div>
      <div className={styles.value}>
        <img src={require('./seo.svg')} alt="Design" />
        <h3>Efficiency</h3>
        <p>Our efficient products let consumers spend more time with their loved ones.</p>
      </div>
    </div>
  </section>
);

export default Values;
