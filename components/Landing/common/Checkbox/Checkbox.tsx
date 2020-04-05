import React, { memo, FC } from 'react';
import clsx from 'clsx';
import styles from './Checkbox.module.css';

type Props = {
  readonly label?: string | JSX.Element;
  readonly className?: string;
};
const Checkbox: FC<Props> = ({ label, className }) => (
  <label className={clsx(styles.root, className)}>
    <input type="checkbox" />
    <span>{label}</span>
  </label>
);

export default memo(Checkbox);
