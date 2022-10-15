import Head from "next/head";
import { useRef } from "react";
import NavBar from "../../components/NavBar";
import styles from "./styles.module.css";

const More = () => {
  const selectedItem = useRef("More");

  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <div className={styles.container}>
        <NavBar selectedItem={selectedItem.current} />
        <div className={styles.infoContainer}>
          <div className={styles.detailsContainer}>
            <div className={styles.contactInfoContainer}>Something</div>
            <div className={styles.skillsInfoContainer}>Something Else</div>
          </div>
          <div className={styles.avatarContainer}>
            <img
              src={"/technologies.svg"}
              className={styles.avatarBackground}
              alt=""
            />
            <img src={"/image.png"} className={styles.avatar} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default More;
