import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css';

const Navbar = ({ title }) => {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.text}>
        {title}
      </h2>
      <ul className={styles.ul}>
        <li className={styles.text}>
          <Link to='/'>Home</Link>
        </li>
        <li className={styles.text}>
          <Link to='/Calculator'>Calculator</Link>
        </li>
        <li className={styles.text}>
          <Link to='/Quote'>Quote</Link>
        </li>
      </ul>
    </nav>
  );
}
 Navbar.defaultProps={
  title:'Math Magicians',
};

export default Navbar