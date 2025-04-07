import React from 'react';
import { motion } from 'framer-motion';
import './Transition.css';

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
                        return <motion.div {...animation(expand, i)} key={i} />
                    })
                }
            </div>
            <Component />
        </div>
    )
}

export default transition;