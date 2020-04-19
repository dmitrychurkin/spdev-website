import React, { memo, FC, useState, useRef } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Element } from 'react-scroll';
import SectionLabel from '../common/SectionLabel';
import SectionTitle from '../common/SectionTitle';
import { ScrollLabels } from '../common/Menu';
import Service, { Mode } from './Service';
import ServiceTitle from './ServiceTitle';
import styles from './Services.module.css';

const Services: FC = () => {
  const { t } = useTranslation();

  const services = useRef([
    {
      key: 'site_design',
      bg: styles.s1,
      title: withTitle(styles.activeTitle1)(
        <Trans i18nKey="services.site_design.title">
          <strong>site</strong> design
        </Trans>
      ),
      subtitle: (
        <span className={styles.cap}>
          <Trans i18nKey="services.site_design.subtitle">
            <strong className={styles.up}>logic</strong> calculations &<br /> inspiration
          </Trans>
        </span>
      ),
      description: [
        t('services.site_design.p1', 'Tempor deserunt sunt qui occaecat deserunt nulla duis ullamco dolor occaecat exercitation.'),
        t('services.site_design.p2', 'Sint pariatur duis Lorem in veniam mollit pariatur do dolore laboris sit aliquip.')
      ],
      tech: [
        styles.a,
        styles.b,
        styles.c,
        styles.d,
        styles.e,
        styles.f,
        styles.g,
        styles.h,
        styles.i,
        styles.j
      ]
    },
    {
      key: 'site_development',
      bg: styles.s1,
      title: withTitle(styles.activeTitle2)(
        <Trans i18nKey="services.site_development.title">
          <strong>site</strong> development
        </Trans>
      ),
      subtitle: (
        <span className={styles.cap}>
          <Trans i18nKey="services.site_development.subtitle">
            <strong className={styles.up}>innovations</strong> knowledge &<br /> experience
          </Trans>
        </span>
      ),
      description: [
        t('services.site_design.p1', 'Tempor deserunt sunt qui occaecat deserunt nulla duis ullamco dolor occaecat exercitation.'),
        t('services.site_design.p2', 'Sint pariatur duis Lorem in veniam mollit pariatur do dolore laboris sit aliquip.')
      ],
      tech: [
        styles.a,
        styles.b,
        styles.c,
        styles.d,
        styles.e,
        styles.f,
        styles.g,
        styles.h,
        styles.i,
        styles.j
      ]
    },
    {
      key: 'app_development',
      bg: styles.s1,
      title: withTitle(styles.activeTitle3)(
        <Trans i18nKey="services.app_development.title">
          <strong>app</strong> development
        </Trans>
      ),
      subtitle: (
        <span className={styles.cap}>
          <Trans i18nKey="services.app_development.subtitle">
            <strong className={styles.up}>user</strong> experience &<br /> trends
          </Trans>
        </span>
      ),
      description: [
        t('services.site_design.p1', 'Tempor deserunt sunt qui occaecat deserunt nulla duis ullamco dolor occaecat exercitation.'),
        t('services.site_design.p2', 'Sint pariatur duis Lorem in veniam mollit pariatur do dolore laboris sit aliquip.')
      ],
      tech: [
        styles.a,
        styles.b,
        styles.c,
        styles.d,
        styles.e,
        styles.f,
        styles.g,
        styles.h,
        styles.i,
        styles.j
      ]
    }
  ]);

  const [mode, setMode] = useState<Mode>(Mode.BRIEF);

  return (
    <Element name={ScrollLabels.SERVICES}>
      <section className={styles.root}>
        <SectionLabel>{t('services.name', 'services')}</SectionLabel>
        <SectionTitle>
          <Trans i18nKey="services.title">
            Quis non do tempor sunt ex enim exercitation commodo commodo sint ea elit non <br /> exercitation. Labore reprehenderit nostrud sunt laborum mollit et ut. Est quis sint esse <br /> deserunt cupidatat culpa consequat fugiat labore velit quis.
          </Trans>
        </SectionTitle>
        <div className={styles.wrap}>
          {services.current.map(props => (
            <Service
              {...props}
              mode={mode}
              onChangeMode={setMode}
            />
          ))}
        </div>
      </section>
    </Element>
  );
};

function withTitle(className: string) {
  return (Title: JSX.Element) => (props: { isActive: boolean }) => (
    <ServiceTitle {...props} className={className}>
      {Title}
    </ServiceTitle>
  );
}

export default memo(Services);
