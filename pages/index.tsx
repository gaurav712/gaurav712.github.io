import { useRef } from "react";
import NavBar from "../components/NavBar";
import styles from "./styles.module.css";

const Home = () => {
  const selectedItem = useRef("Me");

  return (
    <div className={styles.container}>
      <NavBar selectedItem={selectedItem.current} />
    </div>
  );
};

export default Home;
