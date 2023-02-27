import React from "react";
import styles from "./css/app.module.css";
import Header from "./components/Header";
import Main from "./components/Main";
// import Aside from "./components/Aside";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;
