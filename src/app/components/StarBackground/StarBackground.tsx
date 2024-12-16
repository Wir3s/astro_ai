"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import styles from "../../page.module.css";
import starImage1 from "../../../../public/images/lens_flare.png";
import starImage2 from "../../../../public/images/lens_flare_white2.png";
import Comet from "../Comet/Comet";

interface Star {
  size: number;
  x: number;
  y: number;
  duration: number;
  image: any;
}

export default function StarBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [showComet, setShowComet] = useState(false);

  useEffect(() => {
    // Check if window is defined to prevent SSR issues
    if (typeof window !== 'undefined') {
      const numStars = Math.floor(Math.random() * (100 - 40 + 1)) + 40;
      const newStars: Star[] = Array.from({ length: numStars }, () => ({
        size: Math.floor(Math.random() * (50 - 10 + 1)) + 10,
        x: Math.floor(Math.random() * window.innerWidth),
        y: Math.floor(Math.random() * window.innerHeight),
        duration: Math.random() * (15 - 5) + 5,
        image: Math.random() > 0.5 ? starImage1 : starImage2
      }));

      setStars(newStars);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowComet(true), 5000);
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
            src={star.image}
            alt="Star"
            width={star.size}
            height={star.size}
            // Add loading priority for faster rendering
            loading="lazy"
          />
        </div>
      ))}
      {showComet && <Comet />}
    </div>
  );
}