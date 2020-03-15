import React, { memo } from "react";
import { Trans, useTranslation } from "react-i18next";
import Stripe from "../common/Stripe";
import Button from "../common/Button";
import styles from "./Intro.module.css";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.root}>
      <Stripe className={styles.main}>
        <div className={styles.text}>
          <div className={styles.logo}>
            <span className={styles.logoText}>SPDev</span>
          </div>
          <div className={styles.title}>
            <Trans i18nKey="intro.title">
              <b>Highly efficient</b> innovative driven software development
              company.
            </Trans>
          </div>
          <div className={styles.sub}>
            <Trans i18nKey="intro.sub">
              We deliver business and technology innovations from scratch <br />{" "}
              by using value-added solutions.
            </Trans>
          </div>
        </div>
        <Button type="button" className={styles.btn}>
          contact us
        </Button>
      </Stripe>
      <div className={styles.bottomText}>
        <div>{t('bottom', 'software of your success')}</div>
        <svg className={styles.icon}>
          <use xlinkHref="#arrow_down" />
        </svg>
      </div>
    </div>
  );
};

export default memo(Intro);
