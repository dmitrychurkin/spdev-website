import React, { FC, memo } from 'react';
import styles from './SectionTitle.module.css'

type Props = {
  readonly children: JSX.Element;
};
const SectionTitle: FC<Props> = ({ children }) => (
  <div className={styles.root}>{children}</div>
)

export default memo(SectionTitle);
