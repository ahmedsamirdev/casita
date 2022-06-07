import Entries from "../public/Entries.json";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import useSWR from "swr";

function Cities({ setCoord, setSentiment, setMessage }) {
  const sentimentColor = [
    { marker: "/marker-red.png", sentiment: "Negative" },
    { marker: "/marker-green.png", sentiment: "Positive" },
    { marker: "/marker-blue.png", sentiment: "Neutrual" },
  ];
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  return (
    <div className={styles.cities_container}>
      <h3>Select your city:</h3>
      {Entries.Entries.Entry.map((entry, index) => {
        const { data, error } = useSWR(
          `/api/checker?q=${entry.message}`,
          fetcher
        );
        if (error) return <div key={index}>failed to load</div>;
        if (!data) return <div key={index}>loading...</div>;
        return (
          <p
            // Use UUID instead of index as unique key
            key={index}
            onClick={() => {
              setMessage(entry.message);
              setSentiment(entry.sentiment);
              setCoord([data.lat, data.lon]);
            }}
            className={styles.card}
          >
            <span>
              {index + 1}. {entry.message}
            </span>
          </p>
        );
      })}
      {/* Sentiment Color Guide */}
      <div className={styles.guide_container}>
        <details className={styles.details} open>
          <summary className={styles.pointer}>
            <strong>Sentiment Color Guide</strong>
          </summary>
          {sentimentColor.map((color, index) => (
            <li key={index} className={styles.guide_block}>
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
