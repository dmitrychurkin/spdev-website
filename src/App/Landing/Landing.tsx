import React, { memo } from "react";
import Intro from "./Intro";
import Menu from "./common/Menu";
import IconSet from "./common/IconSet";

const Landing = () => (
  <>
    <Intro />
    <Menu />
    <IconSet />
  </>
);

export default memo(Landing);
