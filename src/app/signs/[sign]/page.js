import Image from "next/image";
import styles from "../../page.module.css";
import DateToday from "../../components/DateToday";
import Comments from "../../components/Comments";
import Header from "../../components/Header";

// Fetch Data
async function getHoroscope(sign) {
  const res = await fetch(`${process.env.BASE_URL}/data/horoscopes.json`);
  console.log(
    "Fetching horoscopes from:",
    `${process.env.BASE_URL}/data/horoscopes.json`
  );
  if (!res.ok) {
    console.error("Failed to fetch data:", res.statusText);
    throw new Error("Failed to fetch data");
  }
  const horoscopes = await res.json();
  console.log("Horoscopes fetched:", horoscopes);

  // Normalize keys to lowercase
  const normalizedHoroscopes = {};
  for (const key in horoscopes) {
    normalizedHoroscopes[key.toLowerCase()] = horoscopes[key];
  }

  return normalizedHoroscopes[sign.toLowerCase()];
}

// Dynamic Route Component
export default async function SignPage({ params }) {
  const { sign } = params;
  console.log("Fetching horoscope for sign:", sign);
  const horoscope = await getHoroscope(sign);
  console.log("Horoscope:", horoscope);

  return (
    <main className={styles.signsmain}>
      <Header />
      <div className={styles.signdesc}>
        <h1>{sign.charAt(0).toUpperCase() + sign.slice(1)}</h1>
        <div className={styles.center}>
          <DateToday />
        </div>
        <p>{horoscope}</p>
      </div>
      <div style={{ width: "100%" }}>
        <Comments />
      </div>
    </main>
  );
}

// Generate Static Params
export async function generateStaticParams() {
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

  return signs.map((sign) => ({ params: { sign } }));
}
