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

//TODO: Make logo open socials when clicked
const Landing = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <main className='landing-container'>
            <div className="landing-content">
                <motion.div
                    initial={false}
                    animate={{bottom: openMenu ? 0 : -155, transition: {ease: easeInOut}}}
                    className="menu-controls"
                >
                    <IoMenu className='menu-icon' onClick={() => setOpenMenu(!openMenu)} />
                    <div>
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
                    <img src="/logo.png" alt="" />
                </div>
                <div className="name">
                    <h2>Alex Yanez</h2>
                </div>
                <div className="roles">
                    <h2>Software Engineer</h2>
                    <h2>Full-Stack Developer</h2>
                </div>
                <div className="gradient"></div>
                <spline-viewer className="planet" url="https://prod.spline.design/n9t6fe6Uvtkn1ZE7/scene.splinecode"></spline-viewer>
                <div className="block"></div>
                <div className="dark-mode-settings">
                    <div className="mode-settings">
                        <p>Dark Mode</p>
                        <div className="led-bulb-active">
                            <div />
                        </div>
                    </div>
                </div>
                <div className="light-mode-settings">
                    <div className="mode-settings">
                        <p>Light Mode</p>
                        <div className="led-bulb-inactive">
                            <div />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Landing;