import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";
const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image src={post.img} alt="" fill className={styles.img} />
          </div>
        )}
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.desc}>{post.body}</div>
        <Link href={`/blog/${post.id}`} className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
