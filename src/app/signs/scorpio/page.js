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
          Scorpio, the undercurrents of change are aligning with your intuitive
          nature. Explore the inner workings of your mind through meditation or
          other mindfulness practices. Invest in relationships, both old and
          new, and don't be afraid to dive deep. Embrace innovation and
          technology, but always with a heart centered on empathy and
          compassion. Transformation is on the horizon.
        </p>
      </div>
      <div style={{ width: "100%" }}>
        <Comments />
      </div>
    </main>
  );
}
