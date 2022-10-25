import Head from "next/head";
import { useRef } from "react";
import NavBar from "../../components/NavBar";
import styles from "./styles.module.css";

const Projects = () => {
  const selectedItem = useRef("Projects");

  return (
    <>
      <Head>
        <title>My Work</title>
      </Head>
      <div className={styles.container}>
        <NavBar selectedItem={selectedItem.current} />
        <div className={styles.main}>
          <div className={styles.websiteInfoContainer}>
            <div className={styles.projectTitle}>The Website</div>
            <div className={styles.additionalInfo}>
              <span className={styles.additionalInfoHeading}>Tech</span>
              <span className={styles.additionalInfoText}>NextJS</span>
            </div>
          </div>
          <div className={styles.projectsList}></div>
        </div>
      </div>
    </>
  );
};

export default Projects;
