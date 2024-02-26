import styles from "../../page.module.css";
import DateToday from "../../components/DateToday";
import PromptForm from "../../components/PromptForm/PromptForm";
import Header from "../../components/Header";

export default function Aquarius() {
  return (
    <main className={styles.signsmain}>
      <Header />
      <div className={styles.signdesc}>
        <h1>Aquarius</h1>
        <h2>
          <DateToday />
        </h2>
        <br />
        <p>
          Aquarius, your innovative and forward-thinking nature is in harmony
          with the world's focus on technology and alternative energy. Dive into
          creative projects, and let your unique perspective shine. Community
          and connection are key, so reach out and build bridges. Your ability
          to envision a better future is a beacon of hope for those around you.
        </p>
        <br />
        <div style={{ textAlign: "center" }}>
          <PromptForm sign="Aquarius" />
        </div>
      </div>
    </main>
  );
}
