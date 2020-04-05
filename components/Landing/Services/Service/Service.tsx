import React, { memo, FC } from 'react';
import clsx from 'clsx';
import Button from 'components/Landing/common/Button';
import { useTranslation } from 'react-i18next';
import styles from './Service.module.css'

type Props = {
  readonly imageClass: string;
  readonly title: JSX.Element | string;
  readonly description: Array<string>;
};
const Service: FC<Props> = ({ imageClass, title, description }) => {
  const { t } = useTranslation()
  return (
    <div className={styles.root}>
      <div className={clsx(styles.img, imageClass)} />
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        <div className={styles.line} />
        <div className={styles.description}>
          {description.map(d => <p key={d} className={styles.dp}>{d}</p>)}
        </div>
        <div className={styles.btnWrap}>
          <Button>{t('services.read_more', 'read more')}</Button>
        </div>
      </div>
    </div>
  )
}

export default memo(Service)
