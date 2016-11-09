import React from 'react';
import styles from './About.scss';
import Banner from './Banner';
import Creativity from './Creativity';
import Solution from './Solution';

const About = () => (
  <div className={styles.about}>
    <Banner />
    <Creativity />
    <section className={styles.projects}>
      We thrive on challenging projects
    </section>
    <Solution />
  </div>
);

export default About;
