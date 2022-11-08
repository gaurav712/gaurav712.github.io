import Head from "next/head";
import { useRef } from "react";
import NavBar from "../../components/NavBar";
import { projects, techIcons } from "../../data";
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
            {projects.map((item, index) => (
              <div key={`${index}`} className={styles.projectInfoContainer}>
                <div className={styles.projectTitle}>{item.name}</div>
                <div className={styles.additionalInfo}>
                  <div className={styles.techUsedInfo}>
                    {item.techUsed.map((tech, index) => (
                      <span key={`${index}`}>
                        <img src={techIcons[tech]} className={styles.logo} />
                      </span>
                    ))}
                  </div>
                  <div
                    className={styles.additionalInfoText}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
                <div className={styles.techUsedInfo}>
                  <img src="/github.svg" className={styles.githubLogo} />
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    className={styles.sourceUrl}
                    href={item.sourceUrl}
                  >
                    {item.sourceUrl}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
