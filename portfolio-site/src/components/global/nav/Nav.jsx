import React, { useState, useEffect, useRef } from 'react';
import Image from '../images/Image';
import { useShuffle } from '../../../hooks/useShuffle';
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

    const projectHelpText = useRef();
    useShuffle(projectHelpText);
    const firstLastNameText = useRef();
    useShuffle(firstLastNameText);
    
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
                <Link to='/about'><h2 ref={firstLastNameText}>Alex Yanez</h2></Link>
            </div>
            <div className="open-to-projects-wrapper">
                <Link to='/contact'>
                    <div className="open-to-projects-content">
                        <p ref={projectHelpText}>Providing project support</p>
                        <div className="led-bulb-active">
                            <div />
                        </div>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Nav;