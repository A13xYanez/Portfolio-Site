import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { easeInOut, motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './Nav.css';

const Nav = () => {
    const [openNav, setOpenNav] = useState(false);

    return (
        <nav>
            <motion.div 
            initial={false}
            animate={{top: openNav ? 0 : -90, transition: {ease: easeInOut}}}
            className="contain-nav-controlls">
                <img src='/logo.svg' className='nav-logo' onClick={() => setOpenNav(!openNav)} />
                <div>
                    <div>
                        <Link to='https://www.linkedin.com/in/a13x-yanez/'><FaLinkedin className='nav-link-icon' /></Link>
                    </div>
                    <div>
                        <Link to='https://github.com/A13xYanez'><FaGithub className='nav-link-icon'  /></Link>
                    </div>
                </div>
            </motion.div>
            <div className="name">
                <h2>Alex Yanez</h2>
            </div>
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
        </nav>
    );
};

export default Nav;