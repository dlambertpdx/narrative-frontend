import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => (
  <header className={styles.Header}>
    <Link to='/stories'>Return to Dashboard</Link>
  </header>
);

export default Header;