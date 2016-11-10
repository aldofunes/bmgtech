import React from 'react';
import styles from './Agile.scss';

const Agile = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <h2>How we do it</h2>
      <div className={styles.text}>
        <p>
          Building software the right way requires care and attention. Every client is unique and
          has different requirements. Our methodology allows us to deliver high quality software
          quickly. This way, we reduce risks and improve success.
        </p>
        <p>
          We will work with you to establish short-term and long-term goals and break them down form
          the end-user perspective into small actionable items called User Stories. Every User Story
          is a benefit for the user, but some are more important than others. We are not building a
          simple bundle of features, but a product designed to help a user or a business achieve
          their objectives.
        </p>
      </div>
      <div className={styles.image}>
        <img src={require('./development.svg')} alt="Innovation research" />
      </div>
    </div>
  </section>
);

export default Agile;
