/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  memo,
  FC,
  useCallback,
  useRef,
  useState,
  useEffect,
  useMemo,
} from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { Element } from "react-scroll";
import { ScrollLabels } from "../common/Menu";
import SectionLabel from "../common/SectionLabel";
import styles from "./Industries.module.css";
import { Link } from "react-scroll";
import Button from "../common/Button";

type Props = {
  readonly bgUrl?: string;
  readonly delay?: number;
};

const SLIDER1_SETTINGS = {
  dots: false,
  infinite: false,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

type SlickSlider = {
  slickGoTo: (index: number) => void;
};

const SLIDER2_SETTINGS = {
  dots: false,
  infinite: false,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  speed: 800,
  swipe: false,
};

const Industries: FC<Props> = memo(({ bgUrl = "/industries.webp" }) => {
  const { t } = useTranslation("landing");
  const sliderSwipeRef = useRef<SlickSlider>();
  const sliderFadeRef = useRef<SlickSlider>();
  const [slide, setSlide] = useState<number>(0);
  const handleSwipeRef = useCallback(
    (node) => {
      sliderSwipeRef.current = node;
    },
    [sliderSwipeRef]
  );
  const handleFadeRef = useCallback(
    (node) => {
      sliderFadeRef.current = node;
    },
    [sliderFadeRef]
  );
  const handleBeforeChange = useCallback(
    (_oldIndex, newIndex: number) => {
      setSlide(newIndex);
    },
    [setSlide]
  );

  const handleClick = useCallback(
    ({ target }) => {
      setSlide(+target.value);
    },
    [setSlide]
  );

  useEffect(() => {
    if (sliderFadeRef.current) {
      sliderFadeRef.current.slickGoTo(slide);
    }
    if (sliderSwipeRef.current) {
      sliderSwipeRef.current.slickGoTo(slide);
    }
  }, [slide]);

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
        <div className={styles.container}>
          <ul className={styles.nav}>
            <li>
              <button
                value="0"
                className={clsx(styles.button, {
                  [styles.active]: slide === 0,
                })}
                onClick={handleClick}
              />
            </li>
            <li>
              <button
                value="1"
                className={clsx(styles.button, {
                  [styles.active]: slide === 1,
                })}
                onClick={handleClick}
              />
            </li>
            <li>
              <button
                value="2"
                className={clsx(styles.button, {
                  [styles.active]: slide === 2,
                })}
                onClick={handleClick}
              />
            </li>
            <li>
              <button
                value="3"
                className={clsx(styles.button, {
                  [styles.active]: slide === 3,
                })}
                onClick={handleClick}
              />
            </li>
          </ul>
          <div className={styles.content}>
            <Slider
              {...SLIDER1_SETTINGS}
              initialSlide={0}
              className={styles.slider}
              beforeChange={handleBeforeChange}
              ref={handleSwipeRef}
            >
              <div className={styles.slide}>
                <div
                  className={styles.image}
                  style={{
                    backgroundImage: `url(${bgUrl})`,
                  }}
                />
              </div>
              <div className={styles.slide}>
                <div
                  className={styles.image}
                  style={{
                    backgroundImage: `url(${bgUrl})`,
                  }}
                />
              </div>
              <div className={styles.slide}>
                <div
                  className={styles.image}
                  style={{
                    backgroundImage: `url(${bgUrl})`,
                  }}
                />
              </div>
              <div className={styles.slide}>
                <div
                  className={styles.image}
                  style={{
                    backgroundImage: `url(${bgUrl})`,
                  }}
                />
              </div>
              <div className={styles.slide}>
                <div
                  className={styles.image}
                  style={{
                    backgroundImage: `url(${bgUrl})`,
                  }}
                />
              </div>
            </Slider>
            <div className={styles.gradientWrap}>
              <div className={styles.gradient} />
            </div>
            <div className={styles.descWrap}>
              <Slider
                {...SLIDER2_SETTINGS}
                ref={handleFadeRef}
                className={styles.fadeSlider}
              >
                <div className={styles.desc}>
                  <div className={styles.text}>
                    <h4>Travel</h4>
                    <p>
                      <b>The travel industry is very dynamiс</b>, so this always
                      be taken into account during development for this
                      industry. A lot of daily challenges related to
                      speed-related speed-related processes, customer loyalty,
                      extremely high competition, operational excellence, the
                      ongoing rise of social media, branding, etc are waiting
                      for travel managers.
                    </p>
                  </div>
                  {Btn}
                </div>
                <div className={styles.desc}>
                  <div className={styles.text}>
                    <h4>Travel 2</h4>
                    <p>
                      <b>The travel industry is very dynamiс</b>, so this always
                      be taken into account during development for this
                      industry. A lot of daily challenges related to
                      speed-related speed-related processes, customer loyalty,
                      extremely high competition, operational excellence, the
                      ongoing rise of social media, branding, etc are waiting
                      for travel managers.
                    </p>
                    <p>
                      <b>The travel industry is very dynamiс</b>, so this always
                      be taken into account during development for this
                      industry. A lot of daily challenges related to
                      speed-related speed-related processes, customer loyalty,
                      extremely high competition, operational excellence, the
                      ongoing rise of social media, branding, etc are waiting
                      for travel managers.
                    </p>
                  </div>
                  {Btn}
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
});

export default Industries;
