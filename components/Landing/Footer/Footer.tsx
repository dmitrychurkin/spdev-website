import React, { memo, FC, useRef } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18n";
import styles from "./Footer.module.css";

const { Link } = i18n;

const Footer: FC = () => {
  const { t } = useTranslation("landing");
  const nav = useRef([
    { text: t("footer.procurement", "Procurement") },
    { text: t("footer.accessibility", "Accessibility") },
    { text: t("footer.privacy", "Privacy policy") },
    { text: t("footer.quality", "Quality policy") },
    { text: t("footer.use", "Terms of use") },
  ]);
  return (
    <footer className={styles.root}>
      <div className={styles.logo} />
      <nav className={styles.nav}>
        {nav.current.map(({ text }) => (
          <div key={text} className={styles.item}>
            <Link href="/">{text}</Link>
          </div>
        ))}
      </nav>
      <div className={styles.copy}>© {new Date().getFullYear()} SPDEV</div>
    </footer>
  );
};

export default memo(Footer);
