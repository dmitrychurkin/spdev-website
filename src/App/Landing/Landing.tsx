import React, { memo } from "react";
import Intro from "./Intro";
import Menu from "./common/Menu";
import IconSet from "./common/IconSet";
import Services from "./Services";

const Landing = () => (
  <>
    <Intro />
    <Services />
    <Menu />
    <IconSet />
  </>
);

export default memo(Landing);
