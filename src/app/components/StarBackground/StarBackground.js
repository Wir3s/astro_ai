"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../page.module.css";
import starImage from "../../../../public/images/lens_flare.png";
// import starImage from './lens_flare.png';

export default function StarBackground() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const numStars = Math.floor(Math.random() * (100 - 40 + 1)) + 40;
    const newStars = [];
    for (let i = 0; i < numStars; i++) {
      const size = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      newStars.push({ size, x, y });
    }
    setStars(newStars);
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
            // borderRadius: "50%",
            // backgroundImage: `url(${starImage})`,
            // backgroundSize: "cover",
            left: `${star.x}px`,
            top: `${star.y}px`,
          }}
        >
        <Image
        src={starImage}  // Using the imported image
        alt="Star"  // Alt text for accessibility
        width={star.size}  // Dynamic sizing
        height={star.size}
      />
    </div>
      ))}
    </div>
  );
}
