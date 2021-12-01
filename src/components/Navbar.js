import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = ({title}) => {
  return (
    <nav className="navbar  bg-primary">
    <h1>
      {title}
    </h1>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/Calculator'>Calculator</Link>
      </li>
      <li>
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