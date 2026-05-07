import type { ToastContentProps } from 'react-toastify';

import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import styles from './Dialog.module.css';
import { Button } from '../Button';

export function Dialog({ closeToast, data }: ToastContentProps<string>) {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <p>{data}</p>

      <div className={styles.buttonsContainer}>
        <Button
          onClick={() => closeToast(true)}
          aria-label={t('commom.confirmAction')}
          title={t('commom.confirmAction')}
        >
          <ThumbsUpIcon />
        </Button>
        <Button
          onClick={() => closeToast(false)}
          color='red'
          aria-label={t('commom.cancelAction')}
          title={t('commom.cancelAction')}
        >
          <ThumbsDownIcon />
        </Button>
      </div>
    </div>
  );
}
