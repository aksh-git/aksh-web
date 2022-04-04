import React, { useState } from 'react'
import { Link } from "react-router-dom";
import '../css/bottomNav.css'

function BottomNav(props) {

    const [navbar, setnavbar] = useState(false);
    let { aPath } = props;
  
  return (
    <>
      <div className='bottom-nav-container'>
        <div className='bottom-nav-inside'>
          <Link to="/"><div className={`${aPath==="/"?'bactive':' '} text-normal bold`} ><i className="fas fa-house-user"></i></div></Link>
          <Link to="/projects"><div className={`${aPath==="/projects"?'bactive':' '} text-normal bold`} ><i className="fas fa-file-code"></i></div></Link>
          <Link to="/contact"><div className={`${aPath==="/contact"?'bactive':' '} text-normal bold`} ><i className="fas fa-at"></i></div></Link>
          <Link to="/about"><div className={`${aPath==="/about"?'bactive':' '} text-normal bold`}><i className="fas fa-user-tie"></i></div></Link>
        </div>
      </div>
    </>
  )
}

export default BottomNav