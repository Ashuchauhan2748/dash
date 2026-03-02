import styles from "./Sidebar.module.css";

function Sidebar({ navItems, activeIndex = 0 }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        AAJ <span className={styles.logoAccent}>swift</span>
      </div>

      <ul className={styles.navList}>
        {navItems.map((item, index) => (
          <li
            key={item}
            className={`${styles.navItem} ${index === activeIndex ? styles.navItemActive : ""}`}
          >
            {item}
          </li>
        ))}
      </ul>

      <div className={styles.bottomArea}>
        <div className={styles.notifications}>
          <span>Notifications</span>
        </div>

        <div className={styles.switchRow}>
          <button className={styles.switchButton} type="button">
            <span>Switch App</span>
            <span aria-hidden className={styles.hamburger}>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
