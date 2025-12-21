import styles from "./PictureComponent.module.css";

const PictureComponent = () => {
  return (
    <section className={styles.picture}>
      <img src="/picture.jpg" alt="Profile" className={styles.image} />
    </section>
  );
};

export default PictureComponent;
