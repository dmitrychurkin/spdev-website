import React, { memo, FC } from 'react';
import styles from './Stripe.module.css';
import clsx from 'clsx';

type Props = {
  readonly children: JSX.Element[];
  readonly className?: string;
};
const Stripe: FC<Props> = ({ children, className = '' }) => (
  <div className={clsx(styles.root, className)}>
    {children}
  </div>
);

export default memo(Stripe);
