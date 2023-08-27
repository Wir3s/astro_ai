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
        <h1>Taurus</h1>
      <div className={styles.center}><DateToday /></div>
        <p>
          Taurus, the bounty of the earth is at your fingertips, with gardens
          delivering their delicious harvest. Now is the time to ground yourself
          and appreciate the tangible pleasures of life. Economic stability may
          be within reach, but don't overlook the importance of community and
          connection. Alternative paths and sustainable choices await you.
          Cultivate patience, and trust in the gradual unfolding of your dreams.{" "}
        </p>
      </div>
      <div style={{ width: "100%" }}>
        <Comments />
      </div>
    </main>
  );
}
