import styles from './Footer.module.css';
import { Link } from '@/components/ui/Link';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <Link href='/about/'>{t('commom.understandWorks')}</Link>
      <Link href='/'>
        Aion Pomodoro &copy; {new Date().getFullYear()} - {t('commom.madeWith')}
      </Link>
    </footer>
  );
}
