import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// For linking don't use a tags b/c state will be erased. used Link instead

const Navbar = (props: any) => {
    // const Navbar = ({icon, title}) => {
const [clicked, setClicked] = useState<boolean>(false)
const [bodyColor, setColor] = useState<string>('#e9a2e9')

function isClicked(clickedColor: String){
  setClicked(true)
  props.changeColor(clickedColor)
  // console.log("is clicked?", clicked)
}

    return (
      <div className='navbar bg-primary'>
          <h6>Google's Associate Cloud Certification Quiz</h6>
        <ul>
        <li>
          <Link to='/' onClick={() => isClicked('#e9a2e9')}>Home</Link>
        </li>
        <li>
          <Link to='/resources'  onClick={() => isClicked('#090935')}>Resources</Link>
        </li>
        </ul>
      </div>
      // </div>
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