import styles from "./AcademicComponent.module.css";
import AcademicItem from "../AcademicItem/AcademicItem";

function AcademicComponent({ academicData }) {
  return (
    <section className={styles.academic}>
      <h2 className={styles.title}>Academic Background</h2>

      <div className={styles.list}>
        {academicData.map((item, index) => (
          <AcademicItem
            key={index}
            degree={item.degree}
            institute={item.institute}
            year={item.year}
          />
        ))}
      </div>
    </section>
  );
}

export default AcademicComponent;
