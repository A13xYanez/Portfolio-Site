import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import transition from '../global/transitions/Transition'
import './About.css'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

import { motion } from 'framer-motion';

const About = () => {
    const about = useRef(null);
    const work = useRef(null);
    const education = useRef(null);
    const skills = useRef(null);

    // Container Lighting Effect
    useEffect(() => {
        // Target Containers Referenced
        const aboutTarget = about.current;
        aboutTarget.onmousemove = e => handleOnMouseMove(e);
        const workTarget = work.current;
        workTarget.onmousemove = e => handleOnMouseMove(e);
        const educationTarget = education.current;
        educationTarget.onmousemove = e => handleOnMouseMove(e);
        const skillsTarget = skills.current;
        skillsTarget.onmousemove = e => handleOnMouseMove(e);

        // Tracking Function
        const handleOnMouseMove = e => {
            const { currentTarget: target } = e;

            const rect = target.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            target.style.setProperty("--mouse-x", `${x}px`);
            target.style.setProperty("--mouse-y", `${y}px`);
        }
    }, []);

    const [isDisplayed, setIsDisplayed] = useState(true);
    return (
        <div className="contain-about">
            <div className="work-experience" ref={work}>
                <h2>Experience</h2>
                <ul className="work-experience--list">
                    <Link to='https://unifoodie.xyz/'>
                        <li className='work-experience--list-item'>
                            <img src="" alt="unifoodi company logo" /> 
                            <div className='group-work-info'>
                                <div className="company-info">
                                    <p>UNiFOODi</p>
                                    <p className='info-seperator'>|</p>
                                    <p style={{color: "#929292"}}>Full-Stack Developer</p>
                                </div>
                                <div className="working-dates">
                                    <div className='blinking-light blue-light'>
                                        <div />
                                    </div>
                                    <p style={{color: "#929292"}}>Feb 2025 - Present</p>
                                </div>
                            </div>
                        </li>
                    </Link>
                    <Link to='https://vista.ucmerced.edu/'>
                        <li className='work-experience--list-item'>
                            <img src="" alt="unifoodi company logo" /> 
                            <div className='group-work-info'>
                                <div className="company-info">
                                    <p>VISTA</p>
                                    <p className='info-seperator'>|</p>
                                    <p style={{color: "#929292"}}>Web Developer</p>
                                </div>
                                <div className="working-dates">
                                    <div className='blinking-light blue-light'>
                                        <div />
                                    </div>
                                    <p style={{color: "#929292"}}>Jan 2025 - Present</p>
                                </div>
                            </div>
                        </li>
                    </Link>
                    <Link to='https://www.bayvalleytech.com/'>
                        <li className='work-experience--list-item'>
                            <img src="" alt="unifoodi company logo" /> 
                            <div className='group-work-info'>
                                <div className="company-info">
                                    <p>Bay Valley Tech</p>
                                    <p className='info-seperator'>|</p>
                                    <p style={{color: "#929292"}}>Full-Stack Developer</p>
                                </div>
                                <div className="working-dates">
                                    <div className='blinking-light green-light'>
                                        <div />
                                    </div>
                                    <p style={{color: "#929292"}}>Mar 2024 - Aug 2024</p>
                                </div>
                            </div>
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="about" ref={about}>
                <h3>Hey There, I'm Alex...</h3>
                <p className='about-roles'>Full-Stack Developer & Software Engineer.</p>
                <p className='about-details'>
                    I create beautiful web and mobile apps with a lot of attention to detail.
                </p>
                <div className="about-socials">
                    <Link to='https://www.linkedin.com/in/a13x-yanez/'><FaLinkedin className='about-social-icon' /></Link>
                    <Link to='https://github.com/A13xYanez'><FaGithub className='about-social-icon' /></Link>
                </div>
                <div className="about-name">
                    <div className="first-name">
                        <p className='first-layer'>Alex</p>
                        <p className='second-layer'>Alex</p>
                        <p className='third-layer'>Alex</p>
                    </div>
                    <div className="last-name">
                        <p className='first-layer'>Yanez</p>
                        <p className='second-layer'>Yanez</p>
                        <p className='third-layer'>Yanez</p>
                    </div>
                </div>
                <p className='about-details'>
                    From making my first program on Code.org when I was 11 y/o to working on exciting and challenging projects,
                    I have come a long way and can't wait for what the future holds for me.
                </p>
            </div>
            <div className="education" ref={education}>
                <motion.div 
                initial={{opacity: 1}} 
                animate={!isDisplayed ? {opacity: 0, display: "none", transition: {duration: 1}} : {opacity: 1, display: "block", transition: {duration: 1, delay: 1}}}
                className='display-university'
                >
                    <Link to='https://www.ucmerced.edu/'>
                        <div className="university-img">
                            <img src="" alt="" />
                        </div>
                    </Link>
                    <p className='university-info'>Degree :</p>
                    <p className='university-info'>Computer Science & Engineering</p>
                    <button className='btn-certs' onClick={() => setIsDisplayed(false)}>View Courses</button>
                </motion.div>
                <motion.div 
                initial={{opacity: 0 , display: "none"}} 
                animate={!isDisplayed ? {opacity: 1, display: "block", transition: {duration: 1, delay: 1}} : {opacity: 0, display: "none", transition: {duration: 1}}} 
                className="display-courses">
                    <div className="courses-exit" onClick={() => setIsDisplayed(true)}>
                        <FaAngleLeft className='courses-back-arrow' />
                        <p>Back</p>
                    </div>
                    <ul className="course-list">
                        <p>Completed:</p>
                        <li>Intro to Programming</li>
                        <li>Advanced Programming</li>
                        <li>Data Structures</li>
                        <li>Computer Organization and Assembely Language</li>
                        <p>Planned:</p>
                        <li>Algorithm Design and Analysis</li>
                        <li>Software Engineering</li>
                    </ul>
                </motion.div>
            </div>
            <div className="skills" ref={skills}>
                <h2>Skills</h2>
                <div className="skill-items">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                </div>
                <p>
                    Visit my projects section to see the full list of skills
                    and the work done with these skills.
                </p>
            </div>
        </div>
    );
};

export default transition(About);