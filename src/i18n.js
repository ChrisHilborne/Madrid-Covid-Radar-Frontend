import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';


i18n
  //set translation collection method
  .use(Backend) 
  // detect user language
  .use(LanguageDetector)
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: ['es', 'en'],
    fallbackLng: 'es',
    backend: {
      /* translation file path */
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    ns: ['translation','cookie_policy', 'privacy_policy'],
    defaultNS: 'translation',
    fallbackNS: 'translation',
    debug: true,
    detection: {
        order: ['queryString', 'cookie'],
        cache: ['cookie']
    },
    interpolation: {
      escapeValue: false, 
    }
  });

  


export default i18n;