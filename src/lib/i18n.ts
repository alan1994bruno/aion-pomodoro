import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 1. Importa o Português
import ptCommon from '../locales/pt/common.json';
import ptTimer from '../locales/pt/timer.json';
import ptMisc from '../locales/pt/misc.json';

// 2. Importa o Inglês
import enCommon from '../locales/en/common.json';
import enTimer from '../locales/en/timer.json';
import enMisc from '../locales/en/misc.json';

// 3. Importa o Francês
import frCommon from '../locales/fr/common.json';
import frTimer from '../locales/fr/timer.json';
import frMisc from '../locales/fr/misc.json';

// 4. Importa o Espanhol
import esCommon from '../locales/es/common.json';
import esTimer from '../locales/es/timer.json';
import esMisc from '../locales/es/misc.json';

// 5. Importa o Japonês
import jpCommon from '../locales/jp/common.json';
import jpTimer from '../locales/jp/timer.json';
import jpMisc from '../locales/jp/misc.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        common: ptCommon,
        timer: ptTimer,
        misc: ptMisc,
      },
      en: {
        common: enCommon,
        timer: enTimer,
        misc: enMisc,
      },
      es: {
        common: esCommon,
        timer: esTimer,
        misc: esMisc,
      },
      fr: {
        common: frCommon,
        timer: frTimer,
        misc: frMisc,
      },
      jp: {
        common: jpCommon,
        timer: jpTimer,
        misc: jpMisc,
      },
    },
    defaultNS: 'common', // Se você usar t('palavra') sem namespace, ele procura aqui
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
