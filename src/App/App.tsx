import React, { memo, FC } from "react";
import Preloader from "./Preloader";
import Landing from "./Landing";

// TODO: remove it later!!!!!!
const SHOW = false;
const App: FC = () => (
  <>
    {SHOW && <Preloader />}
    <Landing />
  </>
);

export default memo(App);
