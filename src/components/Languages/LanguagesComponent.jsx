import React from "react";
import LanguageItem from "../LanguageItem/LanguageItem";
import styles from "./LanguagesComponent.module.css";

const languagesData = [
  { language: "Arabic", level: "Native Speaker" },
  { language: "French", level: "Near to Native Speaker" },
  { language: "English", level: "Professional Level" },
];

const LanguagesComponent = () => {
  return (
    <section className={styles.languages}>
      <h2 className={styles.title}>Languages</h2>
      <div className={styles.list}>
        {languagesData.map((item, index) => (
          <LanguageItem key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default LanguagesComponent;
