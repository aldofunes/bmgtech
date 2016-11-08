import React from 'react';
import {Link} from 'react-router';
import styles from './Footer.scss';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square'
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square'
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square'
import FaGooglePlusSquare from 'react-icons/lib/fa/google-plus-square'
import FaEnvelopeSquare from 'react-icons/lib/fa/envelope-square'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.links}>
      <Link to="privacy">Privacy Policy</Link>
    </div>
    <div className={styles.socialLinks}>
      <Link to="https://www.facebook.com/BeamingTech">
        <FaFacebookSquare />
      </Link>
      <Link to="https://www.linkedin.com/company/beaming-technologies-ltd.">
        <FaLinkedinSquare />
      </Link>
      <Link to="https://twitter.com/BeamingTech">
        <FaTwitterSquare />
      </Link>
      <Link to="https://plus.google.com/+BmgtechIo">
        <FaGooglePlusSquare />
      </Link>
      <Link to="mailto:hello@bmgtech.io">
        <FaEnvelopeSquare />
      </Link>
    </div>
    <div className={styles.copyright}>
      © {new Date().getFullYear()} Beaming Technologies Ltd.
    </div>
  </footer>
);

export default Footer;
