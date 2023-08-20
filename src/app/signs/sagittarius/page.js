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
          Adventure and exploration call to you, Sagittarius. Engage with the
          world around you, be it through travel or cultural experiences.
          Learning and growth are in the spotlight, and your natural optimism
          aligns with the season's hopeful energy. Embrace alternative paths,
          seek wisdom, and let your free spirit guide you towards abundance and
          joy.{" "}
        </p>
      </div>
      <div style={{ width: "100%" }}>
        <Comments />
      </div>
    </main>
  );
}
