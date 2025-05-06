import { useEffect } from "react";

export const useShuffle = (ref) => {
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const getRandomChar = () => {
            const chars = "ABCDEFGHIJKLNMOPQRSTUVWXYZabcdefghijklnmopqrstuvwxyz1234567890~!@#$%&*()-+=<>?/{}[]";
            return chars[Math.floor(Math.random() * chars.length)];
        }

        const shuffleAnimation = () => {
            if (element.dataset.animating) return;
            element.dataset.animating = true;
            
            const originalText = element.textContent;

            const maxShuffles = 10;
            const intervalDuration = 500 / maxShuffles;
            let shuffles = 0;

            const animationInterval = setInterval(() => {
                if (shuffles >= maxShuffles) {
                    clearInterval(animationInterval);
                    element.textContent = originalText;
                    delete element.dataset.animating;
                } else {
                    let shuffledText = "";

                    for (let i = 0; i < originalText.length; i++) {
                        shuffledText += getRandomChar();
                    }

                    element.textContent = shuffledText;
                    shuffles++;
                }
            }, intervalDuration);
        };

        element.addEventListener("mouseenter", shuffleAnimation);

        return () => {
            element.removeEventListener("mouseenter", shuffleAnimation);
        };
    }, [ref]);
};