import React from "react";
import { useTranslation } from "react-i18next";

const LangSelect = () => {
  const { i18n } = useTranslation();
 
  const getLanguage = () => i18n.language || window.localStorage.i18nextLng;
  //console.log('current language is: ', getLanguage());

  const handleLangChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = evt.target.value;
    //console.log('setting language to ', lang);
    i18n.changeLanguage(lang);
    //console.log('language changed to ', getLanguage());
  };

  return (
    <select onChange={handleLangChange} value={getLanguage()}>
      <option value="en">EN</option>
      <option value="ru">RU</option>
    </select>
  );
};

export { LangSelect };