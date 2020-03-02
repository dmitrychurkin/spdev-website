import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import Stripe from "../common/Stripe";
import styles from "./Intro.module.css";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.root}>
      <div>spdev</div>
      <Stripe actions={<div />}>
        <div className={styles.title}>
          {t(
            "intro.title",
            "Highly efficient innovative driven software development company."
          )}
        </div>
      </Stripe>
    </div>
  );
};

export default memo(Intro);
