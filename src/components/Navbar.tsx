import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// For linking don't use a tags b/c state will be erased. used Link instead

const Navbar = () => {
    // const Navbar = ({icon, title}) => {
    return (
      <div className='navbar bg-primary'>
        {/* <h1> <i className={icon}/>{title}</h1> */}
        <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/resources'>Resources</Link>
        </li>
        </ul>
      </div>
    )
}

//   Navbar.defaultProps = {
//     title: 'Github Finder',
//     icon: 'fab fa-github'
//   };
  
//   Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired
//   }

export default Navbar