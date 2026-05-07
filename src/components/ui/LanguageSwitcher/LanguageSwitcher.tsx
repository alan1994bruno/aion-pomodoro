import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

const SUPPORTED_LANGUAGES = {
  pt: { label: 'Português', flag: '🇧🇷' },
  en: { label: 'English', flag: '🇺🇸' },
  es: { label: 'Español', flag: '🇪🇸' },
  fr: { label: 'Français', flag: '🇫🇷' },
  jp: { label: '日本語', flag: '🇯🇵' },
} as const;

type LanguageKey = keyof typeof SUPPORTED_LANGUAGES;

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const detectedLang = i18n.language?.substring(0, 2) as LanguageKey;
  const currentLanguage: LanguageKey = Object.keys(
    SUPPORTED_LANGUAGES,
  ).includes(detectedLang)
    ? detectedLang
    : 'en';

  const handleLanguageChange = (lng: LanguageKey) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          {(
            Object.entries(SUPPORTED_LANGUAGES) as [
              LanguageKey,
              (typeof SUPPORTED_LANGUAGES)[LanguageKey],
            ][]
          ).map(([key, { label, flag }]) => (
            <button
              key={key}
              onClick={() => handleLanguageChange(key)}
              className={`${styles.dropdownItem} ${currentLanguage === key ? styles.active : ''}`}
              type='button'
            >
              <span className={styles.flag}>{flag}</span>
              {label}
            </button>
          ))}
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.triggerButton}
        title='Mudar Idioma'
        type='button'
      >
        <span className={styles.flag}>
          {SUPPORTED_LANGUAGES[currentLanguage].flag}
        </span>
        <span className={styles.arrow}>{isOpen ? '▼' : '▲'}</span>
      </button>
    </div>
  );
}
