import ContactItem from "../ContactItem/ContactItem";
import styles from "./ContactComponent.module.css";

const Contact = ({ contactData }) => {
  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>Contact</h2>

      <div className={styles.list}>
        {contactData.map((item, index) => (
          <ContactItem key={index} label={item.label} value={item.value} />
        ))}
      </div>
    </section>
  );
};

export default Contact;
