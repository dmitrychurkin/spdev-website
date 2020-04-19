import React, { FC, memo, useState, useCallback, useRef, useEffect } from "react";
import clsx from "clsx";
import { Link, Events } from "react-scroll";
import styles from "./Menu.module.css";
import { useTranslation } from "react-i18next";
import useMenuAnimation, { MenuState } from "./useMenuAnimation";

const Menu: FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const menuAnimationFn = useMenuAnimation();
  const menuList = useRef([
    { text: t('menu.about_us', 'about us'), label: ScrollLabels.ABOUT_US },
    { text: t('menu.services', 'services'), label: ScrollLabels.SERVICES },
    // t('menu.portfolio', 'portfolio'),
    { text: t('menu.partners', 'partners'), label: ScrollLabels.PARTNERS },
    { text: t('menu.contact_us', 'contact us'), label: ScrollLabels.CONTACT_US },
    { text: t('menu.location', 'location'), label: ScrollLabels.LOCATION },
  ]);

  const openMenu = useCallback(() => {
    if (!open) {
      if (typeof menuAnimationFn === 'function') {
        menuAnimationFn(MenuState.OPEN);
      }
      setOpen(true);
    }
  }, [menuAnimationFn, open]);

  const closeMenu = useCallback(() => {
    if (open) {
      if (typeof menuAnimationFn === 'function') {
        menuAnimationFn(MenuState.CLOSE);
      }
      setOpen(false);
    }
  }, [menuAnimationFn, open]);

  const toggle = useCallback(() => {
    if (open) {
      closeMenu();
    } else {
      openMenu();
    }
  }, [open, openMenu, closeMenu]);

  useEffect(() => {
    const documentEvListener = (e: Event) => {
      const target = e.target as Element;
      if (!target.closest('#menu')) {
        closeMenu();
      }
    };
    document.addEventListener('click', documentEvListener);
    Events.scrollEvent.register('begin', closeMenu);
    return () => {
      Events.scrollEvent.remove('begin');
      document.removeEventListener('click', documentEvListener);
    };
  }, [Events, closeMenu]);

  return (
    <div id="menu" className={clsx(styles.root, open && styles.open)}>
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
      <nav id="navigation" className={styles.nav}>
        {menuList.current.map(({ text, label }) => (
          <Link key={label} to={label} offset={-55} smooth={true} duration={500}>
            <div className={clsx('js-item', styles.item)}>{text}</div>
          </Link>
        ))}
        <div className={styles.label} onClick={openMenu}>{t("menu.id", 'menu')}</div>
      </nav>
    </div>
  );
};

export enum ScrollLabels {
  INTRO = 'intro',
  SERVICES = 'services',
  ABOUT_US = 'about_us',
  PARTNERS = 'partners',
  CONTACT_US = 'contact_us',
  LOCATION = 'location'
};
export default memo(Menu);
