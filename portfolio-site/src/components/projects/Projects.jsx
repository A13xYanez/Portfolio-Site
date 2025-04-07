import React from 'react';
import transition from '../global/transitions/Transition';
import './Projects.css';

import { VscTriangleRight } from "react-icons/vsc";
import { VscTriangleLeft } from "react-icons/vsc";

const Projects = () => {
    return (
        <div className='projects-container'>
            <div className="projects-wrapper">
                <div className="projects-slider">
                    <div className="project-item">
                        <h1>asdfs</h1>
                    </div>
                    <div className="project-item">
                        <h1>asdfs</h1>
                    </div>
                    <div className="project-item">
                        <h1>asdfs</h1>
                    </div>
                    <div className="project-item">
                        <h1>asdfs</h1>
                    </div>
                    <div className="project-item">
                        <h1>asdfs</h1>
                    </div>
                    <div className="project-item">
                        <h1>asdfs</h1>
                    </div>
                    <div className="project-item">
                        <h1>asdfs</h1>
                    </div>
                    <div className="project-item">
                        <h1>asdfs</h1>
                    </div>
                    <div className="project-item">
                        <h1>asdfs</h1>
                    </div>
                    <div className="project-item">
                        <h1>asdfs</h1>
                    </div>
                </div>
            </div>
            <div className="project-slider-controlls">
                <div className="projects-controll-btn">
                    <VscTriangleLeft className='controll-btn-icon' />
                </div>
                <div className="projects-controll-btn">
                    <VscTriangleRight className='controll-btn-icon' />
                </div>
            </div>
        </div>
    );
};

export default transition(Projects);