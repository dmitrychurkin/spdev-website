import React, { memo } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import SectionLabel from '../common/SectionLabel';
import styles from './Services.module.css';

const Services = () => {
  const { t } = useTranslation();
  return (
    <section className={clsx('sct', styles.root)}>
      <SectionLabel>{t('services.name', 'services')}</SectionLabel>
    </section>
  );
};

export default memo(Services);
