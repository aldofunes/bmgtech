import React from 'react';
import styles from './Home.scss';
import Banner from './Banner';
import Values from './Values';
import Craftsmen from './Craftsmen';
import Technologies from './Technologies';

class Home extends React.Component {
  componentDidMount() {
    _gs('track');
    _agile.track_page_view();
    _agile_execute_web_rules();
  }
  render() {
    return (
      <div className={styles.home}>
        <Banner />
        <Values />
        <Craftsmen />
        <Technologies />
      </div>
    );
  }
}

export default Home;
