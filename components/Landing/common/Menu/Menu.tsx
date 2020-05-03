import React, {
  FC,
  memo,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
import clsx from "clsx";
import { Link, Events } from "react-scroll";
import styles from "./Menu.module.css";
import { useTranslation } from "react-i18next";
import useMenuAnimation, { MenuState } from "./useMenuAnimation";

export enum ScrollLabels {
  INTRO = "intro",
  INDUSTRIES = "industries",
  SERVICES = "services",
  ABOUT_US = "about_us",
  PARTNERS = "partners",
  CONTACT_US = "contact_us",
  LOCATION = "location",
}

const Menu: FC = () => {
  const { t } = useTranslation("landing");

  const [open, setOpen] = useState(false);

  const isAnimating = useRef(false);

  const menuAnimationFn = useMenuAnimation();

  const menuList = useRef([
    { text: t("menu.about_us", "about us"), label: ScrollLabels.ABOUT_US },
    {
      text: t("menu.industries", "industries"),
      label: ScrollLabels.INDUSTRIES,
    },
    { text: t("menu.services", "services"), label: ScrollLabels.SERVICES },
    // t('menu.portfolio', 'portfolio'),
    { text: t("menu.partners", "partners"), label: ScrollLabels.PARTNERS },
    {
      text: t("menu.contact_us", "contact us"),
      label: ScrollLabels.CONTACT_US,
    },
    { text: t("menu.location", "location"), label: ScrollLabels.LOCATION },
  ]);

  const onAnimationEnd = useCallback(() => (isAnimating.current = false), []);

  const openMenu = useCallback(() => {
    if (!open && !isAnimating.current) {
      if (typeof menuAnimationFn === "function") {
        isAnimating.current = true;
        menuAnimationFn({ state: MenuState.OPEN, onAnimationEnd });
      }
      setOpen(true);
    }
  }, [menuAnimationFn, onAnimationEnd, open]);

  const closeMenu = useCallback(() => {
    if (open && !isAnimating.current) {
      if (typeof menuAnimationFn === "function") {
        isAnimating.current = true;
        menuAnimationFn({ state: MenuState.CLOSE, onAnimationEnd });
      }
      setOpen(false);
    }
  }, [menuAnimationFn, onAnimationEnd, open]);

  const toggleMenu = useCallback(() => {
    if (open) {
      closeMenu();
    } else {
      openMenu();
    }
  }, [open, openMenu, closeMenu]);

  useEffect(() => {
    const documentEvListener = (e: Event) => {
      const target = e.target as Element;
      if (!target.closest("#menu")) {
        closeMenu();
      }
    };
    document.addEventListener("click", documentEvListener);
    Events.scrollEvent.register("begin", closeMenu);
    return () => {
      Events.scrollEvent.remove("begin");
      document.removeEventListener("click", documentEvListener);
    };
  }, [closeMenu]);

  return (
    <div id="menu" className={clsx(styles.root, open && styles.open)}>
      <button
        className={clsx(styles.hamburger, styles.hamburgerSqueeze)}
        type="button"
        tabIndex={0}
        aria-label="Menu"
        aria-controls="navigation"
        onClick={toggleMenu}
      >
        <span className={styles.hamburgerBox}>
          <span className={styles.hamburgerInner} />
        </span>
      </button>
      <nav id="navigation" className={styles.nav}>
        {menuList.current.map(({ text, label }) => (
          <Link
            key={label}
            to={label}
            offset={-55}
            smooth={true}
            duration={500}
          >
            <div className={clsx("js-item", styles.item)}>{text}</div>
          </Link>
        ))}
        <div className={styles.label} onClick={openMenu}>
          {t("menu.id", "menu")}
        </div>
      </nav>
    </div>
  );
};

export default memo(Menu);
