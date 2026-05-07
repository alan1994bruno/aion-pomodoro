import type { ComponentProps } from 'react';
import styles from './Heading.module.css';

export function Heading({ children }: ComponentProps<'h1'>) {
  return <h1 className={styles.heading}>{children}</h1>;
}
