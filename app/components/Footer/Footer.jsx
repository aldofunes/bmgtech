import React from 'react';
import styles from './Footer.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.links}>
      Terms of use
    </div>
    <div className={styles.socialLinks}>
      social links
    </div>
    <div className={styles.copyright}>
      © - 2016 Beaming Technologies Ltd.
    </div>
  </footer>
);

export default Footer;
