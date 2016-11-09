import React from 'react';
import styles from './RecentWork.scss';

const RecentWork = () => (
  <section className={styles.section}>
    <div className={styles.text}>
      <h2>Recent work</h2>
    </div>
    <div className={styles.card}>
      <a href="https://www.addist.mx" target="_blank">
        <img src={require('./www.addist.mx.png')} alt="Grupo ADDIST SA de CV" />
        <p>www.addist.mx</p>
      </a>
    </div>

    <div className={styles.card}>
      <a href="https://www.loviseos.com" target="_blank">
        <img src={require('./www.loviseos.com.png')} alt="LOVIS EOS" />
        <p>www.loviseos.com</p>
      </a>
    </div>
  </section>
);

export default RecentWork;
