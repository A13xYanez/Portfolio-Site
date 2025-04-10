import React from 'react';
import { useState } from 'react';
import Image from '../global/images/Image';
import useDragger from '../../hooks/useDragger';

const EducationSection = () => {
    const [isDegreeTabOpen, setIsDegreeTabOpen] = useState(true);
    const [isCoursesTabOpen, setIsCoursesTabOpen] = useState(false);
    const [isClubsTabOpen, setIsClubsTabOpen] = useState(false);
    useDragger("education-folder", 541, 143, "education-window", "open-window");
    useDragger("education-window", 250, 250, "close-education-window", "close-window");
    return (
        <>
            <div className="folder-container education-folder" id='education-folder'>
                <Image path="windows-95-folder-icon.svg" draggable="false" alt='Folder Icon' className="folder-img" />
                <p>Education</p>
            </div>
            <div className="education-popup-window-container" id='education-window'>
                <div className="window-title-bar">
                    <div className="title-bar-left">
                        <h2>Education</h2>
                    </div>
                    <div className="title-bar-right">
                        <Image path="windows-95-close-icon.svg" id="close-education-window" alt="Close Button Icon" draggable="false" />
                    </div>
                </div>
                <div className="education-content-wrapper">
                    <div className="education-section-tabs">
                        <div className="education-tab" onClick={() => {setIsDegreeTabOpen(true); setIsCoursesTabOpen(false); setIsClubsTabOpen(false);}}>
                            <p>Degree</p>
                        </div>
                        <div className="education-tab"  onClick={() => {setIsDegreeTabOpen(false); setIsCoursesTabOpen(true); setIsClubsTabOpen(false);}}>
                            <p>Courses</p>
                        </div>
                        <div className="education-tab" onClick={() => {setIsDegreeTabOpen(false); setIsCoursesTabOpen(false); setIsClubsTabOpen(true);}}>
                            <p>Clubs</p>
                        </div>
                        </div>
                    <div className="education-window-content">
                        {isDegreeTabOpen &&
                            <div className="education-degree-tab">
                                <div className="university-logo">
                                    <Image path="ucm-logo.png" draggable="false" alt="The University of California, Merced Logo" />
                                </div>
                                <div className="univeristy-details">
                                    <p className='university-details-section-title'>University name:</p>
                                    <p>The University of California, Merced</p>
                                    <br/>
                                    <br/>
                                    <p className='university-details-section-title'>Degree:</p>
                                    <p>Computer Science & Engineering, Bachelor's of Science</p>
                                    <br />
                                    <br />
                                    <p className='university-details-section-title'>Graduation Date:</p>
                                    <p>Expected 2026</p>
                                </div>
                            </div>
                        }

                        {isCoursesTabOpen &&
                            <div className="education-courses-tab">
                                <h3>Completed Courses:</h3>
                                <ul className='eduction-course-list'>
                                    <li>Introduction to Programming</li>
                                    <li>Advanced Programming</li>
                                    <li>Data Structures</li>
                                    <li>Computer Organization and Assembly Language</li>
                                    <li>Algorithm Design and Analysis</li>
                                </ul>
                            </div>
                        }

                        {isClubsTabOpen &&
                            <div className="education-clubs-tab">
                                <div className="education-clubs-tab">
                                    {clubData.map((item, i) => (
                                        <div className="club-item" key={i}>
                                            <div className="club-logo">
                                                <Image path={item.logo} draggable="false" alt={item.altText} />
                                            </div>
                                            <div className="univeristy-details">
                                                <p className='university-details-section-title'>Club Name:</p>
                                                <p>{item.club}</p>
                                                <br/>
                                                <br/>
                                                <p className='university-details-section-title'>Description:</p>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

const clubData = [
    {
        logo: "google-developer-group-logo.png",
        club: "Google Developer Group",
        description: "description here",
        altText: "Google Developer Group Logo"
    },
    {
        logo: "acm-logo.png",
        club: "Association for Computing Machinery",
        description: "description here",
        altText: "Association for Computing Machinery Logo"
    },
    {
        logo: "hack-merced-logo.png",
        club: "Hack Merced",
        description: "description here",
        altText: "Hack Merced Logo"
    }
];

export default EducationSection;