import React, { memo, FC, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Preloader from "./Preloader";
import styles from "./App.module.css";

const App: FC = () => {
  const { t, i18n } = useTranslation();
  const [isPreloaderVisible, setPreloaderState] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => setPreloaderState(false), 2000);
    return () => clearTimeout(timerId);
  }, []);

  return (
    <>
      {isPreloaderVisible ? (
        <Preloader />
      ) : (
        <div className={styles.root}>
          <h1>Current language {i18n.language}</h1>
          <h2>{t("hello")}</h2>
        </div>
      )}
    </>
  );
};

export default memo(App);
