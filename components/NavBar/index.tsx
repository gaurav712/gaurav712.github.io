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
      <a href={`/${label.toLowerCase()}`}>{label}</a>
      {label === selectedItem ? <div className={styles.dot}></div> : null}
    </div>
  );
};

const NavBarEntries = ["Me", "More", "Projects"];

const NavBar = ({ selectedItem }: { selectedItem: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <ul>
          {NavBarEntries.map((label, key) => (
            <NavBarItem key={key} label={label} selectedItem={selectedItem} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
