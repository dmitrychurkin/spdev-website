import React, { memo, FC, useState, useCallback, useMemo } from "react";
import clsx from "clsx";
import Button from "components/Landing/common/Button";
import Stripe from "components/Landing/common/Stripe";
import { useTranslation } from "react-i18next";
import styles from "./Service.module.css";

export enum Mode {
  BRIEF,
  DETAIL,
}

type Props = {
  readonly bg: string;
  readonly title: FC<{ isActive: boolean; className?: string }>;
  readonly subtitle: JSX.Element;
  readonly description: Array<string>;
  readonly tech: Array<string>;
  readonly mode: Mode;
  readonly onChangeMode: (mode: Mode) => void;
};
const Service: FC<Props> = ({
  bg,
  title: Title,
  subtitle,
  description,
  tech,
  mode,
  onChangeMode,
}) => {
  const { t } = useTranslation("landing");

  const [isActive, setActive] = useState(false);

  const onClick = useCallback(() => {
    const newState = !isActive;
    setActive(newState);
    onChangeMode(Number(newState));
  }, [isActive, onChangeMode]);

  const serviceDescription = useMemo(
    () => (
      <div className={styles.description}>
        {description.map((d) => (
          <p key={d} className={styles.dp}>
            {d}
          </p>
        ))}
      </div>
    ),
    [description]
  );

  const ActiveContent = (
    <div className={styles.detail}>
      <Button className={styles.btn} formFactor="round" onClick={onClick}>
        <svg className={styles.icon}>
          <use xlinkHref="#arrow_down" />
        </svg>
      </Button>
      <div className={styles.title}>
        <Title isActive={true} className={styles.serviceTitle} />
        <div className={styles.sub}>{subtitle}</div>
      </div>
      <Stripe className={styles.stripe}>
        <div>{serviceDescription}</div>
        <div className={styles.right}>
          {tech.map((icon) => (
            <div key={icon} className={clsx(icon, styles.tech)} />
          ))}
        </div>
      </Stripe>
    </div>
  );

  return (
    <>
      <div className={styles.mobile}>
        <div className={clsx(styles.img, bg)} />
        {ActiveContent}
      </div>
      <div
        className={clsx(
          styles.root,
          isActive && styles.active,
          getClass(isActive, mode)
        )}
      >
        <div className={clsx(styles.img, bg)} />
        {
          {
            [Mode.BRIEF]: (
              <div className={clsx(styles.text, styles.brief)}>
                <Title isActive={isActive} />
                <div className={styles.line} />
                {serviceDescription}
                <div className={styles.btnWrap}>
                  <Button onClick={onClick}>
                    {t("services.read_more", "read more")}
                  </Button>
                </div>
              </div>
            ),
            [Mode.DETAIL]: isActive ? (
              ActiveContent
            ) : (
              <div className={styles.title}>
                <Title isActive={false} />
              </div>
            ),
          }[mode]
        }
      </div>
    </>
  );
};

function getClass(isActive: boolean, mode: Mode) {
  if (isActive && mode === Mode.DETAIL) {
    return styles.large;
  }
  if (mode === Mode.DETAIL) {
    return styles.small;
  }
  return "";
}

export default memo(Service);
