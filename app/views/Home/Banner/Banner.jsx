import React from 'react';
import styles from './Banner.scss';

const Banner = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Blending art with technology</h1>
        <h3>Beautiful and functional web applications and sites</h3>
      </div>

      <div className={styles.image}>
        <img src={require('./design-studio.svg')} alt="Design Studio" />
      </div>
    </div>
  </section>
);

export default Banner;
