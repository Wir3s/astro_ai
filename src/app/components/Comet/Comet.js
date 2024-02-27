import React, { useEffect, useState } from "react";
import styles from "../../page.module.css"; // Ensure your styles are correctly imported

export default function Comet() {
  // Set initial position off-screen based on the direction of movement
  const [position, setPosition] = useState(() => {
    // Randomly decide whether the comet starts from a horizontal or vertical edge
    const startsHorizontally = Math.random() < 0.5;
    let initialX, initialY;

    if (startsHorizontally) {
      initialX = Math.random() < 0.5 ? -100 : window.innerWidth + 100; // Start off-screen to the left or right
      initialY = Math.random() * window.innerHeight;
    } else {
      initialX = Math.random() * window.innerWidth;
      initialY = Math.random() < 0.5 ? -100 : window.innerHeight + 100; // Start off-screen to the top or bottom
    }

    return { x: initialX, y: initialY };
  });

  const [isVisible, setIsVisible] = useState(false); // Start as invisible

  useEffect(() => {
    let endX, endY;

    // Decide end position based on starting edge
    if (position.x < 0 || position.x > window.innerWidth) {
      // If starting horizontally off-screen, move across the screen horizontally
      endX = position.x < 0 ? window.innerWidth : -100;
      endY = position.y; // Keep the same vertical position
    } else {
      // If starting vertically off-screen, move across the screen vertically
      endX = position.x; // Keep the same horizontal position
      endY = position.y < 0 ? window.innerHeight : -100;
    }

    // Make the comet visible and start moving after a very short delay
    const visibilityTimer = setTimeout(() => setIsVisible(true), 10);

    // Trigger the movement after a brief delay
    const moveTimer = setTimeout(() => {
      setPosition({ x: endX, y: endY });
      // Optionally, start fading out towards the end of the movement if desired
    }, 100); // This can be adjusted as needed

    // Cleanup timers on component unmount
    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(moveTimer);
    };
  }, []);

  return (
    <div
      className={styles.comet}
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0,
        transition: "left 5s, top 5s, opacity 5s ease-out", // Controls the timing of movement and fade-out
      }}
    ></div>
  );
}
