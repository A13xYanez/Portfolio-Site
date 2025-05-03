import React, { useEffect } from 'react';
import { motion, useAnimate } from 'framer-motion';
import Image from '../images/Image';
import './Loader.css';

const Loader = () => {
    const [scope, animate] = useAnimate();

    async function loaderAnimation() {
        await animate("#imageCollection", {
            clipPath: "polygon(50% 40%, 50% 40%, 50% 60%, 50% 60%)",
            display: "none"
        });

        await animate("#imageCollection", {
            clipPath: "polygon(0 40%, 100% 40%, 100% 60%, 0 60%)",
            display: "flex"
        },
        {
            delay: 0.45,
            duration: 0.4,
            ease: "easeInOut"
        });

        await animate("#imageCollection", {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            display: "flex"
        },
        {
            delay: 0.2,
            duration: 0.4,
            ease: "easeInOut"
        });
    };

    useEffect(() => {
        loaderAnimation();
    }, []);

    const move = {
        hidden: (i) => ({
            y: "100%",
            x: i[0],
        }),
        moveUp: (i) => ({
            y: 0,
            transition: {
                delay: i[1],
                duration: 0.4,
                ease: "easeInOut"
            }
        }),
        moveRight: {
            x: "10px",
            transition: {
                delay: 0.8,
                duration: 0.4,
                ease: "easeInOut"
            }
        },
        moveLeft: {
            x: "-10px",
            transition: {
                delay: 0.8,
                duration: 0.4,
                ease: "easeInOut"
            }
        }
    }

    const imageChange = {
        hidden: {
            display: "block"
        },
        show: (i) => ({
            display: "none",
            transition: {
                duration: 0.6,
                delay: i,
                ease: "easeInOut"
            }
        })
    }

    const containerUp = {
        hidden: {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        show: {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            display: "none",
            transition: {
                delay: 4,
                duration: 0.6,
                ease: "easeInOut"
            }
        }
    }

    return (
        <motion.div className='loader-container' ref={scope}
            variants={containerUp}
            initial="hidden"
            animate="show"
        >
            <motion.section className="loader-section">
                <div className="loader-name">
                    <motion.h1
                        variants={move}
                        initial="hidden"
                        animate={["moveUp", "moveLeft"]}
                        custom={[100, 0.2]}
                    >
                        Alex
                    </motion.h1>
                </div>
                <motion.div id='imageCollection' className="loader-image-container">
                    <motion.img className="loader-image" src='logo.svg' alt="" 
                        variants={imageChange}
                        initial="hidden"
                        animate="show"
                        custom={1.8}
                    />
                    <motion.img className="loader-image" src='logo.svg' alt="" 
                        variants={imageChange}
                        initial="hidden"
                        animate="show"
                        custom={2.2}
                    />
                    <motion.img className="loader-image" src='logo.svg' alt="" 
                        variants={imageChange}
                        initial="hidden"
                        animate="show"
                        custom={2.6}
                    />
                    <motion.img className="loader-image" src='logo.svg' alt="" 
                        transition={{delay: 3, duration: 0.6, ease: "easeInOut"}}
                    />
                </motion.div>
                <div className="loader-name">
                    <motion.h1
                        variants={move}
                        initial="hidden"
                        animate={["moveUp", "moveRight"]}
                        custom={[-100, 0.3]}
                    >
                        Yanez
                    </motion.h1>
                </div>
            </motion.section>
        </motion.div>
    );
};

export default Loader;