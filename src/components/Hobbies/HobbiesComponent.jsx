import HobbyItem from "../HobbyItem/HobbyItem";
import styles from "./HobbiesComponent.module.css";

const hobbiesData = [
  { name: "Music", icon: "music.png" },
  { name: "Coding", icon: "coding.png" },
  { name: "Psychology", icon: "brain.png" },
  { name: "Reading", icon: "book.png" },
];

const HobbiesComponent = () => {
  return (
    <section className={styles.hobbies}>
      <h2 className={styles.title}>Hobbies & Interests</h2>
      <div className={styles.list}>
        {hobbiesData.map((hobby, index) => (
          <HobbyItem key={index} data={hobby} />
        ))}
      </div>
    </section>
  );
};

export default HobbiesComponent;
