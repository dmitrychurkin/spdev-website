import React, { FC, memo, useRef, useState, useCallback } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation, Trans } from "react-i18next";
import {
  useToasts,
  Options as NotificationOptions,
} from "react-toast-notifications";
import { ContactForm, ContactFormReqParams } from "pages/api/inquery";
import Input from "components/Landing/common/Input";
import Checkbox from "components/Landing/common/Checkbox";
import Button from "components/Landing/common/Button";

import styles from "./ContactUs.module.css";

const formInputs: ContactForm = {
  name: "",
  phone: "",
  email: "",
  description: "",
};

const formInputsNames = Object.keys(formInputs).reduce(
  (inputs, value) => ({ ...inputs, [value]: value }),
  {}
) as ContactForm;

const notificationDefaultOptions: NotificationOptions = {
  appearance: "success",
  autoDismiss: true,
};

const Form: FC = () => {
  const { t } = useTranslation("landing");

  const { addToast } = useToasts();

  const formRef = useRef<HTMLFormElement>(null);
  const [isRequestSent, setRequestState] = useState(false);

  const [formValues, setFormValues] = useState<ContactForm>({ ...formInputs });

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormValues((state) => ({ ...state, [name]: value }));
    },
    []
  );

  const [captchaSuccessKey, setCaptchaSuccessKey] = useState<string | null>(
    null
  );

  const onCaptchaReset = useCallback(() => setCaptchaSuccessKey(null), []);

  const onCaptchaChange = useCallback((successToken: string | null) => {
    setCaptchaSuccessKey(
      typeof successToken === "string" ? successToken : null
    );
  }, []);

  const onSubmit = useCallback(
    async (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (
        !isRequestSent &&
        formRef.current?.checkValidity() &&
        captchaSuccessKey
      ) {
        setRequestState(true);
        const contactFormRequestParams = Object.entries(formValues).reduce(
          (inputs, [key, value]) => ({
            ...inputs,
            [key]: value.trim(),
          }),
          { token: captchaSuccessKey }
        ) as ContactFormReqParams;
        try {
          const response = await fetch("/api/inquery", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contactFormRequestParams),
          });

          if (response.ok) {
            return addToast(
              t(
                "contact_us.contact_form.result_success",
                "Form successfully sent"
              ),
              notificationDefaultOptions,
              () => setFormValues({ ...formInputs })
            );
          }
          addToast(await response.text(), {
            ...notificationDefaultOptions,
            appearance: "error",
          });
        } catch (err) {
          addToast(err.message, {
            ...notificationDefaultOptions,
            appearance: "error",
          });
        } finally {
          setRequestState(false);
        }
      }
    },
    [addToast, captchaSuccessKey, formValues, isRequestSent, t]
  );

  return (
    <div className={styles.form}>
      <div className={styles.title}>
        <Trans i18nKey="contact_us.contact_form.title">
          <strong>evaluate</strong> your <br /> project
        </Trans>
      </div>
      <div className={styles.subtitle}>
        <Trans i18nKey="contact_us.contact_form.subtitle">
          You have an idea, or want to know the approximate cost <br /> of your
          project?
        </Trans>
      </div>
      <form ref={formRef} onSubmit={onSubmit}>
        <Input
          className={styles.firstInput}
          name={formInputsNames.name}
          value={formValues.name}
          onChange={onChange}
          placeholder={t("contact_us.contact_form.name", "Name")}
          required
        />
        <Input
          type="tel"
          name={formInputsNames.phone}
          value={formValues.phone}
          onChange={onChange}
          placeholder={t("contact_us.contact_form.number", "Phone number")}
          required
        />
        <Input
          type="email"
          name={formInputsNames.email}
          value={formValues.email}
          onChange={onChange}
          placeholder={t("contact_us.contact_form.email", "E-mail")}
          required
        />
        <Input
          tag="textarea"
          name={formInputsNames.description}
          value={formValues.description}
          onChange={onChange}
          placeholder={t("contact_us.contact_form.description", "Description")}
          maxLength={460}
        />
        <Checkbox
          className={styles.checkbox}
          labelElement={
            <Trans i18nKey="contact_us.contact_form.checkbox">
              I accept{" "}
              <span className={styles.checkboxLabel}>Term of service</span> etc.
            </Trans>
          }
          required
        />
        <span className={styles.debug}>
          {String(process.env.RECAPTCHA_V2_CLIENT)}
        </span>
        <ReCAPTCHA
          sitekey={String(process.env.RECAPTCHA_V2_CLIENT)}
          size="normal"
          theme="dark"
          onChange={onCaptchaChange}
          onErrored={onCaptchaReset}
          onExpired={onCaptchaReset}
        />
        <Button type="submit" className={styles.btn} disabled={isRequestSent}>
          {t("contact_us.contact_form.send", "send")}
        </Button>
      </form>
    </div>
  );
};

export default memo(Form);
