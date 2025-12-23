import React from 'react';
import { useState } from 'react';
import "../styles.css";

import { Link } from 'react-router-dom'

import logo from '../assets/lindsay-logo.png'

function Hamburger() {
  return (
    <>
      <div className="hamburger">
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </>
  )
}

const NavBar = () => {  
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  }

  return (
    <>
     <nav>
      <Link to='/'>
             <img
             src={logo}
             alt='A cartoon girl with a green LQ behind her.'/></Link>
      <div className="navbar-container">
         <ul>
           <li><Link to='/about'>About</Link></li>
           <li><Link to='/work'>Work</Link></li>
           <li><a href="https://drive.google.com/file/d/1d2WlIiIanfTrSr8xim9n3O1YWLvVWoC3/view?usp=sharing" target="_blank" 
                rel="noopener noreferrer">Resume</a></li>
         </ul>
       </div>
       <div className="hamburger" onClick={toggleHamburger}>
        < Hamburger />
       </div>
     </nav>
    <div className={`nav-links ${hamburgerOpen ? 'open' : ''}`}>
          <ul>  
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/work'>Work</Link></li>
            <li><a href="https://drive.google.com/file/d/1d2WlIiIanfTrSr8xim9n3O1YWLvVWoC3/view?usp=sharing" target="_blank" 
                  rel="noopener noreferrer">Resume</a></li>
          </ul>
    </div>
    </>
    
  );
};


export default NavBar;

    

