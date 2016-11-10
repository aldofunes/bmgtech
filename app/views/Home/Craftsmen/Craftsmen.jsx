import React from 'react';
import {Link} from 'react-router';
import styles from './Craftsmen.scss';

const Craftsmen = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <h2 className={styles.header}>We are Craftsmen</h2>
      <div className={styles.image}>
        <img src={require('./program-coding.svg')} alt="We are craftsmen" />
      </div>
      <div className={styles.text}>
        <p>
          As such, we care about what we do. We refine every pixel, consider every line of code and
          deliver elegant applications for the Web, iOS and Android.
        </p>
        <p>
          We love getting involved with our customers and stay with them after we have delivered
          their
          product.
        </p>
        <p>
          <Link to="/apps" className={styles.callToAction}>Learn More</Link>
        </p>
      </div>
    </div>
  </section>
);

export default Craftsmen;
