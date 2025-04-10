import React from 'react';
import { useEffect, useRef } from 'react';

const useDragger = (elementID) => {
    const isClicked = useRef(false);
    const coords = useRef({
        startX: 330,
        startY: 340,
        lastX: 330,
        lastY: 340
    });

    useEffect(() => {
        // reference the element to drag
        const target = document.getElementById(elementID);
        if (!target) throw new Error("The element with the given id does not exist.");
        
        // reference the elements parent
        const container = target.parentElement;
        if (!container) throw new Error("The target element must have a parent.")

        // event listener functions
        const onMouseDown = (e) => {
            isClicked.current = true;
            target.style.cursor = "grab";
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;
        };

        const onMouseUp = (e) => {
            isClicked.current = false;
            target.style.cursor = "pointer";
            coords.current.lastX = target.offsetLeft;
            coords.current.lastY = target.offsetTop;
        };

        const onMouseMove = (e) => {
            if (!isClicked.current) return;

            const nextX = e.clientX - coords.current.startX + coords.current.lastX;
            const nextY = e.clientY - coords.current.startY + coords.current.lastY;

            target.style.cursor = "grabbing";
            target.style.top = `${nextY}px`;
            target.style.left = `${nextX }px`;
        }

        // attatch event listeners
        target.addEventListener('mousedown', onMouseDown);
        target.addEventListener('mouseup', onMouseUp);
        container.addEventListener('mousemove', onMouseMove);
        container.addEventListener('mouseleave', onMouseUp);

        // remove event listeners
        const cleanUp = () => {
            target.removeEventListener('mousedown', onMouseDown);
            target.removeEventListener('mouseup', onMouseUp);
            container.removeEventListener('mousemove', onMouseMove);
            container.removeEventListener('mouseleave', onMouseUp);
        };

        return cleanUp;
    }, [elementID]);
};

export default useDragger;