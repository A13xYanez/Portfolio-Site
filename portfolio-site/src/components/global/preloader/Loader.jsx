import React, { useEffect } from 'react';
import { motion, useAnimate } from 'framer-motion';
import { usePreloader } from './LoaderContext';
import './Loader.css';

const Loader = () => {
    const { setIsPreloading } = usePreloader();
    const [scope, animate] = useAnimate();
    async function loaderAnimation() {
        await animate("#imageCollection", {
            clipPath: "polygon(50% 40%, 50% 40%, 50% 60%, 50% 60%)",
            display: "none",
        });

        await animate("#imageCollection", {
            clipPath: "polygon(0 40%, 100% 40%, 100% 60%, 0 60%)",
            display: "flex",
        },
        {
            delay: 2.45,
            duration: 0.4,
            ease: "easeInOut"
        });

        await animate("#imageCollection", {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        },
        {
            delay: 0.2,
            duration: 0.4,
            ease: "easeInOut"
        });
    };

    useEffect(() => {
        async function runAnimation() {
            await loaderAnimation();
            setTimeout(() => {
                setIsPreloading(false);
            }, 4500);
        }
        runAnimation();
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

    const containerUp = {
        hidden: {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        show: {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            display: "none",
            transition: {
                delay: 4.5,
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
                        custom={[0, 0.25]}
                    >
                        A
                    </motion.h1>
                </div>
                <div className="loader-name">
                    <motion.h1
                        variants={move}
                        initial="hidden"
                        animate={["moveUp", "moveLeft"]}
                        custom={[0, 0.5]}
                    >
                        l
                    </motion.h1>
                </div>
                <div className="loader-name">
                    <motion.h1
                        variants={move}
                        initial="hidden"
                        animate={["moveUp", "moveLeft"]}
                        custom={[0, 0.75]}
                    >
                        e
                    </motion.h1>
                </div>
                <div className="loader-name">
                    <motion.h1
                        variants={move}
                        initial="hidden"
                        animate={["moveUp", "moveLeft"]}
                        custom={[0, 1]}
                    >
                        x
                    </motion.h1>
                </div>

                <motion.div id='imageCollection' className="loader-image-container">
                    <motion.img drag="false" className="loader-image" src="logo.svg" alt="Website Logo" 
                        transition={{delay: 3, duration: 0.6, ease: "easeInOut"}}
                    />
                </motion.div>

                <div className="loader-name">
                    <motion.h1
                        variants={move}
                        initial="hidden"
                        animate={["moveUp", "moveRight"]}
                        custom={[-0, 1.25]}
                    >
                        Y
                    </motion.h1>
                </div>
                <div className="loader-name">
                    <motion.h1
                        variants={move}
                        initial="hidden"
                        animate={["moveUp", "moveRight"]}
                        custom={[-0, 1.5]}
                    >
                        a
                    </motion.h1>
                </div>
                <div className="loader-name">
                    <motion.h1
                        variants={move}
                        initial="hidden"
                        animate={["moveUp", "moveRight"]}
                        custom={[-0, 1.75]}
                    >
                        n
                    </motion.h1>
                </div>
                <div className="loader-name">
                    <motion.h1
                        variants={move}
                        initial="hidden"
                        animate={["moveUp", "moveRight"]}
                        custom={[-0, 2.0]}
                    >
                        e
                    </motion.h1>
                </div>
                <div className="loader-name">
                    <motion.h1
                        variants={move}
                        initial="hidden"
                        animate={["moveUp", "moveRight"]}
                        custom={[-0, 2.25]}
                    >
                        z
                    </motion.h1>
                </div>
            </motion.section>
        </motion.div>
    );
};

export default Loader;