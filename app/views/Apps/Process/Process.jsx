import React from 'react';
import styles from './Process.scss';

const Process = () => (
  <section className={styles.section}>
    <h3 className={styles.text1}>
      Our proven process along with engineering and design standards allow us to build elegant,
      scalable solutions for complex problems
    </h3>
    <img className={styles.image} src={require('./app-development.svg')} alt="App development" />
    <h4 className={styles.text2}>
      We deliver solutions for the real world. That means that every application will work natively
      on the browser, iOS or Android. That means all your users will benefit from our unified
      development process
    </h4>
  </section>
);

export default Process;
