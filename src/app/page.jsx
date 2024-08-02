import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.mainHead}>Pursue your DREAMS</h1>
        <p className={styles.mainText}>Give your ideas a space to spread...</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brandss.png" alt="mainicons" fill />
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src="/hero.jpg" alt="mainicons" fill />
      </div>
    </div>
  );
};
export default Home;
