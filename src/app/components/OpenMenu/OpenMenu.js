'use client';

import { useState } from 'react';
import Link from "next/link";
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
    <button className={styles.menuButton} onClick={toggleMenu}>Signs</button>
    <div className={styles.menuContainer + (isOpen ? ` ${styles.open}` : ` ${styles.closed}`)}>
      <div className={styles.menuItems}>
        {signs.map(sign => (
          <Link href={`/signs/${sign.toLowerCase()}`} key={sign}>{sign}</Link>
        ))}
      </div>
      <button className={styles.closeButton} onClick={toggleMenu}>X</button>
    </div>
  </div>
);
        };

export default OpenMenu;