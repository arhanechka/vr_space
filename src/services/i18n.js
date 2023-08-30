import i18next from "i18next";

import { initReactI18next } from "react-i18next";
import translationEN from './locales/en/translation.json';
import translationPT from './locales/pt/translation.json';
import translationRU from './locales/ru/translation.json';


    const resources = {
        en: {
          translation: translationEN
        },
        pt: {
            translation: translationPT
          },
          ru: {
            translation: translationRU
          },
      };

i18next

  .use(initReactI18next)

  .init({

    resources,

    lng: "pt",

    interpolation: {

      escapeValue: false,

    },

  });

export default i18next;