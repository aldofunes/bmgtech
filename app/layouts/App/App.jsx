import React from 'react';
import styles from './App.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CookieConsent from '../../components/CookieConsent';

class App extends React.Component {
  componentDidMount() {
    _agile.set_account('8mhppleoq763dcsgpirdfuba4i', 'bmgtech');

    _gs('GSN-491359-H', false);
    _gs('set', 'trackLocal', false);
  }

  render() {
    const { children } = this.props;

    return (
      <div className={styles.app}>
        <Header />
        <div className={styles.main}>{children}</div>
        <Footer />

        <CookieConsent />
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node.isRequired
};

export default App;
