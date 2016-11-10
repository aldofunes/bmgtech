import React from 'react';
import styles from './Work.scss';
import Banner from './Banner';
import Process from './Process';
import Project from './Project';
import Agile from './Agile';
import ContinuousDelivery from './ContinuousDelivery';

class Work extends React.Component {
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
        <Project />
        <Agile />
        <ContinuousDelivery />
      </div>
    );
  }
}

export default Work;
