import Entries from "../public/Entries.json";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function Cities({ setCoord }) {
  const sentimentColor = [
    { marker: "/marker-red.png", sentiment: "Negative" },
    { marker: "/marker-green.png", sentiment: "Positive" },
    { marker: "/marker-blue.png", sentiment: "Neutrual" },
  ];

  return (
    <div className={styles.cities_container}>
      <h3>Select your city:</h3>
      {Entries.Entries.Entry.map((entry) => (
        <p
          key={entry.message}
          onClick={() => setCoord([entry.lat, entry.long])}
          className={styles.card}
        >
          <span>{entry.message}</span>
        </p>
      ))}
      {/* Sentiment Color Guide */}
      <div className={styles.guide_container}>
        <details className={styles.details} open>
          <summary className={styles.pointer}>
            <strong>Sentiment Color Guide</strong>
          </summary>
          {sentimentColor.map((color) => (
            <li key={color.marker} className={styles.guide_block}>
              <Image
                alt="sentiment"
                src={color.marker}
                width={20}
                height={30}
              />
              <span className={styles.sentiment}>{color.sentiment}</span>
            </li>
          ))}
        </details>
      </div>
    </div>
  );
}

export default Cities;
