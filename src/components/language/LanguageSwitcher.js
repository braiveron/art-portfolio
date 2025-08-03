import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  const nextLangLabel = i18n.language === "en" ? "ES" : "EN";

  return (
    <button onClick={toggleLanguage} className="btn lang-btn">
      {nextLangLabel}
    </button>
  );
};

export default LanguageSwitcher;
