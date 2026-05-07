import { Heading } from '@/components/ui/Heading';
import { Link } from '@/components/ui/Link';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function NotFoundScreen() {
  const { t } = useTranslation('misc');
  useEffect(() => {
    document.title = t('misc.pageNotFound') + ' - Aion Pomodoro';
  }, [t]);

  return (
    <>
      <Heading>404 - {t('misc.pageNotFound')} 🚀</Heading>
      <p>{t('misc.opsNotFoutnd')} 🌌</p>
      <p>
        {t('misc.butWorrySafely')} <Link href='/'>{t('misc.homePage')}</Link>{' '}
        {t('misc.or')} <Link href='/history/'>{t('misc.theHistory')}</Link> —{' '}
        {t('misc.youCanPretend')} 🧭✨
      </p>
      <p>{t('misc.pageShouldExist')}</p>
      <p>
        {t('misc.somethingAbout')} "{t('misc.existInternet')}" 🤔💭
      </p>
    </>
  );
}
