import React from 'react';
import styles from './Home.scss';
import Banner from './Banner';
import Values from './Values';
import Craftsmen from './Craftsmen';

const Home = () => (
  <div className={styles.home}>
    <Banner />
    <Values />
    <Craftsmen />
  </div>
);

export default Home;
