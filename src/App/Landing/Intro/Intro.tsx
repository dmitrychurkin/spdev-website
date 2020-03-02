import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Intro.module.css";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.root}>
      <div>spdev</div>
      <div className={styles.stripe}>
        <div>
          {t(
            "Highly efficient innovative driven software development company."
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(Intro);
