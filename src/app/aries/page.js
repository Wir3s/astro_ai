import Image from "next/image";
import styles from "../page.module.css";
import DateToday from "../components/DateToday"


export default function Capricorn() {
  return (
    <main className={styles.main}>
      <DateToday />
      <div className={styles.description}>
        <p>
          Today, Aries, the heat and vibrancy of the day mirrors your own
          spirited energy. The Sun has shone steadily, just as your
          determination carries you persistently through your pursuits. However,
          just as the earth craves the refreshing rain after a long dry spell,
          remember that it's also important to cool down, refresh, and take time
          for self-care amidst the action and the go-getting.
          <br /><br />
          The summer events represent the warmth and love in your life. Cherish
          these connections, for they form the bedrock of your inner strength.
          It's also an opportunity for you to channel your natural leadership.
          Help organize activities, take the initiative in planning, but
          remember to also listen and work together with others. Your enthusiasm
          can be a catalyst for an unforgettable interaction.
          <br /><br />
          While you shine in the limelight, don't forget to also take a step
          back and gaze at the starry skies above. They can remind you of your
          place in the grand scheme of things, keeping your ego in check.
          <br /><br />
          And if you find yourself hearing the birds chirping, take a moment to
          pause and appreciate their song. It can help to bring you back to the
          present moment and remind you of the simple pleasures in life.
          <br /><br />
          Today might be a day of activity, Aries, but in this bustling
          environment, don't forget to find moments of calm. Harness the
          grounding energy of nature to keep your fiery spirit balanced.
          Remember, true leadership lies in the balance of action and
          understanding, speaking and listening, doing and being.
          <br/><br />
          Stay vibrant and resilient, Aries. Embrace the heat of the day, but
          always be ready to welcome the refreshing rain of relaxation and
          reflection when it comes.
        </p>
      </div>
    </main>
  );
}
