import { useRef } from "react";
import NavBar from "../components/NavBar";
import styles from "./styles.module.css";

const Home = () => {
  const selectedItem = useRef("Me");

  return (
    <div className={styles.container}>
      <NavBar selectedItem={selectedItem.current} />
      <div className={styles.infoContainer}>
        <div className={styles.avatarContainer}>
          <img
            src={"https://avatars.githubusercontent.com/u/45332121"}
            className={styles.avatar}
            alt=""
          />
        </div>
        <div className={styles.greetingContainer}>
          <div className={styles.greeting}>Hello</div>
          <div className={styles.greetingSub}>
            A Software Engineer based in UP, IN
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
