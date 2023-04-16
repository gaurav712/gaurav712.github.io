import Head from "next/head";
import { useRef, useState } from "react";
import NavBar from "../../components/NavBar";
import styles from "./styles.module.css";

const More = () => {
  const selectedItem = useRef("More");
  const [showScrollIndicator, setShowScrollIndicator] = useState<boolean>(true);

  const handleScroll = () => {
    setShowScrollIndicator(false);
  };

  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <div className={styles.container}>
        <NavBar selectedItem={selectedItem.current} />
        <div className={styles.parentContainer}>
          <div className={styles.detailsContainer}>
            <div className={styles.topCascadingBar} />
            <div className={styles.infoContainer} onScroll={handleScroll}>
              <div className={styles.basicInfoContainer}>
                <div className={styles.headingText}>About</div>
                <div className={styles.infoContentContainer}>
                  <p>
                    Salutations! I am a seasoned software engineer based in
                    India, presently serving as a frontend developer.
                  </p>
                  <p>
                    Beyond my professional pursuits, I am an ardent learner
                    exploring new technologies and refining my acumen. My love
                    for video games has endowed me with an innate ability to
                    approach problems with ingenuity and creativity, traits that
                    have served me well in my career.
                  </p>
                  <p>
                    With my years of experience, along with a steadfast
                    commitment to staying ahead of the curve, I am relentlessly
                    pursuing novel and challenging projects to sink my teeth
                    into!
                  </p>
                </div>
              </div>
              <div className={styles.skillsInfoContainer}>
                <div className={styles.headingText}>Skills</div>
                <div className={styles.infoContentContainer}>
                  <div className={styles.contentListEntry}>
                    <img className={styles.icon} src="/smartphone.svg" />
                    <span>React Native, Android(Kotlin), iOS(Swift)</span>
                  </div>
                  <div className={styles.contentListEntry}>
                    <img className={styles.icon} src="/pencil.svg" />
                    <span>ReactJS, HTML, CSS, JS</span>
                  </div>
                  <div className={styles.contentListEntry}>
                    <img className={styles.icon} src="/cpu.svg" />
                    <span>C/C++, Go, Rust</span>
                  </div>
                  <div className={styles.contentListEntry}>
                    <img className={styles.icon} src="/gamepad.svg" />
                    <span>Godot, Blender, Unreal Engine</span>
                  </div>
                  <div className={styles.contentListEntry}>
                    <img className={styles.icon} src="/server.svg" />
                    <span>ExpressJS</span>
                  </div>
                  <div className={styles.contentListEntry}>
                    <img className={styles.icon} src="/database.svg" />
                    <span>MySQL, MongoDB, Firebase</span>
                  </div>
                  <div className={styles.contentListEntry}>
                    <img className={styles.icon} src="/terminal.svg" />
                    <span>Linux, MacOS, FreeBSD, Windows</span>
                  </div>
                  <div className={styles.contentListEntry}>
                    <img className={styles.icon} src="/misc.svg" />
                    <span>Python, TypeScript, GIMP, Vim</span>
                  </div>
                </div>
              </div>
              <div className={styles.contactInfoContainer}>
                <div className={styles.headingText}>Reach me &#64;</div>
                <div className={styles.infoContentContainer}>
                  <div className={styles.contentListEntry}>
                    <img className={styles.icon} src="/mail.svg" />
                    <span>
                      <a href="mailto:gaurav712@protonmail.com">
                        gaurav712@protonmail.com
                      </a>
                    </span>
                  </div>
                  <div className={styles.contentListEntry}>
                    <img className={styles.icon} src="/linkedin.svg" />
                    <span>
                      <a
                        target={"_blank"}
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/gaurav712"
                      >
                        gaurav712
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bottomCascadingBar} />
            {showScrollIndicator ? (
              <svg className={styles.arrows}>
                <path className={styles.a1} d="M0 0 L30 32 L60 0"></path>
                <path className={styles.a2} d="M0 20 L30 52 L60 20"></path>
                <path className={styles.a3} d="M0 40 L30 72 L60 40"></path>
              </svg>
            ) : null}
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
