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
        The winds of change are blowing, Gemini, and the start of a new academic year beckons a return to structure. Embrace learning, be it traditional or self-guided. Engage with technology, but don't lose sight of the human connections that make life rich and meaningful. Laughter and joy are your allies. Stay curious, and let your adaptable nature guide you through this vibrant season.
       </p> </div>
       <div style={{ width: "100%" }}>
        <Comments />
      </div>
    </main>
  );
}
