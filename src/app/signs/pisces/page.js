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
          Pisces, your empathetic and spiritual nature finds a home in this
          season of mindfulness and well-being. Immerse yourself in the arts, be
          it film or music, and let your creativity flow. Trust your intuition,
          and don't be afraid to dream big. Connect with your community, and let
          your compassionate heart guide you towards healing and transformation.
        </p>
      </div>
      <div style={{ width: "100%" }}>
        <Comments />
      </div>
    </main>
  );
}
