import { useRef } from "react";
import NavBar from "../../components/NavBar";
import styles from "./styles.module.css";

const Projects = () => {
  const selectedItem = useRef("Projects");

  return (
    <div className={styles.container}>
      <NavBar selectedItem={selectedItem.current} />
      <div className={styles.main}>
        <div className={styles.pendingText}>Under Development</div>
      </div>
    </div>
  );
};

export default Projects;
