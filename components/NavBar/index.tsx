import styles from "./styles.module.css";
import { INavBarEntries } from "./types";

const NavBarEntries: INavBarEntries = {
  Me: "/",
  More: "/more",
  Projects: "/projects",
};

const NavBarItem = ({
  label,
  selectedItem,
}: {
  label: string;
  selectedItem: string;
}) => {
  return (
    <div className={styles.navbarItem}>
      <a href={NavBarEntries[label]}>{label}</a>
      {label === selectedItem ? <div className={styles.dot}></div> : null}
    </div>
  );
};

const NavBar = ({ selectedItem }: { selectedItem: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <ul>
          {Object.keys(NavBarEntries).map((label, key) => (
            <NavBarItem key={key} label={label} selectedItem={selectedItem} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
