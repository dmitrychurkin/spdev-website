import React, { FC, memo } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import SectionLabel from '../common/SectionLabel';
import SectionTitle from '../common/SectionTitle';
import styles from './Partners.module.css';
import MediWeb from './medi_web.svg';
import SoftLoft from './softloft_logo.svg';
import TwoKey from './2key.svg';
import HospitalityGroup from './hospitality_group.svg';
import TwelveZeroes from './twelve_zeros.svg';
import WebGenerator from './web_generator.svg';

const Partners: FC = () => {
  const { t } = useTranslation()
  return (
    <section>
      <SectionLabel>{t('partners.name', 'partners')}</SectionLabel>
      <SectionTitle>
        <Trans i18nKey="services.title">
          Quis non do tempor sunt ex enim exercitation commodo commodo sint ea elit non <br /> exercitation. Labore reprehenderit nostrud sunt laborum mollit et ut. Est quis sint esse <br /> deserunt cupidatat culpa consequat fugiat labore velit quis.
        </Trans>
      </SectionTitle>
      <div className={styles.cont}>
        {[{ src: MediWeb, title: 'Mediweb Solutions' },
          { src: SoftLoft, title: 'Soft Loft e-commerce' },
          { src: TwoKey, title: '2key' },
          { src: HospitalityGroup, title: 'Hospitality Group' },
          { src: TwelveZeroes, title: 'TwelveZeros' },
          { src: WebGenerator, title: 'Web Generator' }]
          .map(({ src, title }, i) => <img key={String(i)} className={styles.img} src={src} title={title} alt={title} />)}
      </div>
    </section>
  );
}

export default memo(Partners);
