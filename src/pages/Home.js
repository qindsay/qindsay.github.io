import React from "react";
import "../styles.css"

import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Contact from '../components/Contact';

import headshot from '../assets/headshot.jpg';

const Home = () => {
    return (
        <>
        <NavBar />
        <div className="content">
            <div className="home-page">
                <div className="intro-text">
                    <h1 className="typed">Hi, I'm Lindsay!</h1>
                    <h2 className="fadein frame2">Welcome to my personal site.</h2>
                    <br></br>
                    <p className="fadein frame2">Right now, I'm a 3rd-year student at <a href="https://www.ucla.edu/" target="_blank" rel="noopener noreferrer">UCLA</a> majoring in Computer Science and minoring in Public Affairs.</p>
                    <br></br>
                    <p className="fadein frame2">I'm also a</p>
                    <ul className="fadein frame2">
                        <li>previous intern at <a href="https://www.aboutamazon.com/" target="_blank" rel="noopener noreferrer">Amazon</a> and 
                        <a href="https://www6.slac.stanford.edu/" target="_blank" rel="noopener noreferrer"> SLAC</a></li>
                        <li>DevOps Lead for <a href="https://apply.uclastudentmedia.com/" target="_blank" rel="noopener noreferrer">UCLA Student Media DevOps</a></li>
                        <li>and a bad joke enthusiast!</li>
                    </ul>
                    <br></br>
                    <p className="fadein frame2">While you're here, feel free to check out what I've been up to, from <Link to='/work'>professional projects</Link> to <Link to='/about'>personal passions</Link>.</p>
                </div>
                <img className="fadein" src={headshot} alt="Lindsay Qin professional headshot."></img>
            </div>
        </div>
        <Contact />
        </>
    )
}

export default Home;