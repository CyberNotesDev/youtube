import React from "react";
import styles from "./../css/head.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <div>
          <h3>Youtube</h3>
        </div>
        <div>
          <p>Search</p>
        </div>
        <div>
          <p>Profile</p>
        </div>
      </div>
    </header>
  );
}
