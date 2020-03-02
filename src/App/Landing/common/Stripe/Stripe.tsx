import React, { memo, FC } from 'react';
import styles from './Stripe.module.css';
import clsx from 'clsx';

type Props = {
  readonly actions: JSX.Element;
  readonly className?: string;
  readonly children: React.ReactChild
};
const Stripe: FC<Props> = ({ children, actions, className = '' }) => (
  <div className={clsx(styles.root, className)}>
    {children}
    {actions}
  </div>
);

export default memo(Stripe);
