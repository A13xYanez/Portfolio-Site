import React, { useEffect, useRef } from 'react';

const useDragger = (
  elementID,
  existingPositionsRef,
  elementToggles,
  toggleEvent,
  spawnPosition,
  forceCenter = false
) => {
  const isClicked = useRef(false);
  const coords = useRef({ startX: 0, startY: 0, lastX: 0, lastY: 0 });

  const getNonOverlappingRandomPosition = (containerRect, elementRect) => {
    const maxAttempts = 50;
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;
    const spawnRangeX = containerRect.width * spawnPosition;
    const spawnRangeY = containerRect.height * spawnPosition;

    for (let i = 0; i < maxAttempts; i++) {
      const left = centerX - spawnRangeX / 2 + Math.random() * spawnRangeX;
      const top = centerY - spawnRangeY / 2 + Math.random() * spawnRangeY;

      const newBox = {
        left,
        top,
        right: left + elementRect.width,
        bottom: top + elementRect.height,
      };

      const overlapping = existingPositionsRef.current.some(pos =>
        !(newBox.right < pos.left ||
          newBox.left > pos.right ||
          newBox.bottom < pos.top ||
          newBox.top > pos.bottom)
      );

      if (!overlapping) {
        existingPositionsRef.current.push(newBox);
        return { left, top };
      }
    }

    const fallbackLeft = centerX - elementRect.width / 2;
    const fallbackTop = centerY - elementRect.height / 2;
    existingPositionsRef.current.push({
      left: fallbackLeft,
      top: fallbackTop,
      right: fallbackLeft + elementRect.width,
      bottom: fallbackTop + elementRect.height,
    });

    return { left: fallbackLeft, top: fallbackTop };
  };

  useEffect(() => {
    const target = document.getElementById(elementID);
    if (!target) throw new Error(`Element with ID ${elementID} not found`);

    const container = target.parentElement;
    if (!container) throw new Error("Target must have a parent");

    const containerRect = container.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const targetToggles = document.getElementById(elementToggles);

    let left, top;

    if (forceCenter) {
      left = (containerRect.width - targetRect.width) / 2;
      top = (containerRect.height - targetRect.height) / 2;
    } else {
      const position = getNonOverlappingRandomPosition(containerRect, targetRect);
      left = position.left;
      top = position.top;
    }

    target.style.left = `${left}px`;
    target.style.top = `${top}px`;
    coords.current.lastX = left;
    coords.current.lastY = top;

    const onMouseDown = (e) => {
      isClicked.current = true;
      target.style.cursor = "grab";
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;

      coords.current.lastX = target.offsetLeft;
      coords.current.lastY = target.offsetTop;
    };

    const onMouseMove = (e) => {
      if (!isClicked.current) return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      const maxX = container.clientWidth - target.offsetWidth;
      const maxY = container.clientHeight - target.offsetHeight;

      const clampedX = Math.max(0, Math.min(nextX, maxX));
      const clampedY = Math.max(0, Math.min(nextY, maxY));

      target.style.left = `${clampedX}px`;
      target.style.top = `${clampedY}px`;
      target.style.cursor = "grabbing";
    };

    const onMouseUp = () => {
      isClicked.current = false;
      target.style.cursor = "pointer";
      coords.current.lastX = target.offsetLeft;
      coords.current.lastY = target.offsetTop;
    };

    const onDoubleClick = () => {
      if (!targetToggles) return;

      targetToggles.style.visibility = "hidden";
      targetToggles.style.display = "block";

      const popupWidth = targetToggles.offsetWidth;
      const popupHeight = targetToggles.offsetHeight;

      const left = (containerRect.width - popupWidth) / 2;
      const top = (containerRect.height - popupHeight) / 2;

      const clampedLeft = Math.max(0, Math.min(left, containerRect.width - popupWidth));
      const clampedTop = Math.max(0, Math.min(top, containerRect.height - popupHeight));

      targetToggles.style.left = `${clampedLeft}px`;
      targetToggles.style.top = `${clampedTop}px`;

      coords.current.lastX = clampedLeft;
      coords.current.lastY = clampedTop;

      targetToggles.style.visibility = "visible";
    };

    const onClick = () => {
      if (targetToggles) target.style.display = "none";
    };

    const onResize = () => {
      const maxX = container.clientWidth - target.offsetWidth;
      const maxY = container.clientHeight - target.offsetHeight;

      const left = Math.min(target.offsetLeft, maxX);
      const top = Math.min(target.offsetTop, maxY);

      target.style.left = `${left}px`;
      target.style.top = `${top}px`;

      coords.current.lastX = left;
      coords.current.lastY = top;
    };

    target.addEventListener("mousedown", onMouseDown);
    target.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseUp);
    window.addEventListener("resize", onResize);

    if (toggleEvent === "open-window") target.addEventListener("dblclick", onDoubleClick);
    if (toggleEvent === "close-window" && targetToggles) targetToggles.addEventListener("click", onClick);

    return () => {
      target.removeEventListener("mousedown", onMouseDown);
      target.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseUp);
      window.removeEventListener("resize", onResize);

      if (toggleEvent === "open-window") target.removeEventListener("dblclick", onDoubleClick);
      if (toggleEvent === "close-window" && targetToggles) targetToggles.removeEventListener("click", onClick);
    };
  }, [elementID]);
};

export default useDragger;