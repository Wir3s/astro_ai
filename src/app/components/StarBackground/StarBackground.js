'use client'

import React, { useState, useEffect } from 'react';
import styles from '../../page.module.css';
import starImage from '../../../../public/images/lens_flare.png';

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
    <div  style={{ backgroundImage: `url(${starImage})` }}>
      {stars.map((star, index) => (
        <div
          key={index}
          className={styles.star}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: '50%',
            backgroundColor: 'white',
            left: `${star.x}px`,
            top: `${star.y}px`,
          }}
        />
      ))}
    </div>
  );
}
