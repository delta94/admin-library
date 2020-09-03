import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enUS from './en-us';
import ruRU from './ru-ru';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      'en-US': enUS,
      'ru-RU': ruRU,
    },
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false,
    },
  });

export { i18n };
