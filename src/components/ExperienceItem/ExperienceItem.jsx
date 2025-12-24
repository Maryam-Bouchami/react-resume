import React from "react";
import styles from "./ExperienceItem.module.css";

const ExperienceItem = ({ data }) => {
  const { role, company, period, description } = data;

  return (
    <div className={styles.item}>
      <p className={styles.role}>{role}</p>
      <div className={styles.meta}>
        <span className={styles.company}>{company}</span>
        <span className={styles.period}>{period}</span>
      </div>
      {/* <p className={styles.description}>{description}</p> */}
    </div>
  );
};

export default ExperienceItem;
