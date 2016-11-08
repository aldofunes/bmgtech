import React from 'react';
import {Link} from 'react-router';
import FaHome from 'react-icons/lib/fa/home';
import FaInfo from 'react-icons/lib/fa/info';
import styles from './MobileMenu.scss';

const MobileMenu = ({onClick}) => (
  <nav className={styles.menu}>
    <Link
      className={styles.menuItem}
      to="/"
      onClick={onClick}
    >
      <FaHome /> Home
    </Link>
    <Link
      className={styles.menuItem}
      activeClassName={styles.activeMenuItem}
      to="/about"
      onClick={onClick}
    >
      <FaInfo /> About us
    </Link>
  </nav>
);

MobileMenu.propTypes = {
  onClick: React.PropTypes.func
};

export default MobileMenu;
