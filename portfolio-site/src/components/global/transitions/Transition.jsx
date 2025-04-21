import React from 'react';
import { motion } from 'framer-motion';
import './Transition.css';

// Sliding Transition
const transition = (Component) => {
    const animation = (variants, custom) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants,
            custom
        };
    };

    const slideIn = {
        initial: {
            scaleY: 0
        },
        enter: (i) => ({
            scaleY: 0,
            transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
            }
        }),
        exit: {
            scaleY: 1,
            transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const slideOut = {
        initial: {
            scaleY: 1
        },
        enter: (i) => ({
            scaleY: 0,
            transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
            }
        }),
        exit: {
            scaleY: 0,
            transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const overlay = {
        initial: {
            opacity: 1,
        },
        enter: {
            opacity: 0,
        },
        exit: {
            opacity: 1,
        }
    };

    return () => (
        <>
            <motion.div {...animation(overlay)} className='transition-background' />
            <motion.div
                className="slide-in"
                {...animation(slideIn)}
            />
            <motion.div
                className="slide-out"
                {...animation(slideOut)}
            />
            <Component />
        </>
    )
};



// Stairs Transiion (Uncomment when needed)
/*
const transition = (Component) => {
    const animation = (variants, custom) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants,
            custom
        };
    };

    const expand = {
        initial: {
            top: 0
        },
        enter: (i) => ({
            top: "100%",
            transition: {
                duration: .25,
                delay: 0.05 * i
            },
            transitionEnd: {
                height: 0,
                top: 0
            }
        }),
        exit: (i) => ({
            height: "100%",
            transition: {
                duration: .25,
                delay: 0.05 * i
            },
        }),
    };

    const overlay = {
        initial: {
            opacity: .75,
        },
        enter: {
            opacity: 0,
        },
        exit: {
            opacity: .75,
        }
    }

    const numOfCol = 10;
    return () => (
        <div className="page stairs">
            <motion.div {...animation(overlay)} className='transition-background' />
            <div className="transition-container">
                {
                    [...Array(numOfCol)].map((_, i) => {
                        return <motion.div {...animation(expand, numOfCol - i)} key={i} />
                    })
                }
            </div>
            <Component />
        </div>
    )
}
*/

export default transition;