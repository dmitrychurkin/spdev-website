import React, { FC, memo } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Element } from "react-scroll";
import { ScrollLabels } from "../common/Menu";
import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import styles from "./Partners.module.css";

const Partners: FC = () => {
  const { t } = useTranslation("landing");
  return (
    <Element name={ScrollLabels.PARTNERS}>
      <section>
        <SectionLabel>{t("partners.name", "partners")}</SectionLabel>
        <SectionTitle className={styles.text}>
          <Trans i18nKey="services.title">
            Quis non do tempor sunt ex enim exercitation commodo commodo sint ea
            elit non <br /> exercitation. Labore reprehenderit nostrud sunt
            laborum mollit et ut. Est quis sint esse <br /> deserunt cupidatat
            culpa consequat fugiat labore velit quis.
          </Trans>
        </SectionTitle>
        <div className={styles.cont}>
          {[
            { src: "/medi_web.svg", title: "Mediweb Solutions" },
            {
              src: "/softloft_logo.svg",
              title: "Soft Loft e-commerce",
            },
            { src: "/2key.svg", title: "2key" },
            {
              src: "/hospitality_group.svg",
              title: "Hospitality Group",
            },
            { src: "/twelve_zeros.svg", title: "TwelveZeros" },
            { src: "/web_generator.svg", title: "Web Generator" },
          ].map(({ src, title }, i) => (
            <img
              key={String(i)}
              className={styles.img}
              src={src}
              title={title}
              alt={title}
            />
          ))}
        </div>
      </section>
    </Element>
  );
};

export default memo(Partners);
