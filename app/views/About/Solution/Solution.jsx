import React from 'react';
import styles from './Solution.scss';

const Solution = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>The right tools, the right solution</h3>
        <hr />
        <h4>
          We use great tools that help us develop the best solutions faster and more reliable than
          ever.
        </h4>
      </div>

      <div className={styles.items}>
        <div className={styles.item}>
          <img src={require('./viral-marketing.svg')} alt="Vector images" />
          <h4>Beautiful images</h4>
          <p>
            Images tell a story, share a feeling and reveal more information to your viewer
          </p>
        </div>
        <div className={styles.item}>
          <img src={require('./pinpoint.svg')} alt="Great experiences" />
          <h4>Intuitive design</h4>
          <p>
            Users expect an intuitive interfaces, something ready to use and easy to access
          </p>
        </div>
        <div className={styles.item}>
          <img src={require('./messaging.svg')} alt="Mobile-first" />
          <h4>Responsive UX</h4>
          <p>
            No matter the screen size, your content will look amazing and feel native
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Solution;
