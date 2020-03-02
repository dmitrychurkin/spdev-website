import React, { memo, FC } from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

type Props = {
  readonly className?: string;
};
const Button: FC<Props> = ({ children, className = '', ...attrs }) => (
  <button {...attrs} className={clsx(styles.root, className)}>{children}</button>
);

export default memo(Button);
