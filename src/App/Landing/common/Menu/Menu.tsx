import React, { FC, memo, useState, useCallback, useRef } from "react";
import clsx from "clsx";
import styles from "./Menu.module.css";
import { useTranslation } from "react-i18next";
import useMenuAnimation from "./useMenuAnimation";

const Menu: FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const menuAnimationFn = useMenuAnimation();
  const menuList = useRef([
    t('menu.about_us', 'about us'),
    t('menu.services', 'services'),
    t('menu.portfolio', 'portfolio'),
    t('menu.partners', 'partners'),
    t('menu.contact_us', 'contact us'),
    t('menu.location', 'location'),
  ]);
  const toggle = useCallback(() => {
    const openState = !open;
    if (typeof menuAnimationFn === 'function') {
      menuAnimationFn(Number(openState));
    }
    setOpen(openState);
  }, [menuAnimationFn, open]);

  return (
    <div className={clsx(styles.root, open && styles.open)}>
      <button
        className={clsx(styles.hamburger, styles.hamburgerSqueeze)}
        type="button"
        tabIndex={0}
        aria-label="Menu"
        aria-controls="navigation"
        onClick={toggle}
      >
        <span className={styles.hamburgerBox}>
          <span className={styles.hamburgerInner} />
        </span>
      </button>
      <nav id="navigation" className={styles.nav} onClick={toggle}>
        {menuList.current.map(item => <div key={item} className={clsx('js-item', styles.item)}>{item}</div>)}
        <div className={styles.label}>{t("menu.id", 'menu')}</div>
      </nav>
    </div>
  );
};

export default memo(Menu);
