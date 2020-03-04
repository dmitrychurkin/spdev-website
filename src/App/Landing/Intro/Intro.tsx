import React, { memo } from "react";
import { Trans } from "react-i18next";
import Stripe from "../common/Stripe";
import Button from "../common/Button";
import styles from "./Intro.module.css";

const Intro = () => {
  // const { t } = useTranslation();
  return (
    <div className={styles.root}>
      <div className={styles.logo}>SPDev</div>
      <Stripe className={styles.stripe}>
        <div className={styles.text}>
          <div className={styles.title}>
            <Trans i18nKey="intro.title">
              <b>Highly efficient</b> innovative driven software development company.
            </Trans>
          </div>
          <div className={styles.sub}>
            <Trans i18nKey="intro.sub">
              We deliver business and technology innovations from scratch <br /> by using value-added solutions.
            </Trans>
          </div>
        </div>
        <Button type="button" className={styles.btn}>contact us</Button>
      </Stripe>
    </div>
  );
};

export default memo(Intro);
