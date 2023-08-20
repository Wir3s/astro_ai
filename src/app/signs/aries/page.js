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
          Aries, the energy of late summer is calling you to action. Embrace the
          community around you, find joy in local gatherings, and savor the
          fresh tastes of the season. As you look to the future, remember that
          growth often comes from embracing new ideas and technologies.
          Mindfulness and self-care should be your guides as you navigate the
          opportunities ahead. Lean into your leadership qualities, and let hope
          fuel your drive.
        </p>
      </div>
      <div style={{ width: "100%" }}>
        <Comments />
      </div>
    </main>
  );
}
