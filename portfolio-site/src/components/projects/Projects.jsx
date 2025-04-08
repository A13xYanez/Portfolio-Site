import React from 'react';
import transition from '../global/transitions/Transition';
import './Projects.css';


import { Swiper, SwiperSlide } from 'swiper/react';

import img from '../../assets/artisan-allure-fashions-project.png'
import { VscTriangleRight } from "react-icons/vsc";
import { VscTriangleLeft } from "react-icons/vsc";
import { HiOutlineLink } from "react-icons/hi";
import reactLogo from '../../assets/react-original.svg';
import mongodbLogo from '../../assets/mongodb-original.svg';
import expressLogo from '../../assets/express-original.svg';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

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
                <SwiperSlide>
                    <div className="project-content">
                        <h2 className='project-name'>Artisan Allure Fashions</h2>
                        <div className="img-wrapper">
                            <img src={img} alt="" />
                        </div>
                        <div className="project-details">
                            <div className="project-links">
                                <h2>Website</h2>
                                <HiOutlineLink className='project-link-icon' />
                            </div>
                            <div className="project-skills">
                                <div className='skill-background' style={{ "--i": "0px" }}><img src={reactLogo} alt="" /></div>
                                <div className='skill-background' style={{ "--i": "-5px" }}><img src={mongodbLogo} alt="" /></div>
                                <div className='skill-background' style={{ "--i": "-10px" }}><img src={expressLogo} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-content">
                        <h2 className='project-name'>Artisan Allure Fashions</h2>
                        <div className="img-wrapper">
                            <img src={img} alt="" />
                        </div>
                        <div className="project-details">
                            <div className="project-links">
                                <h2>Website</h2>
                                <HiOutlineLink className='project-link-icon' />
                            </div>
                            <div className="project-skills">
                                <div className='skill-background' style={{ "--i": "0px" }}><img src={reactLogo} alt="" /></div>
                                <div className='skill-background' style={{ "--i": "-5px" }}><img src={mongodbLogo} alt="" /></div>
                                <div className='skill-background' style={{ "--i": "-10px" }}><img src={expressLogo} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-content">
                        <h2 className='project-name'>Artisan Allure Fashions</h2>
                        <div className="img-wrapper">
                            <img src={img} alt="" />
                        </div>
                        <div className="project-details">
                            <div className="project-links">
                                <h2>Website</h2>
                                <HiOutlineLink className='project-link-icon' />
                            </div>
                            <div className="project-skills">
                                <div className='skill-background' style={{ "--i": "0px" }}><img src={reactLogo} alt="" /></div>
                                <div className='skill-background' style={{ "--i": "-5px" }}><img src={mongodbLogo} alt="" /></div>
                                <div className='skill-background' style={{ "--i": "-10px" }}><img src={expressLogo} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-content">
                        <h2 className='project-name'>Artisan Allure Fashions</h2>
                        <div className="img-wrapper">
                            <img src={img} alt="" />
                        </div>
                        <div className="project-details">
                            <div className="project-links">
                                <h2>Website</h2>
                                <HiOutlineLink className='project-link-icon' />
                            </div>
                            <div className="project-skills">
                                <div className='skill-background' style={{ "--i": "0px" }}><img src={reactLogo} alt="" /></div>
                                <div className='skill-background' style={{ "--i": "-5px" }}><img src={mongodbLogo} alt="" /></div>
                                <div className='skill-background' style={{ "--i": "-10px" }}><img src={expressLogo} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-content">
                        <h2 className='project-name'>Artisan Allure Fashions</h2>
                        <div className="img-wrapper">
                            <img src={img} alt="" />
                        </div>
                        <div className="project-details">
                            <div className="project-links">
                                <h2>Website</h2>
                                <HiOutlineLink className='project-link-icon' />
                            </div>
                            <div className="project-skills">
                                <div className='skill-background' style={{ "--i": "0px" }}><img src={reactLogo} alt="" /></div>
                                <div className='skill-background' style={{ "--i": "-5px" }}><img src={mongodbLogo} alt="" /></div>
                                <div className='skill-background' style={{ "--i": "-10px" }}><img src={expressLogo} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
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

export default transition(Projects);