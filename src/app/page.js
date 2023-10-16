import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "../app/components/Header";

const signs = [
  "Capricorn",
  "Aries",
  "Taurus",
  "Aquarius",
  "Cancer",
  "Gemini",
  "Leo",
  "Libra",
  "Pisces",
  "Sagittarius",
  "Scorpio",
  "Virgo",
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.description}>
        <h1 className={`${styles.headline} hover:animate-custom-pulse`}>
          An Insightful Collaboration Between Human and AI
        </h1>
        {/* <div className={styles.star}>
          <Image src={`/images/lens_flare.png`} width={50} height={50} />
        </div> */}
        <div>
          
        </div>
        <div className="flex flex-wrap justify-center">
          {signs.map((sign, index) => (
            <div
              key={index}
              className="flex flex-col items-center m-4 md:w-1/4 lg:w-1/6"
            >
              <Link
                href={`/signs/${sign.toLowerCase()}`}
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
              >
                <Image
                  src={`/images/${sign.toLowerCase()}_icon.svg`}
                  alt={`${sign} icon`}
                  width={120}
                  height={120}
                />
                {sign}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
