import Head from "next/head";
import { CSSProperties, useRef } from "react";
import NavBar from "../../components/NavBar";
import ProjectsList from "../../data/projects";
import Icons from "../../data/icons";
import styles from "./styles.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const timelineStyles: { [key: string]: CSSProperties } = {
  timelineContent: {
    backgroundColor: "#282828",
    boxShadow: "none",
    top: "-20px",
  },
  contentArrow: {
    borderRightColor: "#282828",
  },
  timelineIcon: {
    backgroundColor: "#fff",
    width: "1.5rem",
    height: "1.5rem",
    boxShadow: "none !important",
    marginLeft: "-0.75rem",
  },
};

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
                <span className={styles.tooltip}>
                  <img src={Icons.nextjs.iconSource} className={styles.logo} />
                  <span className={styles.tooltipText}>
                    {Icons.nextjs.tooltipText}
                  </span>
                </span>
                <span className={styles.tooltip}>
                  <img
                    src={Icons.typescript.iconSource}
                    className={styles.logo}
                  />
                  <span className={styles.tooltipText}>
                    {Icons.typescript.tooltipText}
                  </span>
                </span>
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
                  href="https://github.com/gaurav712/gaurav712.github.io"
                >
                  https://github.com/gaurav712/gaurav712.github.io
                </a>
              </div>
            </div>
          </div>
          <div className={styles.projectsList}>
            <VerticalTimeline animate={false} lineColor="grey">
              {ProjectsList.map((item, index) => (
                <VerticalTimelineElement
                  key={index}
                  date={`${index}`}
                  contentStyle={timelineStyles.timelineContent}
                  contentArrowStyle={timelineStyles.contentArrow}
                  iconStyle={timelineStyles.timelineIcon}
                >
                  <div className={styles.projectInfoContainer}>
                    <div className={styles.projectTitle}>{item.name}</div>
                    <div className={styles.additionalInfo}>
                      <div className={styles.techUsedInfo}>
                        {item.techUsed.map((tech, index) => (
                          <span key={`${index}`} className={styles.tooltip}>
                            <img
                              src={Icons[tech].iconSource}
                              className={styles.logo}
                            />
                            <span className={styles.tooltipText}>
                              {Icons[tech].tooltipText}
                            </span>
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
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
