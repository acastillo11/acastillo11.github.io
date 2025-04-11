import { createI18n } from 'vue-i18n';
import en from './lang/en/en.json';
import es from './lang/es/es.json';
import ca from './lang/ca/ca.json';

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    es,
    ca
  },
});

export default i18n;


