import React, { memo, FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

type Props = {
  readonly className?: string;
  readonly children: ReactNode;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button: FC<Props> = ({ children, className = '', ...attrs }) => (
  <button {...attrs} className={clsx(styles.root, className)}>{children}</button>
);

export default memo(Button);
