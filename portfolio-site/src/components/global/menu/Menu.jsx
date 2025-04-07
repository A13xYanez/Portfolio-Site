import React from 'react';
import { useState } from 'react';
import { easeInOut, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import './Menu.css';

import { IoMenu } from "react-icons/io5";
import { VscBriefcase } from "react-icons/vsc";
import { VscBook } from "react-icons/vsc";
import { VscComment } from "react-icons/vsc";
import { VscHome } from "react-icons/vsc";

const Menu = () => {
    const [openMenu, setOpenMenu] = useState(false);
    
    return (
        <div>
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
                        <NavLink to='/projects'><VscBriefcase className='link-icon' /></NavLink>
                    </div>
                    <div>
                        <NavLink><VscComment className='link-icon' /></NavLink>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Menu;