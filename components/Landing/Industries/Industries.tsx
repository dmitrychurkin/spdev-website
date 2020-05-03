/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, FC, useEffect, useMemo } from "react";
import { useTranslation, Trans } from "react-i18next";
import Swiper from "swiper";
import { Element, Link } from "react-scroll";
import clsx from "clsx";
import Button from "../common/Button";
import { ScrollLabels } from "../common/Menu";
import SectionLabel from "../common/SectionLabel";
import styles from "./Industries.module.css";

type Props = {
  readonly bgUrl?: string;
  readonly delay?: number;
};
const Industries: FC<Props> = ({
  bgUrl = "/industries.webp",
  delay = 10000,
}) => {
  const { t } = useTranslation("landing");

  useEffect(() => {
    new Swiper(".swiper-container", {
      parallax: true,
      speed: 600,
      autoplay: { delay },
      keyboard: true,
      a11y: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  const Btn = useMemo(
    () => (
      <div className={styles.slCa}>
        <Link to={ScrollLabels.CONTACT_US} smooth={true} duration={500}>
          <Button type="button">{t("contact_us.name", "contact us")}</Button>
        </Link>
      </div>
    ),
    [t]
  );

  return (
    <Element name={ScrollLabels.INDUSTRIES}>
      <div className={styles.root}>
        <SectionLabel>{t("industries.name", "industries")}</SectionLabel>
        <div className={clsx("swiper-container", styles.sl)}>
          <div
            className={clsx("parallax-bg", styles.slBg)}
            style={{
              backgroundImage: `url(${bgUrl})`,
            }}
            data-swiper-parallax="-23%"
          />
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className={styles.slCon}
                data-swiper-parallax="-100"
                data-swiper-parallax-opacity="0"
              >
                <div className={styles.slH}>
                  {t("industries.slider.travel.header", "travel")}
                </div>
                <div className={styles.slWc}>
                  <div className={styles.slC}>
                    <p className={styles.slP}>
                      <Trans i18nKey="industries.slider.travel.p1">
                        <b>The travel industry is very dynamiс</b>, so this
                        factor should always be taken into account during
                        development for this industry. A lot of daily challenges
                        related to speed-related processes, customer loyalty,
                        extremely high competition, operational excellence, the
                        ongoing rise of social media, branding, etc are waiting
                        for travel managers.
                      </Trans>
                    </p>
                    <p className={styles.slP}>
                      <Trans i18nKey="industries.slider.travel.p2">
                        <b>SPDev team helps your business</b> achieve the right
                        balance and automate many daily tasks.
                        <br /> Our tourism industry-specific tech solutions, as
                        well as consulting services, are based on the
                        broad-spectrum of successfully completed projects.
                        High-quality app and web development, CRM system, any
                        kinds of chatbots and messengers, helping to automate
                        your daily workflow and implement the bravest ideas to
                        life.
                      </Trans>
                    </p>
                    <p className={styles.slP}>
                      <Trans i18nKey="industries.slider.travel.p3">
                        <b>Take advantage of our web-based software</b>{" "}
                        solutions that can completely enlarge your efficiency,
                        improve customer experience and generate higher profits.
                      </Trans>
                    </p>
                  </div>
                </div>
                {Btn}
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className={styles.slCon}
                data-swiper-parallax="-100"
                data-swiper-parallax-opacity="0"
              >
                <div className={styles.slH}>
                  {t(
                    "industries.slider.logistic.header",
                    "transportation & logistic"
                  )}
                </div>
                <div className={styles.slWc}>
                  <div className={clsx(styles.slC, styles.slCL)}>
                    <p className={styles.slP}>
                      <Trans i18nKey="industries.slider.logistic.p1">
                        <b>Many years of work</b>, with the logistics and
                        transportation industries, gave us knowledge that any
                        mistake can result in time and money expenditures.
                        Therefore during the project development, we use our
                        time-proven development process and pay specific
                        attention to testing our products.
                      </Trans>
                    </p>
                    <p className={styles.slP}>
                      <Trans i18nKey="industries.slider.logistic.p2">
                        <b>Our specialists</b> provide complete solutions that
                        cover everything from traffic monitoring to booking and
                        accounting and implement projects of all levels of
                        complexity taking into account high clients’ business
                        value.
                      </Trans>
                    </p>
                    <p className={styles.slP}>
                      <Trans i18nKey="industries.slider.logistic.p3">
                        <b>We offer:</b>
                        <br />• Smart supply chain solutions
                        <br />• Web and app development
                        <br />• Automated warehouses
                        <br />• Transportation management software
                        <br />• Customer Relationship Management (CRM) Systems
                        <br />• Business consulting
                        <br />• Partnership
                      </Trans>
                    </p>
                    <p className={styles.slPn}>
                      {t(
                        "industries.slider.logistic.note",
                        "Rest assured, that our skilled remote team will make every effort to implement your ideas in life and ready to go miles beyond the extra mile."
                      )}
                    </p>
                  </div>
                </div>
                {Btn}
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className={styles.slCon}
                data-swiper-parallax="-100"
                data-swiper-parallax-opacity="0"
              >
                <div className={styles.slH}>
                  {t("industries.slider.retail.header", "retail")}
                </div>
                <div className={styles.slWc}>
                  <div className={styles.slC}>
                    <p className={styles.slP}>
                      <Trans i18nKey="industries.slider.retail.p1">
                        <b>Innovative IT solutions and customer-focus</b> are
                        some of the important keys to success in the retail
                        marketplace. SPDev team will help you find your own
                        successful key that is best reap your benefits in the
                        market with technology.
                      </Trans>
                    </p>
                    <p className={styles.slP}>
                      <Trans i18nKey="industries.slider.retail.p2">
                        <b>We provide solutions</b> for the retail industry that
                        improve the purchasing process, ideally respond to your
                        customers’ demands and sustain the cost-effectiveness of
                        your business.
                      </Trans>
                    </p>
                    <p className={styles.slP}>
                      <Trans i18nKey="industries.slider.retail.p3">
                        <b>SPDev offers quality tech services</b> based on
                        long-year experience and industry- innovation:
                        <br />• IT Consulting Services
                        <br />• Content Management Systems (CMS)
                        <br />• Custom Software Development
                        <br />• Customer Relationship Management (CRM) Systems
                      </Trans>
                    </p>
                    <p className={styles.slPn}>
                      {t(
                        "industries.slider.retail.note",
                        "Let’s create the software that knows your customers well and leads you to success together."
                      )}
                    </p>
                  </div>
                </div>
                {Btn}
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className={styles.slCon}
                data-swiper-parallax="-100"
                data-swiper-parallax-opacity="0"
              >
                <div className={styles.slH}>
                  {t("industries.slider.healthcare.header", "healthcare")}
                </div>
                <div className={styles.slWc}>
                  <div className={styles.slC}>
                    <p className={styles.slP}>
                      <Trans i18nKey="industries.slider.healthcare.p1">
                        <b>We integrate engineering</b> excellence with a deep
                        understanding of the healthcare and life sciences
                        industry. Our dedicated experts help clients transform
                        the way they do business – improving patient experience,
                        reducing costs and enhancing productivity.
                      </Trans>
                    </p>
                    <p className={styles.slP}>
                      <Trans i18nKey="industries.slider.healthcare.p2">
                        <b>Get a strong track</b> record of web development and
                        complex system integrations. Design delicate machine
                        learning algorithms based on the latest innovative
                        technologies.
                      </Trans>
                    </p>
                    <p className={styles.slP}>
                      <Trans i18nKey="industries.slider.healthcare.p3">
                        <b>Analyzing</b> a huge number of inputs, we help you be
                        patient-focused and easily manage all important
                        information
                      </Trans>
                    </p>
                    <p className={styles.slP}>
                      <Trans i18nKey="industries.slider.healthcare.p4">
                        <b>Customized development</b> of web and app software
                        <br />
                        Integrated health solutions
                        <br />• Automation of daily tech workflow
                        <br />• Patient engagement tools and incentive
                        <br />• Healthcare oriented CRMs (Customer Relationship
                        Management Systems)
                        <br />• Business consulting
                      </Trans>
                    </p>
                    <p className={styles.slPn}>
                      {t(
                        "industries.slider.healthcare.note",
                        "We know that correct information at the place of patient care causes us to saved lives."
                      )}
                    </p>
                  </div>
                </div>
                {Btn}
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className={styles.slCon}
                data-swiper-parallax="-100"
                data-swiper-parallax-opacity="0"
              >
                <div className={styles.slH}>
                  {t("industries.slider.finance.header", "finance")}
                </div>
                <div className={styles.slWc}>
                  <div className={styles.slC}>
                    <p className={styles.slP}>
                      <Trans i18nKey="industries.slider.finance.p1">
                        <b>Technology plays a progressively crucial role</b> in
                        the financial industry, and effective and high-security
                        software solutions help financial institutions follow
                        changing markets, as well as identify and disqualify
                        many gaps. So we understand that such FinTech complex
                        systems need to be fast, reliable and error-free.
                      </Trans>
                    </p>
                    <p className={styles.slP}>
                      <Trans i18nKey="industries.slider.finance.p2">
                        <b>Our specialists</b> apply an individual approach to
                        every product development while using innovative
                        technology for years as well.
                      </Trans>
                    </p>
                    <p className={styles.slP}>
                      <Trans i18nKey="industries.slider.finance.p3">
                        <b>For clients performing</b> in financial services,
                        SPDev team provides professional help in the following
                        areas:
                        <br />• Web and App development for a social trading and
                        investment startup and support for the existing one
                        <br />• Customer Relationship Management (CRM) Systems
                        <br />• Data storage solutions
                        <br />• Integration of accounting and reporting systems
                        <br />• Solutions for managing transactions and payments
                        <br />• Supporting and consulting software development
                        operations
                      </Trans>
                    </p>
                    <p className={styles.slPn}>
                      {t(
                        "industries.slider.finance.note",
                        "With our team, you can always be calm, because in any changes we will be flexible and agile enough to meet your needs even in the middle of the current project."
                      )}
                    </p>
                  </div>
                </div>
                {Btn}
              </div>
            </div>
          </div>
          <div className="swiper-pagination swiper-pagination-white" />
        </div>
      </div>
    </Element>
  );
};

export default memo(Industries);
