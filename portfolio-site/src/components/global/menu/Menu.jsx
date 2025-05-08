import React, { useState, useRef } from 'react';
import { easeInOut, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import './Menu.css';
import { useShuffle } from '../../../hooks/useShuffle';

import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Menu = () => {
    const [openMenu, setOpenMenu] = useState(true);
    const homeLinkText = useRef();
    const aboutLinkText = useRef();
    const projectsLinkText = useRef();
    const contactLinkText = useRef();
    
    useShuffle(homeLinkText);
    useShuffle(aboutLinkText);
    useShuffle(projectsLinkText);
    useShuffle(contactLinkText);

    return (
        <div>
            <motion.div
                initial={false}
                animate={{bottom: openMenu ? 0 : -135, transition: {ease: easeInOut}}}
                className="menu-controls"
            >
                <IoMenu className='menu-icon' onClick={() => setOpenMenu(true)} 
                    style={{scale: !openMenu ? 1 : 0, position: !openMenu ? 'relative' : 'absolute', transition: !openMenu ? `.5s` : '0s', pointerEvents: !openMenu ? 'all' : 'none'}} 
                />
                <IoClose className='menu-icon' onClick={() => setOpenMenu(false)}
                    style={{scale: openMenu ? 1 : 0, position: openMenu ? 'relative' : 'absolute', transition: openMenu ? `.5s` : '0s', pointerEvents: openMenu ? 'all' : 'none'}} 
                />
                <div className='menu-links'>
                    <div>
                        <NavLink to='/' onClick={() => setOpenMenu(!openMenu)}><p ref={homeLinkText}>Home</p></NavLink>
                    </div>
                    <div>
                        <NavLink to='/about' onClick={() => setOpenMenu(!openMenu)}><p ref={aboutLinkText}>About</p></NavLink>
                    </div>
                    <div>
                        <NavLink to='/projects' onClick={() => setOpenMenu(!openMenu)}><p ref={projectsLinkText}>Works</p></NavLink>
                    </div>
                    <div>
                        <NavLink to='/contact' onClick={() => setOpenMenu(!openMenu)}><p ref={contactLinkText}>Email</p></NavLink>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Menu;