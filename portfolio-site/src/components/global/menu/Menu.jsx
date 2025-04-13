import React from 'react';
import { useState } from 'react';
import { easeInOut, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import './Menu.css';

import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Menu = () => {
    const [openMenu, setOpenMenu] = useState(true);
    
    return (
        <div>
            <motion.div
                initial={false}
                animate={{bottom: openMenu ? 0 : -100, transition: {ease: easeInOut}}}
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
                        <NavLink to='/' onClick={() => setOpenMenu(!openMenu)}>Home</NavLink>
                    </div>
                    <div>
                        <NavLink to='/about' onClick={() => setOpenMenu(!openMenu)}>About</NavLink>
                    </div>
                    <div>
                        <NavLink to='/projects' onClick={() => setOpenMenu(!openMenu)}>Works</NavLink>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Menu;