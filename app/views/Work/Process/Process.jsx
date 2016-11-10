import React from 'react';
import styles from './Process.scss';

const Process = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.text}>
        <h3>
          We genuinely care about your success. We will offer feedback and challenge your
          assumptions to improve your product. We will become your partners, letting you take the
          best decisions along the way. This is how we ensure you get the right product.
        </h3>
      </div>
      <div className={styles.image}>
        <img src={require('./innovation-research.svg')} alt="Innovation research" />
      </div>
    </div>
  </section>
);

export default Process;
