import 'i18next';

// 1. Importamos os arquivos JSON de APENAS UM idioma (o seu idioma base de desenvolvimento).
// O TypeScript usará este arquivo como o "molde" para saber quais chaves existem.
import common from '../locales/pt/common.json';
import timer from '../locales/pt/timer.json';
import misc from '../locales/pt/misc.json';

declare module 'i18next' {
  // 2. Estendemos as opções de tipo nativas do i18next
  interface CustomTypeOptions {
    // Define qual é o namespace padrão para evitar erros no ts
    defaultNS: 'common';

    // 3. Mapeamos cada namespace para o tipo gerado a partir do seu respectivo JSON
    resources: {
      common: typeof common;
      timer: typeof timer;
      misc: typeof misc;
    };
  }
}
