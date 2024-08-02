"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./postPage.module.css";
import PostUser from "@/components/postUser/postUser";

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const PostPage = ({ params }) => {
  const { slug } = params;
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await getData(slug);
        setPost(postData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPost();
  }, [slug]);

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (!post) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/hero.jpg" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.details}>
          <div className={styles.avatar}>
            <Image src="/noavatar.jpg" alt="" fill className={styles.img} />
          </div>
          <PostUser userId={post.userId} />
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>Published</div>
            <div className={styles.detailValue}>01.01.2024</div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        {post.body}
      </div>
    </div>
  );
};

export default PostPage;

