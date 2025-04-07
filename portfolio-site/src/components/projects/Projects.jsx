import React from 'react';
import transition from '../global/transitions/Transition';
import './Projects.css';


import { Swiper, SwiperSlide } from 'swiper/react';



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
                        <h2>Artisan Allure Fashions</h2>
                        <div className="img-wrapper">

                        </div>
                        <div className="project-details">
                            <h2>Website</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-content">
                        <h2>Artisan  Fashions</h2>
                        <div className="img-wrapper">

                        </div>
                        <div className="project-details">
                            <h2>Website</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-content">
                        <h2>Artisan Allure </h2>
                        <div className="img-wrapper">

                        </div>
                        <div className="project-details">
                            <h2>Website</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-content">
                        <h2> Allure Fashions</h2>
                        <div className="img-wrapper">

                        </div>
                        <div className="project-details">
                            <h2>Website</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project-content">
                        <h2>  Fashions</h2>
                        <div className="img-wrapper">

                        </div>
                        <div className="project-details">
                            <h2>Website</h2>
                        </div>
                    </div>
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">

                    </div>
                    <div className="swiper-button-next slider-arrow">

                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
}

export default transition(Projects);