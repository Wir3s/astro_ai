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
          Virgo, as the harvest season approaches, your practical and analytical
          skills are in high demand. Embrace technology and innovation without
          losing touch with your natural affinity for the earth. Mindfulness
          practices can bring clarity and tranquility to your busy mind. Focus
          on serving others, and let your thoughtful nature light the way to a
          brighter future.{" "}
        </p>
      </div>
      <div style={{ width: "100%" }}>
        <Comments />
      </div>
    </main>
  );
}
