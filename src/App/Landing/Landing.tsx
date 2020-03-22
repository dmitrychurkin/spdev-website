import React, { memo } from "react";
import Intro from "./Intro";
import Menu from "./common/Menu";
import IconSet from "./common/IconSet";
import Services from "./Services";
import Partners from "./Partners";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const Landing = () => (
  <>
    <Intro />
    <Services />
    <Partners />
    <ContactUs />
    <Footer />
    <Menu />
    <IconSet />
  </>
);

export default memo(Landing);
