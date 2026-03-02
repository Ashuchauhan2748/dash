import buttonStyles from "../common/Button.module.css";
import styles from "./PageHeader.module.css";

function PageHeader({ title, subtitle }) {
  return (
    <div className={styles.pageHeader}>
      <div className={styles.titleBlock}>
        <div className={styles.breadcrumb}>
          <span>Carrier Management</span>
          <span className={styles.breadcrumbSep}>›</span>
          <span className={styles.breadcrumbCurrent}>Rate Chart</span>
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <button
        className={`${buttonStyles.button} ${buttonStyles.ghost} ${buttonStyles.topAction}`}
        type="button"
      >
        Cancel
      </button>
    </div>
  );
}

export default PageHeader;
