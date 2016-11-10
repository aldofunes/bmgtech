import React from 'react';
import styles from './About.scss';
import Banner from './Banner';
import Creativity from './Creativity';
import Solution from './Solution';

class About extends React.Component {
  componentDidMount() {
    _gs('track');
    _agile.track_page_view();
    _agile_execute_web_rules();
  }

  render() {
    return (
      <div className={styles.about}>
        <Banner />
        <Creativity />
        <section className={styles.projects}>
          We thrive on challenging projects
        </section>
        <Solution />
      </div>
    );
  }
}

export default About;
