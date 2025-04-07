import React from 'react';
import { useState } from 'react';
import { easeInOut, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import './Landing.css';

import { IoMenu } from "react-icons/io5";
import { VscBriefcase } from "react-icons/vsc";
import { VscBook } from "react-icons/vsc";
import { VscComment } from "react-icons/vsc";
import { VscHome } from "react-icons/vsc";

// TODO: use framer to make opacity effect for planet
//TODO: Make menu open upwards when clicked
//TODO: Make logo open socials when clicked
//TODO: Make text effect when text is hovered
const Landing = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <main className='landing-container'>
            <div className="landing-content">
                <motion.div
                    initial={false}
                    animate={{bottom: openMenu ? 0 : -160, transition: {ease: easeInOut}}}
                    className="menu-controls"
                >
                    <IoMenu className='menu-icon' onClick={() => setOpenMenu(!openMenu)} />
                    <div>
                        <div className="active-dot"></div>
                        <div>
                            <NavLink to='/'><VscHome className='link-icon' /></NavLink>
                        </div>
                        <div>
                            <NavLink><VscBook className='link-icon' /></NavLink>
                        </div>
                        <div>
                            <NavLink><VscBriefcase className='link-icon' /></NavLink>
                        </div>
                        <div>
                            <NavLink><VscComment className='link-icon' /></NavLink>
                        </div>
                    </div>
                </motion.div>
                <div className="logo">
                    <img src="/H4.png" alt="" />
                </div>
                <div className="name">
                    <h2>Alex Yanez</h2>
                </div>
                <div className="roles">
                    <h2>Software Engineer</h2>
                    <h2>Full-Stack Developer</h2>
                </div>
                <div className="gradient"></div>
                <spline-viewer url="https://prod.spline.design/n9t6fe6Uvtkn1ZE7/scene.splinecode"></spline-viewer>
                <div className="block"></div>
            </div>
        </main>
    );
};

export default Landing;