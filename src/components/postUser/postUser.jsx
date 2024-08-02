"use client"
import React, { useState, useEffect } from "react";
import styles from "./postUser.module.css";

const getData = async (userId) => {
  const res = await fetch(`/api/users/${userId}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const PostUser = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getData(userId);
        setUser(userData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [userId]);

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (!user) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>{user.name}</div>
      <div className={styles.username}>{user.username}</div>
    </div>
  );
};

export default PostUser;
