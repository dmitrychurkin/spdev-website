import React, { FC, memo, useState, useCallback } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Element } from "react-scroll";
import { ScrollLabels } from "../common/Menu";
import SectionLabel from "../common/SectionLabel";
import Stripe from "../common/Stripe";
import Button from "../common/Button";
import GoogleMap from "./GoogleMap";
import Map, { MapRegions } from "./Map";
import styles from "./Location.module.css";

const socialLinks = [
  { name: "linkedin", link: "//google.com" },
  { name: "fb", link: "//google.com" },
  { name: "twitter", link: "//google.com" },
  { name: "google", link: "//google.com" },
  { name: "instagram", link: "//google.com" },
];
const Location: FC = () => {
  const { t } = useTranslation();
  const [activeLocation, setLocation] = useState<MapRegions>();

  const createOnClickHandler = useCallback(
    (location: MapRegions) => () => setLocation(location),
    [setLocation]
  );

  return (
    <Element name={ScrollLabels.LOCATION}>
      <section>
        <SectionLabel className={styles.gap}>
          {t("location.name", "location")}
        </SectionLabel>
        <div className={styles.mapWrap}>
          <div className={styles.text}>
            <div className={styles.title}>
              <Trans i18nKey="location.text.title">
                <strong>Exercitation veniam</strong> et sit dolore aute
                adipisicing <br /> eiusmod adipisicing.
              </Trans>
            </div>
            <div className={styles.subtitle}>
              <Trans i18nKey="location.text.subtitle">
                Quis non do tempor sunt ex enim exercitation commodo <br />{" "}
                commodo sint ea 2020 non exercitation. Labore reprehenderit{" "}
                <br /> nostrud sunt laborum mollit et ut.
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
              <Button
                onClick={createOnClickHandler(Map.IVANO_FRANKIVSK)}
                type="button"
                className={styles.btn}
              >
                {t("contact_us.contacts.ivano-frankivsk", "ivano-frankivsk")}
              </Button>
              <Button
                onClick={createOnClickHandler(Map.MARIUPOL)}
                type="button"
                className={styles.btn}
              >
                {t("contact_us.contacts.mariupol", "mariupol")}
              </Button>
            </div>
          </Stripe>
        </div>
      </section>
    </Element>
  );
};

export default memo(Location);
