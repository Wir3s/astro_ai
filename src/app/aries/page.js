import Image from "next/image";
import styles from "../page.module.css";
import DateToday from "../components/DateToday";
import Comments from "../components/Comments";
import Header from "../components/Header";

export default function Aries() {
  return (
    <main className={styles.main}>
      <Header />
      <DateToday />
      <div className={styles.description}>
        <p>
          "Today, Aries, you may feel the pulse of summer in full swing. The
          world is buzzing around you, active and lively with the vibrancy of
          long, sunny days. Family and connections are at the forefront,
          bringing warmth and love into your life. Yet beneath the buzz, you may
          also sense an undercurrent of restlessness, a yearning for change.
          <br />
          <br />
          This is a potent time for reflection, Aries. Amidst the flurry of
          summer events and gatherings, take a moment to retreat into your own
          space. In this solitude, you can chart the course for the next phase
          of your life.
          <br />
          <br />
          Your discontent is not a burden, Aries, but a catalyst for
          transformation. Listen to the restless stirrings of your heart. What
          changes are you yearning for? What parts of your life feel stagnant,
          and how can you infuse them with new energy?
          <br />
          <br />
          This thick, oppressive drone of summer, with its lethargy and
          complacence, is also a challenge for you to rise above. It's a call to
          awaken your dormant potentials and to confront the parts of your life
          that you've outgrown.
          <br />
          <br />
          Remember, true leadership isn't just about action and decision-making.
          It's about listening—listening to your inner voice, to the subtle
          shifts in your energy, and to the quiet whispers of your intuition.
          <br />
          <br />
          Harness the transformative power of this time, Aries. Don't resist the
          restlessness. Instead, let it guide you towards the changes that you
          need to make. Embrace this opportunity for transformation, for as the
          summer unfolds, so too does the next chapter of your life.
          <br />
          <br />
          Stay vibrant and resilient, Aries. Welcome the heat of the day, but
          also be ready to welcome the refreshing rain of change when it comes."
        </p>
      </div>
      <div style={{width: '100%'}}>
        <Comments />
      </div>
    </main>
  );
}
