import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import StarBackground from "./components/StarBackground/StarBackground";
import { ZODIAC_SIGNS } from "./constants/signs";
import styles from "./page.module.css";

// Define props type for SignLink component
interface SignLinkProps {
  sign: typeof ZODIAC_SIGNS[number];
}

// Use React.FC (FunctionComponent) with explicit typing
const SignLink: React.FC<SignLinkProps> = React.memo(({ sign }) => (
  <div className="flex flex-col items-center m-4 md:w-1/4 lg:w-1/6">
    <Link
      href={`/signs/${sign}`}
      // Use template literals for className concatenation
      className={`${styles["glow-on-hover"]} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300`}
    >
      <Image
        src={`/images/${sign}_icon.svg`}
        alt={`${sign} icon`}
        width={120}
        height={120}
        priority
      />
      {sign.charAt(0).toUpperCase() + sign.slice(1)}
    </Link>
  </div>
));

// Define the Home component as a function component
const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.description}>
        <StarBackground />
        <h1 className={`${styles.headline} hover:animate-custom-pulse`}>
          An Insightful Collaboration Between Human and AI
        </h1>
        <div className={styles.star}></div>
        <div className="flex flex-wrap justify-center">
          {ZODIAC_SIGNS.map((sign) => (
            <SignLink key={sign} sign={sign} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;