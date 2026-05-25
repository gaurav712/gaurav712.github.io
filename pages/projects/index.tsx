import Head from "next/head";
import { useState } from "react";
import NavBar from "../../components/NavBar";
import {
  getFeaturedProjects,
  getTimelineGroups,
  projectTypes,
} from "../../data/projects";
import Icons from "../../data/icons";
import { IProject } from "../../data/types";
import styles from "./styles.module.css";

const hasValidSource = (url: string) => url && url !== "_";

type ProjectCardProps = {
  project: IProject;
  period?: string;
  featured?: boolean;
};

const ProjectCard = ({ project, period, featured }: ProjectCardProps) => (
  <article
    className={`${styles.card} ${featured ? styles.cardFeatured : ""}`}
  >
    <header className={styles.cardHeader}>
      <div className={styles.cardHeading}>
        {featured && <span className={styles.featuredBadge}>Highlight</span>}
        <h3 className={styles.cardTitle}>{project.name}</h3>
        {period && <time className={styles.cardPeriod}>{period}</time>}
      </div>
      <div className={styles.cardTech}>
        {project.techUsed.map((tech, index) => (
          <span key={index} className={styles.tooltip}>
            <img src={Icons[tech].iconSource} className={styles.logo} alt="" />
            <span className={styles.tooltipText}>
              {Icons[tech].tooltipText}
            </span>
          </span>
        ))}
      </div>
    </header>
    <div
      className={styles.cardDescription}
      dangerouslySetInnerHTML={{ __html: project.description }}
    />
    {hasValidSource(project.sourceUrl) && (
      <footer className={styles.cardFooter}>
        <img
          src={
            project.sourceUrl.includes("github.com")
              ? "/github.svg"
              : "/earth.svg"
          }
          className={styles.githubLogo}
          alt=""
        />
        <a
          target="_blank"
          rel="noreferrer"
          className={styles.sourceUrl}
          href={project.sourceUrl}
        >
          {project.sourceUrl}
        </a>
      </footer>
    )}
  </article>
);

const Projects = () => {
  const selectedItem = "Projects";
  const [activeTab, setActiveTab] = useState<string>(projectTypes[0]);
  const featured = getFeaturedProjects(activeTab);
  const timelineGroups = getTimelineGroups(activeTab);

  const toggleProjectType = () => {
    setActiveTab((current) =>
      current === projectTypes[0] ? projectTypes[1] : projectTypes[0]
    );
  };

  return (
    <>
      <Head>
        <title>My Work</title>
      </Head>
      <div className={styles.container}>
        <NavBar selectedItem={selectedItem} />
        <div className={styles.main}>
          <article className={`${styles.card} ${styles.portfolioCard}`}>
            <header className={styles.cardHeader}>
              <div className={styles.cardHeading}>
                <h3 className={styles.cardTitle}>The Portfolio</h3>
              </div>
              <div className={styles.cardTech}>
                <span className={styles.tooltip}>
                  <img
                    src={Icons.nextjs.iconSource}
                    className={styles.logo}
                    alt=""
                  />
                  <span className={styles.tooltipText}>
                    {Icons.nextjs.tooltipText}
                  </span>
                </span>
                <span className={styles.tooltip}>
                  <img
                    src={Icons.typescript.iconSource}
                    className={styles.logo}
                    alt=""
                  />
                  <span className={styles.tooltipText}>
                    {Icons.typescript.tooltipText}
                  </span>
                </span>
              </div>
            </header>
            <p className={styles.cardDescription}>
              Uses grayscale color palette, intended to be <b>simple</b> yet{" "}
              <i>informative</i>, <b>monochrome</b> yet <i>flashy enough</i>,{" "}
              <b>barebones</b> yet <i>responsive</i>.
            </p>
            <footer className={styles.cardFooter}>
              <img src="/github.svg" className={styles.githubLogo} alt="" />
              <a
                target="_blank"
                rel="noreferrer"
                className={styles.sourceUrl}
                href="https://github.com/gaurav712/gaurav712.github.io"
              >
                https://github.com/gaurav712/gaurav712.github.io
              </a>
            </footer>
          </article>

          <div
            className={`${styles.projectTypeSwitcher} ${styles.tabBar}`}
            onClick={toggleProjectType}
            role="tablist"
            aria-label="Project category"
          >
            <div
              className={`${styles.projectTypeSwitcherElement} ${
                activeTab === projectTypes[1]
                  ? styles.secondItemSelected
                  : styles.firstItemSelected
              }`}
            />
            {projectTypes.map((type, key) => (
              <span
                key={key}
                className={styles.tabTitle}
                role="tab"
                aria-selected={activeTab === type}
              >
                {type}
              </span>
            ))}
          </div>

          <section className={styles.showcase}>
            {featured.length > 0 && (
              <div className={styles.featuredSection}>
                <h2 className={styles.sectionLabel}>Highlights</h2>
                <div className={styles.featuredGrid}>
                  {featured.map((project) => (
                    <ProjectCard
                      key={`${project.period}-${project.name}`}
                      project={project}
                      period={project.period}
                      featured
                    />
                  ))}
                </div>
              </div>
            )}

            <div className={styles.timeline}>
              <h2 className={styles.sectionLabel}>Timeline</h2>
              {timelineGroups.map((group) => (
                <div key={group.period} className={styles.timelineGroup}>
                  <div className={styles.timelineRail}>
                    <span className={styles.timelineDot} />
                    <time className={styles.timelinePeriod}>{group.period}</time>
                  </div>
                  <div className={styles.timelineCards}>
                    {group.items.map((project) => (
                      <ProjectCard
                        key={project.name}
                        project={project}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Projects;
