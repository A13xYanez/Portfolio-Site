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

//FIXME:
// for the windows, they can remain spawning in the center stacking ontop of
// on another but update it so that the newest window that gets opened is stacked
// at the very top instead of being burried under the other windows when opened.

//FIXME:
// when letting go over the dragged folder when on another folder it keeps dragging.
// a fix could be to set the z-index of the currently dragged folder to the top
// and changing it back when done dragging could be the fix.

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