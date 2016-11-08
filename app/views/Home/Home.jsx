import React from 'react';
import styles from './Home.scss';
import Banner from './Banner';
import Values from './Values';
import Craftsmen from './Craftsmen';
import Technologies from './Technologies';

const Home = () => (
  <div className={styles.home}>
    <Banner />
    <Values />
    <Craftsmen />
    <Technologies />
  </div>
);

export default Home;
