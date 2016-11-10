import React from 'react';
import styles from './Apps.scss';
import Banner from './Banner';
import Process from './Process';
import Feedback from './Feedback';

class Apps extends React.Component {
  componentDidMount() {
    _gs('track');
    _agile.track_page_view();
    _agile_execute_web_rules();
  }

  render() {
    return (
      <div className={styles.view}>
        <Banner />
        <Process />
        <Feedback />
      </div>
    );
  }
}

export default Apps
