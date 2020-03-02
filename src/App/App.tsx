import React, { memo, FC } from "react";
import Preloader from "./Preloader";
import Landing from "./Landing";

const App: FC = () => (
  <>
    <Preloader />
    <Landing />
  </>
);

export default memo(App);
