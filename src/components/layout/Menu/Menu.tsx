import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './Menu.module.css';
import { useState, useEffect } from 'react';
import { Link } from '../../ui/Link';
import { useTranslation } from 'react-i18next';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storageTheme;
  });

  const { t } = useTranslation();

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <Link
        className={styles.menuLink}
        href='/'
        aria-label={t('commom.goHome')}
        title={t('commom.goHome')}
      >
        <HouseIcon />
      </Link>

      <Link
        className={styles.menuLink}
        href='/history/'
        aria-label={t('commom.viewHistory')}
        title={t('commom.viewHistory')}
      >
        <HistoryIcon />
      </Link>

      <Link
        className={styles.menuLink}
        href='/settings/'
        aria-label={t('commom.settings')}
        title={t('commom.settings')}
      >
        <SettingsIcon />
      </Link>

      <a
        className={styles.menuLink}
        href='#'
        aria-label={t('commom.changeTheme')}
        title={t('commom.changeTheme')}
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
