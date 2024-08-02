import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.head}>Blogger</h2>
        <p className={styles.text}>Get your Dreams turn into Reality</p>
        <p className={styles.para}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          voluptas, at et amet quasi iure sit ad ut vitae quaerat sapiente
          asperiores debitis sint? Aliquid fugiat deserunt molestiae soluta
          maxime.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <div className={styles.num}>10k+</div>
            <div className={styles.info}>Subscribers</div>
          </div>
          <div className={styles.box}>
            <div className={styles.num}>50k+</div>
            <div className={styles.info}>Blogs</div>
          </div>
          <div className={styles.box}>
            <div className={styles.num}>8k+</div>
            <div className={styles.info}>Daily Reads</div>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.jpg" alt="About Image" fill />
      </div>
    </div>
  );
};

export default AboutPage;

