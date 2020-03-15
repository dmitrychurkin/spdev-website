import  React, { memo } from 'react';
import styles from './IconSet.module.css'

const IconSet = () => (
  <svg className={styles.root} xmlns="http://www.w3.org/2000/svg">
    <symbol id="arrow_down" width="12" height="8" viewBox="0 0 12 8" fill="none">
      <path d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z" fill="white" fillOpacity="0.6" />
    </symbol>
  </svg>
)

export default memo(IconSet)
