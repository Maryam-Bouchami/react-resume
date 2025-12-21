import styles from "./ContactItem.module.css";

const ContactItem = ({ label, value }) => {
  return (
    <div className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
};

export default ContactItem;
