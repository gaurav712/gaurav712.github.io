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
    icon: "/linkedin.svg",
    href: "https://www.linkedin.com/in/gaurav712",
    label: "gaurav712",
    external: true,
  },
  {
    icon: "/codeberg.svg",
    href: "https://codeberg.org/gaurav712",
    label: "https://codeberg.org/gaurav712",
    external: true,
  },
  {
    icon: "/github.svg",
    href: "https://github.com/gaurav712",
    label: "https://github.com/gaurav712",
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
              <h2 className={styles.sectionHeading}>About</h2>
              <div className={styles.sectionBody}>
                <p>
                  I am a software engineer based in India, currently working
                  as a frontend developer.
                </p>
                <p>
                  Outside of work, I keep learning new technologies. Playing
                  video games has shaped how I think about solving problems.
                </p>
                <p>
                  With several years of experience, I stay current with
                  industry trends and look for challenging projects to grow
                  with.
                </p>
              </div>
            </section>

            <div className={styles.sectionsGrid}>
              <section className={styles.section}>
                <h2 className={styles.sectionHeading}>Skills</h2>
                <div className={styles.sectionBody}>
                  <ul className={styles.skillsList}>
                    {skillEntries.map((skill) => (
                      <li key={skill.label} className={styles.contentListEntry}>
                        <img className={styles.icon} src={skill.icon} alt="" />
                        <span>{skill.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className={styles.section}>
                <h2 className={styles.sectionHeading}>Reach me &#64;</h2>
                <div className={styles.sectionBody}>
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
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default More;
