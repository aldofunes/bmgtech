import React from 'react';
import styles from './Form.scss';
import ContactForm from '../../../components/ContactForm';

const Form = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.text}>
        <h2> We want to meet you</h2>
        <h3>
          Get in touch with us and tell us what you need. We will help you achieve your goals.
        </h3>
      </div>
      <div className={styles.form}>
        <ContactForm />
      </div>
    </div>
  </section>
);

export default Form;
