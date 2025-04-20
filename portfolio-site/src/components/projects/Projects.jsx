import React from 'react';
import { Link } from 'react-router-dom';
import transition from '../global/transitions/Transition';
import Image from '../global/images/Image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import './Projects.css';
import { VscTriangleRight } from "react-icons/vsc";
import { VscTriangleLeft } from "react-icons/vsc";
import { HiOutlineLink } from "react-icons/hi";
import { VscGithub } from "react-icons/vsc";

const Projects = () => {
    return (
        <div className="projects-container">
            <Swiper
                effect={'coverflow'}
                grabCursor={false}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                {projectData.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="project-content">
                            <h2 className='project-name'>{item.title}</h2>
                            <div className="img-wrapper">
                                <Image path={item.img} alt="" />
                            </div>
                            <div className="project-details">
                                <div className="project-links">
                                    {item.websiteLink &&
                                    <Link to={item.websiteLink} className="project-link">
                                        <h2>Website</h2>
                                        <HiOutlineLink className='project-link-icon' />
                                    </Link>
                                    }
                                    {item.sourceCodeLink &&
                                    <Link to={item.sourceCodeLink} className="project-link">
                                        <h2>Details</h2>
                                        <VscGithub className='project-link-icon' />
                                    </Link>
                                    }
                                </div>
                                <div className="project-skills">
                                    {item.skills.map((skill, index) => (
                                        <div
                                            className='skill-background'
                                            key={index}
                                            style={{ "--i": `${-index * 5}px` }}
                                        >
                                            <Image path={skill} alt={`skill-${index}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <VscTriangleLeft />
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <VscTriangleRight />
                    </div>
                </div>
            </Swiper>
            <div className="fade-slider-left" />
            <div className="fade-slider-right" />
        </div>
    );
}

const projectData = [
    {
        title: "Artisan Allure Fashions",
        img: "artisan-allure-fashions-project.png",
        websiteLink: "https://artisanallurefashions-frontend.onrender.com",
        sourceCodeLink: "https://github.com/A13xYanez/ArtisanAllure-Fashions",
        skills: [
            "javascript-icon.svg",
            "react-icon.svg",
            "css-icon.svg",
            "mongodb-icon.svg",
            "express-icon.svg"
        ]
    },
    {
        title: "Portfolio",
        img: "portfolio-project.png",
        websiteLink: "https://alex-yanez.me",
        sourceCodeLink: "https://github.com/A13xYanez/Portfolio-Site",
        skills: [
            "javascript-icon.svg",
            "react-icon.svg",
            "css-icon.svg"
        ]
    },
    {
        title: "MRS @ UC Merced – Member Portal",
        img: "work-in-progress.png",
        skills: [
            "typescript-icon.svg",
            "nextjs-icon.svg",
            "tailwindcss-icon.svg",
            "java-icon.svg",
            "spring-icon.svg",
            "amazonwebservices-icon.svg"
        ]
    }
]

export default transition(Projects);