import React, { FC, memo } from "react";
import clsx from "clsx";
import styles from "./Menu.module.css";
import { useTranslation } from "react-i18next";

const Menu: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.root}>
      <button
        className={clsx(styles.hamburger, styles.hamburgerSqueeze)}
        type="button"
        tabIndex={0}
        aria-label="Menu"
        aria-controls="navigation"
      >
        <span className={styles.hamburgerBox}>
          <span className={styles.hamburgerInner} />
        </span>
      </button>
      <div id="navigation">{t("menu")}</div>
    </div>
  );
};

export default memo(Menu);
