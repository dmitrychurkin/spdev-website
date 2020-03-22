import React, { memo } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import SectionLabel from '../common/SectionLabel';
import SectionTitle from '../common/SectionTitle';
import Service from './Service';
import styles from './Services.module.css';

const Services = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.root}>
      <SectionLabel>{t('services.name', 'services')}</SectionLabel>
      <SectionTitle>
        <Trans i18nKey="services.title">
          Quis non do tempor sunt ex enim exercitation commodo commodo sint ea elit non <br /> exercitation. Labore reprehenderit nostrud sunt laborum mollit et ut. Est quis sint esse <br /> deserunt cupidatat culpa consequat fugiat labore velit quis.
        </Trans>
      </SectionTitle>
      <div className={styles.wrap}>
        <Service
          imageClass={styles.s1}
          title={
            <Trans i18nKey="services.site_design.title">
              <strong>site</strong> design
            </Trans>
          }
          description={[
            t('services.site_design.p1', 'Tempor deserunt sunt qui occaecat deserunt nulla duis ullamco dolor occaecat exercitation.'),
            t('services.site_design.p2', 'Sint pariatur duis Lorem in veniam mollit pariatur do dolore laboris sit aliquip.')
          ]}
        />
        <Service
          imageClass={styles.s1}
          title={
            <Trans i18nKey="services.site_development.title">
              <strong>site</strong> development
            </Trans>
          }
          description={[
            t('services.site_design.p1', 'Tempor deserunt sunt qui occaecat deserunt nulla duis ullamco dolor occaecat exercitation.'),
            t('services.site_design.p2', 'Sint pariatur duis Lorem in veniam mollit pariatur do dolore laboris sit aliquip.')
          ]}
        />
        <Service
          imageClass={styles.s1}
          title={
            <Trans i18nKey="services.app_development.title">
              <strong>app</strong> development
            </Trans>
          }
          description={[
            t('services.site_design.p1', 'Tempor deserunt sunt qui occaecat deserunt nulla duis ullamco dolor occaecat exercitation.'),
            t('services.site_design.p2', 'Sint pariatur duis Lorem in veniam mollit pariatur do dolore laboris sit aliquip.')
          ]}
        />
      </div>
    </section>
  );
};

export default memo(Services);
