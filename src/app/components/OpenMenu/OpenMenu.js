"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./OpenMenu.module.css";
import { useClickAway } from "@uidotdev/usehooks";

const OpenMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  const signs = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];

  return (
    
    <div className={styles.header}>
      <button className={styles.menuButton} onClick={toggleMenu}>
        Signs
      </button>
      <div
        className={
          styles.menuContainer +
          (isOpen ? ` ${styles.open}` : ` ${styles.closed}`)
        }
      >
        
        <div className={styles.menuItems} ref={ref}>
        
          {signs.map((sign) => (
            <Link href={`/signs/${sign.toLowerCase()}`} key={sign}>
              {sign}
            </Link>
            
          ))}
        </div>
        <div>
        <button
          className={styles.closeButton}
          onClick={toggleMenu}
        >
          <svg className="h-8 w-8 text-white hover:fill-red-200"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
        </button>
        </div>
      </div>
    </div>
  );
};

export default OpenMenu;
