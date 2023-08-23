import Image from "next/image";
import styles from "../../page.module.css";
import DateToday from "../../components/DateToday";
import Comments from "../../components/Comments";
import Header from "../../components/Header";

export default function Aquarius() {
  return (
    <main className={styles.signsmain}>
      <Header />
      
      <div className={styles.signdesc}>
        <h1>Aquarius</h1>
      <div className={styles.center}><DateToday /></div>
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
