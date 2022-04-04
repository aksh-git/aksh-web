import React from 'react';
import { Link } from "react-router-dom";
import Logo from './Logo';
import '../css/navbar.css';

function Navbar(props) {

  let { aPath } = props;

  return (
    <>
      <div className='c-navbar'>
        <Logo logoColor={'#00a49e'} />
        <ul className="c-menu">
          <Link to="/"><li className={`${aPath==="/"?'active':' '} text-normal bold`} ><i className="fas fa-house-user"></i> <span className="nav-text">Home</span></li></Link>
          <Link to="/projects"><li className={`${aPath==="/projects"?'active':' '} text-normal bold`} ><i className="fas fa-file-code"></i> <span className="nav-text">Projects</span></li></Link>
          <Link to="/contact"><li className={`${aPath==="/contact"?'active':' '} text-normal bold`} ><i className="fas fa-at"></i> <span className="nav-text">Contact</span></li></Link>
          <Link to="/about"><li className={`${aPath==="/about"?'active':' '} text-normal bold`}><i className="fas fa-user-tie"></i> <span className="nav-text">About me</span></li></Link>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
