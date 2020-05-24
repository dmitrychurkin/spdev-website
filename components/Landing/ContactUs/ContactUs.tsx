import React, { memo, useRef, FC } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Element } from "react-scroll";
import { ScrollLabels } from "../common/Menu";
import SectionLabel from "../common/SectionLabel";
import Form from "./Form";

import styles from "./ContactUs.module.css";

const ContactUs: FC = () => {
  const { t } = useTranslation("landing");

  const ukraine = t("contact_us.contacts.ukraine", "ukraine");

  const address = useRef([
    {
      country: `${ukraine}, ${t("contact_us.contacts.mariupol", "mariupol")}`,
      email: "cooperation@spdev.com.ua",
      phone: "+38067156550",
    },
    {
      country: `${ukraine}, ${t(
        "contact_us.contacts.ivano-frankivsk",
        "ivano-frankivsk"
      )}`,
      email: "contact@spdev.com.ua",
      phone: "+380951086488",
    },
  ]);

  return (
    <Element name={ScrollLabels.CONTACT_US}>
      <section className={styles.root}>
        <SectionLabel>{t("contact_us.name", "contact us")}</SectionLabel>
        <div className={styles.wrapper}>
          <Form />
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
                <a className={styles.contactLink} href={`mailto:${email}`}>
                  {email}
                </a>
                <a className={styles.contactLink} href={`tel:${phone}`}>
                  {phone}
                </a>
              </div>
            ))}
            {/* Temporary disabled */}
            {/* <div className={styles.join}>
              {t("contact_us.contacts.join", "want to join our team?")}
            </div>
            <div className={styles.comeHere}>
              {t("contact_us.contacts.come_here", "Come here")}
              <svg className={styles.comeHereIcon}>
                <use xlinkHref="#link_ref" />
              </svg>
            </div> */}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default memo(ContactUs);
