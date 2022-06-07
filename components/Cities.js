import Entries from "../public/Entries.json";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

function Cities({ setCoord, setSentiment, message, setMessage }) {
  const [data, setData] = useState({});
  const sentimentColor = [
    { marker: "/marker-red.png", sentiment: "Negative" },
    { marker: "/marker-green.png", sentiment: "Positive" },
    { marker: "/marker-blue.png", sentiment: "Neutrual" }
  ];

  useEffect(() => {
    fetch(`/api/checker?q=${message}`)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setCoord([response.lat, response.lon]);
      });
  }, [message]);

  return (
    <div className={styles.cities_container}>
      <h3>Select your city:</h3>
      {Entries.Entries.Entry.map((entry, index) => {
        if (!data) return <div key={index}>loading...</div>;
        return (
          <p
            // Use UUID instead of index as unique key
            key={index}
            onClick={() => {
              setMessage(entry.message);
              setSentiment(entry.sentiment);
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
