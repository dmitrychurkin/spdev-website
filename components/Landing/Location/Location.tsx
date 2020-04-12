import React, { FC, memo, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import SectionLabel from '../common/SectionLabel';
import Stripe from '../common/Stripe';
import Button from '../common/Button';
import GoogleMap, { LocationKey } from './GoogleMap';
import styles from './Location.module.css';

const socialLinks = [
  { name: 'linkedin', link: '//google.com' },
  { name: 'fb', link: '//google.com' },
  { name: 'twitter', link: '//google.com' },
  { name: 'google', link: '//google.com' },
  { name: 'instagram', link: '//google.com' }
];
const Location: FC = () => {
  const { t } = useTranslation();

  const [activeLocation, setLocation] = useState<LocationKey>();
  const onClickHandler = setActiveLocation(setLocation);

  return (
    <section>
      <SectionLabel className={styles.gap}>{t('location.name', 'location')}</SectionLabel>
      <div className={styles.mapWrap}>
        <div className={styles.text}>
          <div className={styles.title}>
            <Trans i18nKey="location.text.title">
              <strong>Exercitation veniam</strong> et sit dolore aute adipisicing <br/> eiusmod adipisicing.
            </Trans>
          </div>
          <div className={styles.subtitle}>
            <Trans i18nKey="location.text.subtitle">
              Quis non do tempor sunt ex enim exercitation commodo <br /> commodo sint ea 2020 non exercitation. Labore reprehenderit <br /> nostrud sunt laborum mollit et ut.
            </Trans>
          </div>
        </div>
        <GoogleMap activeLocation={activeLocation} />
        <Stripe className={styles.stripe}>
          <div className={styles.social}>
            {socialLinks.map(({ name, link }) => (
              <a key={name} className={styles.socialLink} href={link}>
                <svg>
                  <use xlinkHref={`#social_${name}`} />
                </svg>
              </a>
            ))}
          </div>
          <div className={styles.actions}>
            <Button onClick={onClickHandler(LocationKey.IVANO_FRANKOVSK)} type="button" className={styles.btn}>{t('contact_us.contacts.ivano-frankivsk', 'ivano-frankivsk')}</Button>
            <Button onClick={onClickHandler(LocationKey.MARIUPOL)} type="button" className={styles.btn}>{t('contact_us.contacts.mariupol', 'mariupol')}</Button>
          </div>
        </Stripe>
      </div>
    </section>
  );
};

function setActiveLocation(setState: React.Dispatch<React.SetStateAction<LocationKey | undefined>>) {
  return (key: LocationKey) => () => setState(key);
}

export default memo(Location);
