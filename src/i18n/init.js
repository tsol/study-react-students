import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './langs/en.js';
import ru from './langs/ru.js';

i18n.use(initReactI18next).init({
  resources: {
    en,
    ru,
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
