import { Button } from '@/components/ui/Button';
import { TrashIcon } from 'lucide-react';
import styles from './ContainerButton.module.css';
import { useTranslation } from 'react-i18next';

interface ContainerButtonProps {
  onClick: () => void;
}

export function ContainerButton({ onClick }: ContainerButtonProps) {
  const { t } = useTranslation('timer');
  return (
    <span className={styles.buttonContainer}>
      <Button
        color='red'
        aria-label={t('timer.clearHistory')}
        title={t('timer.clearHistory')}
        onClick={onClick}
      >
        <TrashIcon />
      </Button>
    </span>
  );
}
