import React from 'react';
import styles from './Care.scss';

const Care = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>We really care about your success</h2>
      </div>
      <div className={styles.image}>
        <img src={require('./analytics-research.svg')} alt="Fee based on analytics" />
      </div>
      <div className={styles.text1}>
        <h3>
          To prove that, <strong>your website will be free</strong>. We set a fee based on how many
          visitors or conversions you have
        </h3>
      </div>
      <div className={styles.text2}>
        <h5>
          This means that there is no payment for the development. We do all the work and ensure
          your
          website attracts more customers. We analyze the traffic flow, how users interact and with
          this data, determine how much to charge you on that month. As the only way we earn money
          is
          by developing really successful websites, you get a powerful asset, and a true partner.
        </h5>
      </div>
      <div className={styles.text3}>
        <h3>
          If you want ownership of the base code or simply want traditional pricing options, we
          offer
          different payment plans to suit your needs.
        </h3>
      </div>
    </div>

  </section>
);

export default Care;
