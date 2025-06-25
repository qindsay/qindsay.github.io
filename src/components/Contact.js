import React from 'react';
import "../styles.css";

import email from '../assets/email.png';
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

const Contact = () => {
    return (
        <>
            <div className="contact">
                <div className="flavor">
                    <p>If you have any suggestions, are simply too intrigued, or <a href="https://www.nytimes.com/puzzles/leaderboards/invite/3c4c0dd1-e7f6-4396-b31b-902a1705e79e" target="_blank" 
                rel="noopener noreferrer">need a new competitor</a> on your NYT mini leaderboard, you're in the right place.</p>
                    <h2>get in touch &#10230;</h2>
                </div>
                <div className="info">
                    <h1>CONTACT</h1>
                    <div className="contactList">
                        <div className="item">
                            <img src={email} alt="email icon"></img>
                            <a href= "mailto:lindsaymqin@gmail.com">lindsaymqin@gmail.com</a>
                        </div>
                        <div className="item">
                            <img src={linkedin} alt="linkedin logo"></img>
                            <a href="https://www.linkedin.com/in/qindsay" target="_blank" rel="noopener noreferrer">linkedin.com/in/qindsay</a>
                        </div>
                        <div className="item">
                            <img src={github} alt="github logo"></img>
                            <a href="https://github.com/qindsay" target="_blank" rel="noopener noreferrer">github.com/qindsay</a>
                        </div>
                    </div>
                </div>

            </div>
            <h3>&copy; Lindsay Qin 2025</h3>
        </>
    )
}

export default Contact;