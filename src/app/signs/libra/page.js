import Image from "next/image";
import styles from "../../page.module.css";
import DateToday from "../../components/DateToday";
import Comments from "../../components/Comments";
import Header from "../../components/Header";

export default function Pisces() {
  return (
    <main className={styles.signsmain}>
      <Header />      
      <div className={styles.signdesc}>
        <h1>Libra</h1>
      <div className={styles.center}><DateToday /></div>
        <p>
          Balance and community are key themes for you, Libra, as the world
          moves towards a new phase of hope and connection. Engage with your
          local surroundings, savoring the food, music, and cultural richness
          they offer. Embrace sustainability and well-being, and let your
          diplomatic skills foster unity and understanding. Love and laughter
          await you.
        </p>
      </div>
      <div style={{ width: "100%" }}>
        <Comments />
      </div>
    </main>
  );
}
