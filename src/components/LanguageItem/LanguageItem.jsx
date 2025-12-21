import React from "react";
import styles from "./LanguageItem.module.css";

const LanguageItem = ({ data }) => {
  const { language, level } = data;

  return (
    <div className={styles.item}>
      <span className={styles.language}>{language}</span>
      <span className={styles.level}>{level}</span>
    </div>
  );
};

export default LanguageItem;
