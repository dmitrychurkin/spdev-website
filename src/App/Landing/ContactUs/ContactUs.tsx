import React, { memo, useRef } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import clsx from 'clsx';
import SectionLabel from '../common/SectionLabel';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  const { t } = useTranslation()
  const address = useRef([
    { country: 'ukraine, mariupol', email: 'cooperation@spdev.com.ua', phone: '+38067156550' },
    { country: 'ukraine, ivano-frankivsk', email: 'contact@spdev.com.ua', phone: '+380951086488' },
  ])
  return (
    <section className={clsx(styles.root, 'sct')}>
      <SectionLabel>{t('contact_us.name', 'contact us')}</SectionLabel>
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <div className={styles.title}>
            <Trans i18nKey="contact_us.contact_form.title">
              <strong>evaluate</strong> your <br /> project
            </Trans>
          </div>
          <div className={styles.subtitle}>
            <Trans i18nKey="contact_us.contact_form.subtitle">
              You have an idea, or want to know the approximate cost <br /> of your project?
            </Trans>
          </div>
          <form>
            <input
              className={styles.input}
              placeholder={t('contact_us.contact_form.name', 'Name')}
            />
            <input
              className={styles.input}
              type="tel"
              placeholder={t('contact_us.contact_form.phone', 'Phone number')}
            />
            <input
              className={styles.input}
              type="email"
              placeholder={t('contact_us.contact_form.email', 'E-mail')}
            />
            <textarea
              className={styles.input}
              placeholder={t('contact_form.description', 'Description')}
            />
          </form>
        </div>
        <div className={styles.contact}>
          <div className={styles.title}>
            <Trans i18nKey="contact_us.contacts.title">
              <strong>connect</strong> with us
            </Trans>
          </div>
          <div className={styles.subtitle}>
            <Trans i18nKey="contact_us.contacts.subtitle">
              Web development is our credo, have a question? Let’s talk!
            </Trans>
          </div>
          {address.current.map(({ country, email, phone }, i) => (
            <div key={String(i)} className={styles.location}>
              <div>{country}</div>
              <div>{email}</div>
              <div>{phone}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ContactUs);
