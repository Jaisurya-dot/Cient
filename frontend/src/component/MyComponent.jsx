import React from "react";
import { useLanguage } from "../context/LanguageProvider";


const MyComponent = () => {
  const { t } = useLanguage();
  return (
    <>

      <h1>{t("greeting")}</h1>
      <p>{t('paragraph')}</p>;

    </>
  )
};

export default MyComponent;
