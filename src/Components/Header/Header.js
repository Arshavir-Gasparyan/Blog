import React from "react";
import styles from "./Header.Module.css";

export default function Header(params) {
  return (
    <header className={styles.header}>
      <div className={styles.posts}>
        <span>Blog</span>
        <span>Create Post</span>
      </div>
      <div className={styles.logIn}>
        <span>LogIn</span>
      </div>
    </header>
  );
}
