import Image from "next/image";
import styles from "../../page.module.css";
import DateToday from "../../components/DateToday";
import Comments from "../../components/Comments";
import Header from "../../components/Header";

export default function Aries() {
  return (
    <main className={styles.main}>
      <Header />
      <DateToday />
      <div className={styles.description}>
        <p>
          Aquarius, your innovative and forward-thinking nature is in harmony
          with the world's focus on technology and alternative energy. Dive into
          creative projects, and let your unique perspective shine. Community
          and connection are key, so reach out and build bridges. Your ability
          to envision a better future is a beacon of hope for those around you.
        </p>
      </div>
      <div style={{ width: "100%" }}>
        <Comments />
      </div>
    </main>
  );
}
