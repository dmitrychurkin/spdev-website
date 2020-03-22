import React, { FC, memo } from 'react';
import styles from './SectionLabel.module.css'

type Props = {
  readonly children: string;
};
const SectionLabel: FC<Props> = ({ children }) => (
  <div className={styles.root}>{children}</div>
);

export default memo(SectionLabel);
