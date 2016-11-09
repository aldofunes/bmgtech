import React from 'react';
import styles from './Creativity.scss';

const Creativity = () => (
  <section className={styles.container}>
    <div className={styles.text}>
      <h2>We harness our creativity to fulfill our mission</h2>
      <h3>We have one mission, that our customers achieve their goals</h3>
    </div>

    <img className={styles.image} src={require('./idea.svg')} alt="Creativity" />
  </section>
);

export default Creativity;
