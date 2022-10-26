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
            <div className={styles.projectTitle}>The Portfolio</div>
            <div className={styles.additionalInfo}>
              <div className={styles.techUsedInfo}>
                <img src="/nextjs.svg" className={styles.logo} />
              </div>
              <div className={styles.additionalInfoText}>
                Uses grayscale color palette, intended to be <b>simple</b> yet{" "}
                <i>informative</i>, <b>monochrome</b> yet <i>flashy enough</i>,{" "}
                <b>barebones</b> yet <i>responsive</i>.
              </div>
              <div className={styles.techUsedInfo}>
                <img src="/github.svg" className={styles.githubLogo} />
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  className={styles.sourceUrl}
                  href="https://github.com/gaurav712.github.io"
                >
                  https://github.com/gaurav712.github.io
                </a>
              </div>
            </div>
          </div>
          <div className={styles.projectsList}>
            <div className={styles.projectInfoContainer}>Hello</div>
            <div className={styles.projectInfoContainer}>Hello</div>
            <div className={styles.projectInfoContainer}>Hello</div>
            <div className={styles.projectInfoContainer}>Hello</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
