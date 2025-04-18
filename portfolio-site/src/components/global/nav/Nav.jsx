import React, { useState, useEffect } from 'react';
import Image from '../images/Image';
import { Link } from 'react-router-dom';
import { easeInOut, motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './Nav.css';

const Nav = ({ page }) => {
    const [openNav, setOpenNav] = useState(true);

    useEffect(() => {
        if (page == '/') {
            setOpenNav(true);
        } else {
            setOpenNav(false);
        }
    }, [page]);
    
    return (
        <nav>
            <motion.div 
            initial={false}
            animate={{top: openNav ? 0 : -90, transition: {ease: easeInOut}}}
            className="contain-nav-controlls">
                <Image path='website-logo.svg' className='nav-logo' onClick={() => setOpenNav(!openNav)} />
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
            <div className="open-to-projects-wrapper">
                <div className="open-to-projects-content">
                    <p>Providing project support</p>
                    <div className="led-bulb-active">
                        <div />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;