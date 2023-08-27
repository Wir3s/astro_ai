import Image from "next/image";
import styles from "../../page.module.css";
import DateToday from "../../components/DateToday";
import Comments from "../../components/Comments";
import Header from "../../components/Header";

export default function Capricorn() {
  return (
    <main className={styles.signsmain}>
      <Header />      
      <div className={styles.signdesc}>
        <h1>Capricorn</h1>
      <div className={styles.center}><DateToday /></div>
        <p>
        Capricorn, your disciplined nature resonates with the back-to-school energy. Focus on building solid foundations, both in your personal life and your community. Economic prospects are bright, but don't lose sight of the importance of sustainability and mindfulness. Your leadership can inspire others to reach for higher ideals and a brighter future.
        </p>
       
      </div>
      <div style={{ width: "100%" }}>
        <Comments />
      </div>
    </main>
  );
}
