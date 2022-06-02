import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import Cities from "../components/Cities";
import Head from "next/head";

const Map = dynamic(() => import("../components/Maps"), { ssr: false });

function Index() {
  const [coord, setCoord] = useState([30.04442, 31.235712]);

  return (
    <>
      <Head>
        <title>Select your city:</title>
      </Head>
      <div className={styles.page_container}>
        <div className={styles.map}>
          <Map coord={coord} />
        </div>
        <div className={styles.city}>
          <Cities setCoord={setCoord} />
        </div>
      </div>
    </>
  );
}

export default Index;
