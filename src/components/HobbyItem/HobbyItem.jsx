import React from "react";
import styles from "./HobbyItem.module.css";

const HobbyItem = ({ data }) => {
  const { name, icon } = data;

  return (
    <div className={styles.item}>
      <img src={`/${icon}`} alt={name} className={styles.icon} />
      <span className={styles.name}>{name}</span>
    </div>
  );
};

export default HobbyItem;
