import React, { memo, FC, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

const Footer: FC = () => {
  const { t } = useTranslation();
  const nav = useRef([
    { text: t('footer.procurement', 'Procurement') },
    { text: t('footer.accessibility', 'Accessibility') },
    { text: t('footer.privacy', 'Privacy policy') },
    { text: t('footer.quality', 'Quality policy') },
    { text: t('footer.use', 'Terms of use') }
  ])
  return (
    <footer className={styles.root}>
      <div className={styles.logo} />
      <nav className={styles.nav}>
        {nav.current.map(({ text }) => <div key={text} className={styles.item}>{text}</div>)}
      </nav>
      <div className={styles.copy}>© {new Date().getFullYear()} SPDEV</div>
    </footer>
  );
};

export default memo(Footer);
