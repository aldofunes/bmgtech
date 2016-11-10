import React from 'react';
import styles from './ContinuousDelivery.scss';

const ContinuousDelivery = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <h2>Continuous Delivery</h2>
      <div className={styles.text}>
        <h5>
          User Stories are delivered for your review every two or three weeks. This way you can see
          how your software takes form. Every time a User Story is released, you will be in a better
          position to decide what to do next and we will change our priorities accordingly. We build
          the minimum required to test and validate ideas, then incorporate feedback into further
          iterations. We will build, test, learn, repeat. That is the Agile way.
        </h5>
      </div>
      <div className={styles.image}>
        <img src={require('./process.svg')} alt="Innovation research" />
      </div>
    </div>
  </section>
);

export default ContinuousDelivery;
