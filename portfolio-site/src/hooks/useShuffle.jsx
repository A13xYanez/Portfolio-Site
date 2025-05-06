import { useEffect } from "react";

export const useShuffle = (ref) => {
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const getRandomChar = () => {
            const chars = "ABCDEFGHIJKLNMOPQRSTUVWXYZabcdefghijklnmopqrstuvwxyz1234567890~!@#$%&*()-+=<>?/{}[]";
            return chars[Math.floor(Math.random() * chars.length)];
        };

        const shuffleAnimation = () => {
            if (element.dataset.animating) return;
            element.dataset.animating = true;

            const originalText = element.textContent; 
            let currentIndex = 0;
            const shuffleSpeed = 30;

            const animationInterval = setInterval(() => {
                let output = "";

                for (let i = 0; i < originalText.length; i++) {
                    if (i < currentIndex) {
                        output += originalText[i];
                    } else {
                        output += getRandomChar();
                    }
                }

                element.textContent = output;
                currentIndex++;

                if (currentIndex > originalText.length) {
                    clearInterval(animationInterval);
                    element.textContent = originalText;
                    delete element.dataset.animating;
                }
            }, shuffleSpeed);
        };

        element.addEventListener("mouseenter", shuffleAnimation);

        return () => {
            element.removeEventListener("mouseenter", shuffleAnimation);
        };
    }, [ref]);
};