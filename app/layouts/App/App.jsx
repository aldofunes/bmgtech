import React from 'react';
import styles from './App.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CookieConsent from '../../components/CookieConsent';

const App = ({ children }) => (
  <div className={styles.app}>
    <Header />
    <div className={styles.main}>{children}</div>
    <Footer />

    <CookieConsent />
  </div>
);

App.propTypes = {
  children: React.PropTypes.node.isRequired
};

export default App;
