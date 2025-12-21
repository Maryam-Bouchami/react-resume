import styles from "./AcademicItem.module.css";

function AcademicItem({ degree, institute, year }) {
  return (
    <div className={styles.item}>
      <h3 className={styles.degree}>{degree}</h3>
      <p className={styles.institute}>{institute}</p>
      <span className={styles.year}>{year}</span>
    </div>
  );
}

export default AcademicItem;
