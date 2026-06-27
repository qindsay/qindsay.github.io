import React from 'react';
import "../styles.css";

import email from '../assets/email.png';
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

const Contact = () => {
    return (
        <div className="contact-footer">
            <div className="contact">
                <div className="info">
                    <h1>contact &#8674;</h1>
                    <div className="contactList">
                        <a href="mailto:lindsaymqin@gmail.com" className="contactCard">
                            <img src={email} alt="email icon" />
                            <span>lindsaymqin@gmail.com</span>
                        </a>
                        <a href="https://www.linkedin.com/in/qindsay" target="_blank" rel="noopener noreferrer" className="contactCard">
                            <img src={linkedin} alt="linkedin logo" />
                            <span>linkedin.com/in/qindsay</span>
                        </a>
                        <a href="https://github.com/qindsay" target="_blank" rel="noopener noreferrer" className="contactCard">
                            <img src={github} alt="github logo" />
                            <span>github.com/qindsay</span>
                        </a>
                    </div>
                </div>
            </div>
            <h3>&copy; Lindsay Qin 2026</h3>
        </div>
    )
}

export default Contact;