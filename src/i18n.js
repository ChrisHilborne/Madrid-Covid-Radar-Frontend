import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';


const fallbackLng = ['es'];
const availableLanguages = ['en', 'es'];

const options = {

  order: ['localStorage', 'navigator'],

  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ['localStorage', 'cookie'],

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: 'covidRadarMadrid',

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // only detect languages that are in the whitelist
  checkWhitelist: true
}

const backend = {
  /* translation file path */
  loadPath: '/locales/{{lng}}/{{ns}}.json'
}


i18n
  //set translation collection method
  .use(Backend) 
  // detect user language
  .use(LanguageDetector)
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng,
    whitelist: availableLanguages,
    backend,
    ns: ['translation','cookie_policy', 'privacy_policy'],
    defaultNS: 'translation',
    fallbackNS: 'translation',
    detection: options,
    interpolation: {
      escapeValue: false, 
    }
  });

  


export default i18n;