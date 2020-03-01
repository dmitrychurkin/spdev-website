import React, { memo } from "react";
import styles from "./Preloader.module.css";

const Preloader = () => (
  <div className={styles.root}>
    <div className={styles.loader}>
      <div className={styles.ball}>
        <div />
        <div />
        <div />
      </div>
    </div>
  </div>
);

export default memo(Preloader);
