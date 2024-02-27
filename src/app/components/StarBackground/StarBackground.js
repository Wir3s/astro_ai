"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../page.module.css";
import starImage1 from "../../../../public/images/lens_flare.png";
import starImage2 from "../../../../public/images/lens_flare_white2.png";
import Comet from "../Comet/Comet";

export default function StarBackground() {
  const [stars, setStars] = useState([]);
  const [showComet, setShowComet] = useState(false);

  useEffect(() => {
    const numStars = Math.floor(Math.random() * (100 - 40 + 1)) + 40;
    const newStars = [];
    for (let i = 0; i < numStars; i++) {
      const size = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      const duration = Math.random() * (15 - 5) + 5; // Animation duration between 5 and 15 seconds
      const image = Math.random() > 0.5 ? starImage1 : starImage2; // Randomly select an image
      newStars.push({ size, x, y, duration, image });
    }
    setStars(newStars);
  }, []);

  useEffect(() => {
    // Show the comet after a delay
    const timer = setTimeout(() => setShowComet(true), 5000); // 5 seconds after page load
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
      }}
    >
      {stars.map((star, index) => (
        <div
          key={index}
          className={styles.star}
          style={{
            position: "absolute",
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}px`,
            top: `${star.y}px`,
            animationDuration: `${star.duration}s`,
          }}
        >
          <Image
            src={star.image} // Use the image assigned to the star
            alt="Star" // Alt text for accessibility
            width={star.size} // Dynamic sizing
            height={star.size}
          />
        </div>
      ))}
      {showComet && <Comet />}
    </div>
  );
}
