import React from 'react';
import transition from '../global/transitions/Transition'
import InfoSection from './InfoSection';
import BioSection from './BioSection';
import WorkSection from './WorkSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';
import './About.css'

//TODO:
//Change the p tags to textarea so that the windows become resizeable.
//Set a minimun and max width and height so that they cannot be too small or big.

const About = () => {
    return (
        <div className="about-container">
            <InfoSection />
            <BioSection />
            <WorkSection />
            <EducationSection />
            <SkillsSection />
        </div>
    )
};

export default transition(About);