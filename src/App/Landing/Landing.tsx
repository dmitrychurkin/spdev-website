import React, { memo } from "react";
import Intro from "./Intro";
import Menu from "./common/Menu";

const Landing = () => (
  <>
    <Intro />
    <Menu />
  </>
);

export default memo(Landing);
