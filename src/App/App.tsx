import React, { memo, FC } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";

const App: FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>Current language {i18n.language}</h1>
      <h2>{t("hello")}</h2>
    </div>
  );
};

export default memo(App);
