import React from 'react';
import styles from './Sites.scss';
import Banner from './Banner';
import Growth from './Growth';
import Care from './Care';
import RecentWork from './RecentWork';

const Sites = () => (
  <div className={styles.sites}>
    <Banner />
    <Growth />
    <section className={styles.partner}>
      <h2>You walk away with an amazing website and a true partner</h2>
    </section>
    <Care />
    <RecentWork />
  </div>
);

export default Sites;
