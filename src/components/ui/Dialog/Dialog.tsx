import type { ToastContentProps } from 'react-toastify';
import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react';
import styles from './Dialog.module.css';
import { Button } from '../Button';
import i18n from '@/lib/i18n';

export function Dialog({ closeToast, data }: ToastContentProps<string>) {
  return (
    <div className={styles.container}>
      <p>{data}</p>

      <div className={styles.buttonsContainer}>
        <Button
          onClick={() => closeToast(true)}
          aria-label={i18n.t('commom.confirmAction')}
          title={i18n.t('commom.confirmAction')}
        >
          <ThumbsUpIcon />
        </Button>
        <Button
          onClick={() => closeToast(false)}
          color='red'
          aria-label={i18n.t('commom.cancelAction')}
          title={i18n.t('commom.cancelAction')}
        >
          <ThumbsDownIcon />
        </Button>
      </div>
    </div>
  );
}
