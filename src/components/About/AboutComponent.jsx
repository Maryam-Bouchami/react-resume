import styles from "./AboutComponent.module.css";

const AboutComponent = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>About Me</h2>
      <p className={styles.text}>
        WordPress Developer with a foundation in React JS, I combine technical
        skills and scientific knowledge of the human mind. My experience in web
        development enables me to design high-performance solutions, while my
        background in psychology helps me anticipate user needs and behaviors.
      </p>
    </section>
  );
};

export default AboutComponent;
