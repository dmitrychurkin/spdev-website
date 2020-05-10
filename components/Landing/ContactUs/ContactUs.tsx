import React, { memo, useRef, FC, useEffect, useCallback } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Element } from "react-scroll";
import { ScrollLabels } from "../common/Menu";
import SectionLabel from "../common/SectionLabel";
import Input from "../common/Input";
import Checkbox from "../common/Checkbox";
import Button from "../common/Button";
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

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    window.sendContactForm = (reCaptchaToken: string) => {
      console.log("TODO: proceed to send contact form data", reCaptchaToken);
    };
  }, []);

  const onClickSubmit = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      if (formRef.current?.checkValidity()) {
        window.grecaptcha.execute("recaptcha");
      }
    },
    []
  );

  return (
    <Element name={ScrollLabels.CONTACT_US}>
      <section className={styles.root}>
        <SectionLabel>{t("contact_us.name", "contact us")}</SectionLabel>
        <div className={styles.wrapper}>
          <div className={styles.form}>
            <div className={styles.title}>
              <Trans i18nKey="contact_us.contact_form.title">
                <strong>evaluate</strong> your <br /> project
              </Trans>
            </div>
            <div className={styles.subtitle}>
              <Trans i18nKey="contact_us.contact_form.subtitle">
                You have an idea, or want to know the approximate cost <br /> of
                your project?
              </Trans>
            </div>
            <form ref={formRef}>
              <Input
                className={styles.firstInput}
                tag="input"
                placeholder={t("contact_us.contact_form.name", "Name")}
                required
              />
              <Input
                tag="input"
                type="tel"
                placeholder={t(
                  "contact_us.contact_form.number",
                  "Phone number"
                )}
                required
              />
              <Input
                tag="input"
                type="email"
                placeholder={t("contact_us.contact_form.email", "E-mail")}
                required
              />
              <Input
                tag="textarea"
                placeholder={t(
                  "contact_us.contact_form.description",
                  "Description"
                )}
                maxLength={460}
              />
              <Checkbox
                className={styles.checkbox}
                label={
                  <Trans i18nKey="contact_us.contact_form.checkbox">
                    I accept{" "}
                    <span className={styles.checkboxLabel}>
                      Term of service
                    </span>{" "}
                    etc.
                  </Trans>
                }
              />
              <div
                id="recaptcha"
                className="g-recaptcha"
                data-sitekey={process.env.RECAPTCHA_V2_CLIENT}
                data-callback="sendContactForm"
                data-size="invisible"
              />
              <Button
                type="submit"
                className={styles.btn}
                onClick={onClickSubmit}
              >
                {t("contact_us.contact_form.send", "send")}
              </Button>
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
                <a className={styles.contactLink} href={`mailto:${email}`}>
                  {email}
                </a>
                <a className={styles.contactLink} href={`tel:${phone}`}>
                  {phone}
                </a>
              </div>
            ))}
            <div className={styles.join}>
              {t("contact_us.contacts.join", "want to join our team?")}
            </div>
            <div className={styles.comeHere}>
              {t("contact_us.contacts.come_here", "Come here")}
              <svg className={styles.comeHereIcon}>
                <use xlinkHref="#link_ref" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default memo(ContactUs);
