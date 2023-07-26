import React, { useState } from "react";
import styles from "./styles.module.css";
const Loader = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.palito}></div>
      <div className={styles.palito}></div>
      <div className={styles.palito}></div>
      <div className={styles.palito}></div>
      <div className={styles.palito}></div>
      <div className={styles.palito}></div>
      <div className={styles.palito}></div>
      <div className={styles.palito}></div>
      <div className={styles.palito}></div>
      <div className={styles.palito}></div>
      <div className={styles.palito}></div>
      <div className={styles.palito}></div>
    </div>
  );
};

export default Loader;
