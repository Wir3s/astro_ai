'use client';

import { useState } from 'react';
import styles from "./OpenMenu.module.css";

const OpenMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



const signs = [
  'Aries', 'Taurus', 'Gemini', 'Cancer',
  'Leo', 'Virgo', 'Libra', 'Scorpio',
  'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

return (
  <div className={styles.header}>
    <button className={styles.menuButton} onClick={toggleMenu}>Menu</button>
    <div className={styles.menuContainer + (isOpen ? ` ${styles.open}` : ` ${styles.closed}`)}>
      <div className={styles.menuItems}>
        {signs.map(sign => (
          <a href={`/signs/${sign.toLowerCase()}`} key={sign}>{sign}</a>
        ))}
      </div>
    </div>
  </div>
);
        };

export default OpenMenu;