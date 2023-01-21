import Head from "next/head";
import { useRef } from "react";
import NavBar from "../components/NavBar";
import styles from "./styles.module.css";

const Home = () => {
  const selectedItem = useRef("Me");

  return (
    <>
      <Head>
        <title>Gaurav Kumar Yadav</title>
        <meta name="description" content="My Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.container}>
        <NavBar selectedItem={selectedItem.current} />
        <div className={styles.infoContainer}>
          <div className={styles.avatarContainer}>
            <img
              src={"/technologies.svg"}
              className={styles.avatarBackground}
              alt=""
            />
            <img src={"/image.png"} className={styles.avatar} alt="" />
          </div>
          <div className={styles.greetingContainer}>
            <div className={styles.greeting}>Hello!</div>
            <div className={styles.greetingSub}>
              I&apos;m a Software Engineer based in UP, IN
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
