import Image from "next/image";
import styles from "../../page.module.css";
import DateToday from "../../components/DateToday";
import Comments from "../../components/Comments";
import Header from "../../components/Header";

export default function Pisces() {
  return (
    <main className={styles.main}>
      <Header />
      <DateToday />
      <div className={styles.description}>
        <p>
          Leo, the spotlight is on you this season, and your vibrant energy
          resonates with the lively buzz of local festivals and celebrations.
          Dive into the arts, be it movies or creative pursuits, and let your
          creativity shine. Economic optimism is in the air, but remember to
          stay mindful and grounded. Your natural leadership can inspire others
          to embrace hope and positive change.
        </p>
      </div>
      <div style={{ width: "100%" }}>
        <Comments />
      </div>
    </main>
  );
}
