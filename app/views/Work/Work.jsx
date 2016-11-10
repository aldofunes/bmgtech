import React from 'react';
import styles from './Work.scss';
import Banner from './Banner';
import Process from './Process';
import Project from './Project';
import Agile from './Agile';
import ContinuousDelivery from './ContinuousDelivery';

const Work = () => (
  <div className={styles.view}>
    <Banner />
    <Process />
    <Project />
    <Agile />
    <ContinuousDelivery />
  </div>
);

export default Work;
