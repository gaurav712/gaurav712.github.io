import Head from "next/head";
import NavBar from "../../components/NavBar";
import styles from "./styles.module.css";

const skillEntries = [
  { icon: "/smartphone.svg", label: "React Native, Android(Kotlin), iOS(Swift)" },
  { icon: "/pencil.svg", label: "ReactJS, HTML, CSS, JS" },
  { icon: "/cpu.svg", label: "C/C++, Go, Rust" },
  { icon: "/gamepad.svg", label: "Godot, Blender, Unreal Engine" },
  { icon: "/server.svg", label: "ExpressJS, Golang" },
  { icon: "/database.svg", label: "MySQL, MongoDB, Firebase" },
  { icon: "/terminal.svg", label: "Linux, MacOS, FreeBSD, Windows" },
  { icon: "/misc.svg", label: "Python, TypeScript, GIMP, Vim" },
  { icon: "/zap.svg", label: "GenAI & LLM, Prompt Engineering" },
];

const contactEntries = [
  {
    icon: "/mail.svg",
    href: "mailto:gaurav712@protonmail.com",
    label: "gaurav712@protonmail.com",
  },
  {
    icon: "/github.svg",
    href: "https://github.com/gaurav712",
    label: "gaurav712",
    external: true,
  },
  {
    icon: "/codeberg.svg",
    href: "https://codeberg.org/gaurav712",
    label: "gaurav712",
    external: true,
  },
  {
    icon: "/linkedin.svg",
    href: "https://www.linkedin.com/in/gaurav712",
    label: "gaurav712",
    external: true,
  },
];

const More = () => {
  const selectedItem = "More";

  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <div className={styles.container}>
        <NavBar selectedItem={selectedItem} />
        <div className={styles.main}>
          <div className={styles.page}>
            <section className={styles.section}>
              <h2 className={styles.headingText}>About</h2>
              <div className={styles.aboutText}>
                <p>
                  Salutations! I am a seasoned software engineer based in
                  India, presently serving as a frontend developer.
                </p>
                <p>
                  Beyond my professional pursuits, I am an ardent learner
                  exploring new technologies. My love for video games has
                  endowed me with the ability to approach problems with a
                  unique approach.
                </p>
                <p>
                  With my years of experience, along with a steadfast
                  commitment to staying ahead of the curve, I am relentlessly
                  pursuing novel and challenging projects to sink my teeth
                  into!
                </p>
              </div>
            </section>

            <div className={styles.lowerGrid}>
              <section className={styles.section}>
                <h2 className={styles.headingText}>Skills</h2>
                <ul className={styles.skillsList}>
                  {skillEntries.map((skill) => (
                    <li key={skill.label} className={styles.contentListEntry}>
                      <img className={styles.icon} src={skill.icon} alt="" />
                      <span>{skill.label}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className={styles.section}>
                <h2 className={styles.headingText}>Reach me &#64;</h2>
                <ul className={styles.contactList}>
                  {contactEntries.map((entry) => (
                    <li key={entry.href} className={styles.contentListEntry}>
                      <img className={styles.icon} src={entry.icon} alt="" />
                      <span>
                        <a
                          href={entry.href}
                          target={entry.external ? "_blank" : undefined}
                          rel={entry.external ? "noreferrer" : undefined}
                        >
                          {entry.label}
                        </a>
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default More;
