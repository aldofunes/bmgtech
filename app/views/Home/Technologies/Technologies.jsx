import React from 'react';
import styles from './Technologies.scss';

const Technologies = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <a className={styles.item} href="https://www.meteor.com/" target="_blank">
        <img src={require('./meteor-icon.svg')} alt="Meteor" />
      </a>
      <a className={styles.item} href="https://facebook.github.io/react/" target="_blank">
        <img src={require('./react.svg')} alt="React" />
      </a>
      <a className={styles.item} href="https://nodejs.org/" target="_blank">
        <img src={require('./nodejs-icon.svg')} alt="NodeJS" />
      </a>
      <a className={styles.item} href="https://www.mongodb.com/" target="_blank">
        <img src={require('./mongodb-icon.svg')} alt="MongoDB" />
      </a>
    </div>
  </section>
);

export default Technologies;