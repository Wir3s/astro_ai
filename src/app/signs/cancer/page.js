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
        Cancer, your nurturing instincts align with the season's focus on well-being and community. As the weather warms, you're called to support others, be it through sharing a home-cooked meal or offering a listening ear. Seek balance between the old and the new, and don't be afraid to explore alternative energies and ways of thinking. Your empathy and wisdom will be your guiding stars.</p> </div>
        <div style={{ width: "100%" }}>
        <Comments />
      </div>
    </main>
  );
}
