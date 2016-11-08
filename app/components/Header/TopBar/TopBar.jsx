import React from 'react';
import styles from './TopBar.scss';
import FaBars from 'react-icons/lib/fa/bars';

const TopBar = ({ onToggle }) => (
  <div className={styles.topBar}>
    <img className={styles.logo} src={require('./logo.svg')} alt="BMG Tech" />
    <button className={styles.toggleButton} onClick={onToggle}>
      <FaBars height="2em" width="2em" />
    </button>
  </div>
);

TopBar.propTypes = {
  onToggle: React.PropTypes.func.isRequired
};

export default TopBar;
