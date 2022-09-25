import React from "react";
import styles from "./css/app.module.css";
import { Header } from "./components/Header";
import { Aside } from "./components/Aside";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Aside />
      </main>
    </div>
  );
}

export default App;
