import styles from "./SkillItem.module.css";

const SkillItem = ({ data }) => {
  const { name, icon } = data;

  return (
    <div className={styles.item}>
      <img src={`/${icon}`} alt={name} className={styles.icon} />
      <span className={styles.name}>{name}</span>
    </div>
  );
};

export default SkillItem;
