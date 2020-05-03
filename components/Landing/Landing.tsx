import React, { memo, FC } from "react";
import Intro from "./Intro";
import Menu from "./common/Menu";
import IconSet from "./common/IconSet";
import Industries from "./Industries";
import Services from "./Services";
import Partners from "./Partners";
import ContactUs from "./ContactUs";
import Location from "./Location";
import Footer from "./Footer";

const Landing: FC = () => (
  <>
    <Intro />
    <Industries />
    <Services />
    <Partners />
    <ContactUs />
    <Location />
    <Footer />
    <Menu />
    <IconSet />
  </>
);

export default memo(Landing);
