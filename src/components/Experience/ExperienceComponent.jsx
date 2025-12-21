import React from "react";
import ExperienceItem from "../ExperienceItem/ExperienceItem";
import styles from "./ExperienceComponent.module.css";

const ExperienceComponent = ({ professionalExperiences }) => {
  return (
    <section className={styles.experience}>
      <h2 className={styles.title}>Professional Experience</h2>
      <div className={styles.list}>
        {professionalExperiences.map((item, index) => (
          <ExperienceItem key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceComponent;
