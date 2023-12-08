import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { eng, rus, ukr } from "../constants/languages";

  i18n
  .use(initReactI18next)
  .init( {
    fallbackLng: 'ru',
    // lng: lang,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: eng
      },
      ua: {
        translation: ukr
      },
      ru: {
        translation: rus
      },
    },
  });

export default i18n;