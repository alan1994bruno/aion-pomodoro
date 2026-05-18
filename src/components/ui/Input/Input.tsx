import type { ComponentProps } from 'react';
import styles from './Input.module.css';

interface InputProps extends ComponentProps<'input'> {
  id: string;
  labelText: string;
}

export function Input({ id, type, labelText, ...props }: InputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} id={id} type={type} {...props} />
    </>
  );
}
