import SkillItem from "../SkillItem/SkillItem";
import styles from "./SkillsComponent.module.css";

const SkillsComponent = ({ skillsData }) => {
  return (
    <section className={styles.skills}>
      <h2 className={styles.title}>Skills</h2>

      <div className={styles.list}>
        {skillsData.map((skill, index) => (
          <SkillItem key={index} data={skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillsComponent;
