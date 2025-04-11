import React, { useEffect, useRef } from 'react';

const useDragger = (elementID, elementXPosition, elementYPosition, elementToggles, toggleEvent) => {
    const isClicked = useRef(false);
    const coords = useRef({
        startX: elementXPosition,
        startY: elementYPosition,
        lastX: elementXPosition,
        lastY: elementYPosition
    });

    useEffect(() => {
        // reference the element to drag
        const target = document.getElementById(elementID);
        if (!target) throw new Error("The element with the given id does not exist.");

        // reference the elements parent
        const container = target.parentElement;
        if (!container) throw new Error("The target element must have a parent.");

         // reference another element and do something on an event on the main element
        const targetToggles = document.getElementById(elementToggles);

         // event listener functions
        const onMouseDown = (e) => {
            isClicked.current = true;
            target.style.cursor = "grab";
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;
        };

        const onMouseUp = () => {
            isClicked.current = false;
            target.style.cursor = "pointer";
            coords.current.lastX = target.offsetLeft;
            coords.current.lastY = target.offsetTop;
        };

        const onMouseMove = (e) => {
            if (!isClicked.current) return;

            const nextX = e.clientX - coords.current.startX + coords.current.lastX;
            const nextY = e.clientY - coords.current.startY + coords.current.lastY;

            const containerRect = container.getBoundingClientRect();
            const targetRect = target.getBoundingClientRect();

            const maxX = containerRect.width - target.offsetWidth;
            const maxY = containerRect.height - target.offsetHeight;

            const clampedX = Math.max(0, Math.min(nextX, maxX));
            const clampedY = Math.max(0, Math.min(nextY, maxY));

            target.style.cursor = "grabbing";
            target.style.top = `${clampedY}px`;
            target.style.left = `${clampedX}px`;
        };

        const onDoubleClick = () => {
            if (targetToggles) targetToggles.style.display = "block";
        };

        const onClick = () => {
            if (targetToggles) target.style.display = "none";
        };

        const handleResize = () => {
            const containerRect = container.getBoundingClientRect();
            const targetRect = target.getBoundingClientRect();

            let left = target.offsetLeft;
            let top = target.offsetTop;

            const maxX = containerRect.width - target.offsetWidth;
            const maxY = containerRect.height - target.offsetHeight;

            const clampedX = Math.max(0, Math.min(left, maxX));
            const clampedY = Math.max(0, Math.min(top, maxY));

            coords.current.lastX = clampedX;
            coords.current.lastY = clampedY;

            target.style.left = `${clampedX}px`;
            target.style.top = `${clampedY}px`;
        };

        // Add event listeners
        target.addEventListener('mousedown', onMouseDown);
        target.addEventListener('mouseup', onMouseUp);
        container.addEventListener('mousemove', onMouseMove);
        container.addEventListener('mouseleave', onMouseUp);

        if (toggleEvent === "open-window") target.addEventListener('dblclick', onDoubleClick);
        if (toggleEvent === "close-window" && targetToggles) targetToggles.addEventListener('click', onClick);

        window.addEventListener('resize', handleResize);

        // remove event listeners
        const cleanUp = () => {
            target.removeEventListener('mousedown', onMouseDown);
            target.removeEventListener('mouseup', onMouseUp);
            container.removeEventListener('mousemove', onMouseMove);
            container.removeEventListener('mouseleave', onMouseUp);
            if (toggleEvent === "open-window") target.removeEventListener('dblclick', onDoubleClick);
            if (toggleEvent === "close-window" && targetToggles) targetToggles.removeEventListener('click', onClick);
            window.removeEventListener('resize', handleResize);
        }

        return cleanUp;
    }, [elementID]);
};

export default useDragger;
