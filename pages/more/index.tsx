import { useRef } from "react";
import NavBar from "../../components/NavBar";
import styles from "./styles.module.css";

const More = () => {
  const selectedItem = useRef("More");

  return (
    <div className={styles.container}>
      <NavBar selectedItem={selectedItem.current} />
    </div>
  );
};

export default More;
