import React, { memo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import clsx from 'clsx';
import styles from '../ContactUs.module.css';
import cfStyles from './ContactForm.module.css';

const ContactForm = () => {
  const { t } = useTranslation()
  return (
    <div className={clsx(cfStyles.root, styles.root)}>
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
          className={cfStyles.input}
          placeholder={t('contact_us.contact_form.name', 'Name')}
        />
        <input
          className={cfStyles.input}
          type="tel"
          placeholder={t('contact_us.contact_form.phone', 'Phone number')}
        />
        <input
          className={cfStyles.input}
          type="email"
          placeholder={t('contact_us.contact_form.email', 'E-mail')}
        />
        <textarea className={cfStyles.input} placeholder={t('contact_form.description', 'Description')} />
      </form>
    </div>
  );
};

export default memo(ContactForm);