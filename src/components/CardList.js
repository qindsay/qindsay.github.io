import React from "react";
import "../styles.css";

import Card from "./Card.js";

import crumb from '../assets/crumb_getit.jpg';
import sagespeech from '../assets/sagepresent.png';
import sci_logo from '../assets/sci.png';
import swipesmart_logo from '../assets/swipesmart.png';
import uclax_logo from '../assets/uclax.png';
import massature from '../assets/massature.png';

const CardList = () => {
    const projects = [
        {
            link: "https://github.com/qindsay/crumb-getit",
            title: "Crumb & Get It",
            imageUrl: crumb,
            imageAlt: "Crumb & Get It Logo",
            description: (
                <>
                Project for LAHacks 2025. My team and I built a cooking app that uses a webcam to identify the ingredients a user has in their 
                fridge and generates a recipe using those ingredients.
                </>
            ),
            tools: "React, Node.js, Gemini"
        },
        {
            link: "https://youtu.be/h7TSGzvew_c?si=mz9CpaHf_yLgddXk&t=2094",
            title: "SAGE-S Internship Talk",
            imageUrl: sagespeech,
            imageAlt: "Screenshot of YouTube video where Lindsay gives a speech.",
            description: (
                <>
                I gave a talk to high school girls about my work and impact at <a href="https://www6.slac.stanford.edu/" target="_blank" 
                rel="noopener noreferrer">SLAC National Accelerator Laboratory</a>, 
                as well as the opportunities that I explored thanks to the <a href="https://mysagejourney.org/" 
                target="_blank" rel="noopener noreferrer">SAGE</a> (Science Accelerating Girls' Engagement in STEM) program. 
                </>
            )
        },
        {
            link: "https://github.com/SidZal/SCI-Inertial-Navigation-Swarm",
            title: "SCI",
            imageUrl: sci_logo,
            imageAlt: "SCI Logo: a blue robotic arm against a white background.",
            description: (
                <>
                My work at the <a href="https://structures.computer/" target="_blank" rel="noopener noreferrer">
                UCLA Structures-Computer Interaction</a> lab, where I work on trajectory prediction with minibots.
                </>
            ),
            tools: "pyTorch, C++, Python, Arduino, OpenCV, ArUco, BluePy, Bleak, pySerial",
        }, 
        {
            link: "https://github.com/itswwong/SwipeSmart",
            title: "Swipe-Smart",
            imageUrl: swipesmart_logo,
            imageAlt: "Swipe Smart Logo: pastel cards coming out of a wallet.",
            description: (
                <>
                Development for Swipe-Smart (<a href="https://apps.apple.com/us/app/swipe-smart/id6680188654" target="_blank" 
                rel="noopener noreferrer">now on the App Store!</a>), an app that allows users to track credit card rewards.
                </>
            ),
            tools: "Swift, SwiftUI, Xcode",
        },
        {
            link: "https://github.com/ps-innovator/35L-Project",
            title: "UCLAX",
            imageUrl: uclax_logo,
            imageAlt: "UCLAX logo -- A plane flying around a blue circle.",
            description: "A client-server web app that helps UCLA students find other students to split rides to the airport with.",
            tools: "JavaScript, HTML, CSS, React, Node.js, MongoDB"
        },
        {
            link: "https://github.com/Anthonyled/Project-Rudd",
            title: "Massature",
            imageUrl: massature,
            imageAlt: "Image of gameplay from Massature. An icon attempts to climb up stairs that alternate between snails and coins.",
            description: (
                "A 2D platforming game where the player must grow and shrink to get to the end of the level."
            ),
            tools: "C#, Unity"
        },
    ]

    return (
        <div className="card-list">
            {projects.map((item, index) => (
                <Card key={index} link={item.link} title={item.title} imageUrl={item.imageUrl} imageAlt={item.imageAlt} description={item.description} tools={item.tools}/>
            )) }
        </div>
    );

}

export default CardList;
