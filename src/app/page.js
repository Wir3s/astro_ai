import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

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
      <div className={styles.description}>
        <h1>An Insightful Collaboration Between Human and AI</h1>
        <div className="flex flex-wrap justify-center">
          {signs.map((sign, index) => (
            <div
              key={index}
              className="flex flex-col items-center m-4 md:w-1/4 lg:w-1/6"
            >
              <Link 
                href={`/${sign.toLowerCase()}`}
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
          {/* <Link href="/capricorn">Cap</Link> */}
          {/* 
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}
        </div>
      </div>
    </main>
  );
}
