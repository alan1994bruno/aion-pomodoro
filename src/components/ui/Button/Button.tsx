import type { ComponentProps } from 'react';
import styles from './Button.module.css';
import { cn } from '@/utils/cn';

interface DefaultButtonProps extends ComponentProps<'button'> {
  color?: 'green' | 'red';
}

export function Button({
  children,
  color = 'green',
  className = '',
  ...props
}: DefaultButtonProps) {
  return (
    <button className={cn(styles.button, styles[color], className)} {...props}>
      {children}
    </button>
  );
}
