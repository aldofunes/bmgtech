import React from 'react';
import styles from './Growth.scss';

const Growth = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.text}>
        <h4>
          Every entrepreneur, business or anybody selling products or services needs a website.
          Enabling potential customers through a Google search or learn more about you after they
          have seen other marketing material is key to creating new customers and develop existing
          ones. A purposeful website will help you grow.
        </h4>
      </div>
      <div className={styles.image}>
        <img src={require('./startup.svg')} alt="Success by design" />
      </div>
    </div>
  </section>
);

export default Growth;
