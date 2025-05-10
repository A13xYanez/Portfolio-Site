import React, { useState, useEffect, useRef } from 'react';
import Image from '../images/Image';
import { useShuffle } from '../../../hooks/useShuffle';
import { Link } from 'react-router-dom';
import { easeInOut, motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './Nav.css';

const Nav = ({ page }) => {
    const [openNav, setOpenNav] = useState(false);
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
    const jobRoleTopText = useRef();
    useShuffle(jobRoleTopText);
    const jobRoleBottomText = useRef();
    useShuffle(jobRoleBottomText);
    
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
                <Link to='/about'><p ref={firstLastNameText}>Alex Yanez [AY]</p></Link>
            </div>
            <div className="job-roles">
                <div className="job-role-top">
                    <p ref={jobRoleTopText}>Software Engineer</p>
                    <p>/</p>
                </div>
                <p ref={jobRoleBottomText}>Full-Stack Developer</p>
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