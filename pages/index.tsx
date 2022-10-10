import type { NextPage } from "next";
import { useState } from "react";
import styles from "./styles.module.css";

const NavBarItem = ({
  label,
  selectedItem,
}: {
  label: string;
  selectedItem: string;
}) => {
  return (
    <div className={styles.navbarItem}>
      <li>{label}</li>
      {label === selectedItem ? <div className={styles.dot}></div> : null}
    </div>
  );
};

const Home: NextPage = () => {
  const [selectedItem, setSelectedItem] = useState("More");

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <ul>
          <NavBarItem label="Me" selectedItem={selectedItem} />
          <NavBarItem label="More" selectedItem={selectedItem} />
          <NavBarItem label="Projects" selectedItem={selectedItem} />
        </ul>
      </div>
    </div>
  );
};

export default Home;
