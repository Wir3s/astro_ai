import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "../app/components/Header";
import StarBackground from "../app/components/StarBackground/StarBackground";

const signs = [
  "capricorn",
  "aries",
  "taurus",
  "aquarius",
  "cancer",
  "gemini",
  "leo",
  "libra",
  "pisces",
  "sagittarius",
  "scorpio",
  "virgo",
];

export default function Home() {
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
          {signs.map((sign, index) => (
            <div
              key={index}
              className="flex flex-col items-center m-4 md:w-1/4 lg:w-1/6"
            >
              <Link
                href={`/signs/${sign}`}
                className={`${styles["glow-on-hover"]} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300`}
              >
                <Image
                  src={`/images/${sign}_icon.svg`}
                  alt={`${sign} icon`}
                  width={120}
                  height={120}
                />
                {sign.charAt(0).toUpperCase() + sign.slice(1)}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
