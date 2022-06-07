import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import Cities from "../components/Cities";
import Head from "next/head";

// Disable srr for Maps component {error:"window is not defined"}
const Map = dynamic(() => import("../components/Maps"), { ssr: false });

function Index() {
  const [coord, setCoord] = useState([30.04442, 31.235712]);
  const [message, setMessage] = useState("It is very hot in, Cairo");
  const [sentiment, setSentiment] = useState("Neutrual");
  
  return (
    <>
      <Head>
        <title>Select your city:</title>
      </Head>
      <div className={styles.page_container}>
        <div className={styles.map}>
          <Map coord={coord} message={message} sentiment={sentiment} />
        </div>
        <div className={styles.city}>
          <Cities
            message={message}
            setCoord={setCoord}
            setMessage={setMessage}
            setSentiment={setSentiment}
          />
        </div>
      </div>
    </>
  );
}

export default Index;
