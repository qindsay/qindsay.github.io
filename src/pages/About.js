import React from "react";
import "../styles.css"

import NavBar from '../components/NavBar';
import Contact from '../components/Contact';

import joshuatree from '../assets/joshuatree.jpg'

const About = () => {
    return (
        <>
        <NavBar />
        <div className="content">
            <div className="about-page">
                <img src={joshuatree} alt="Lindsay standing next to a joshua tree."></img>
                <div className="about-text">
                    <h2>Hi, I'm Lindsay!</h2>
                    <br></br>
                    <p>I'm a fourth-year student at <a href="https://www.ucla.edu/" target="_blank" rel="noopener noreferrer">UCLA</a> majoring in Computer Science and minoring in Public Affairs.</p>
                    <ul>
                        <li>I serve as president for <a href="https://upe.seas.ucla.edu/" target="_blank" rel="noopener noreferrer">Upsilon Pi Epsilon</a>, where I partner with the UCLA Computer Science department to enrich students’ professional and academic experiences by organizing socials, recruiting opportunities, and weekly drop-in tutoring for UCLA’s computer science communityand organize socials and retreats for UCLA's computer science community.</li>
                    </ul>
                    <br></br>
                    <p>In the past,</p>
                    <ul>
                        <li>I interned at Amazon, where I enabled a new feature (<a href="https://www.help.cbp.gov/s/article/Article1843?language=en_US" target="_blank" rel="noopener noreferrer">immediate delivery</a>) and revamped existing workflow in the <a href="https://inlt.com/" target="_blank" rel="noopener noreferrer">INLT customs brokerage service</a>.</li>
                        <li>I also interned at SLAC, where I <a href="https://youtu.be/h7TSGzvew_c?si=mz9CpaHf_yLgddXk&t=2094" target="_blank" rel="noopener noreferrer">
                        develped data processing and automation scripts</a> for x-ray crystallography research.</li>
                        <li>I was an undergrad researcher at the Structures Computer Interaction Lab, where I 
                            <a href="https://github.com/SidZal/SCI-Inertial-Navigation-Swarm" target="_blank" rel="noopener noreferrer"> worked with 
                            OpenCV, Arduino robots, and pyTorch</a> to research robot trajectory prediction.</li>
                        <li> I was a DevOps Lead for <a href="https://apply.uclastudentmedia.com/" target="_blank" rel="noopener noreferrer">UCLA Student Media DevOps</a>, 
                            where I contributed to developing the application website for aspiring UCLA Student Media members.</li>
                        <li>I was a CS Welcome Day speaker for incoming computer science students at UCLA, where I spoke about my experiences at school and during recruiting.</li>
                        <li>I led a robotics team and worked with the district superintendent and board of trustees to <a href="https://www.fuhsd.org/uploaded/2023.10.17_FUHSD_Robotics_RFQ_Information_Meeting_Presentation.pdf" 
                        arget="_blank" rel="noopener noreferrer">build a robotics facility</a> in our school district.</li>
                    </ul>
                    <br></br>
                    <p>Outside of computer science, you can find me <a href="https://www.instagram.com/qinspo.dream/" target="_blank" 
                    rel="noopener noreferrer">creating art</a>, crosswording, crocheting, cafe-hopping, 
                    making bad puns, and/or hanging out with friends.</p>
                </div>
                
            </div>
        </div>
        <Contact />
        </>
    )
}

export default About;