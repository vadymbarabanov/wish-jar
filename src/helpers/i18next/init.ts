import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import ua from './translations/ua.json';

export enum LanguagesList {
  UA = 'ua',
  EN = 'en',
}

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3', // i18next::pluralResolver: Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill.
  resources: {
    en,
    ua,
  },
  lng: LanguagesList.UA, // if you're using a language detector, do not define the lng option
  fallbackLng: LanguagesList.EN,

  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});
