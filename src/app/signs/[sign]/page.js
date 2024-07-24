import Image from "next/image";
import styles from "../../page.module.css";
import DateToday from "../../components/DateToday";
import Comments from "../../components/Comments";
import Header from "../../components/Header";

// Fetch Data
async function getHoroscope(sign) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/data/horoscopes.json`, {
    next: { revalidate: 60 },
  });
  console.log("Fetching horoscopes from:", `${baseUrl}/data/horoscopes.json`);
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
