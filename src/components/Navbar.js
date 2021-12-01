import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <h2 className={styles.text}>
      Math Magicians
    </h2>
    <ul className={styles.ul}>
      <li className={styles.text}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.text}>
        <Link to="/Calculator">Calculator</Link>
      </li>
      <li className={styles.text}>
        <Link to="/Quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
