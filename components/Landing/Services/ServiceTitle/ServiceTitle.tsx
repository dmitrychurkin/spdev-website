import React, { FC, memo } from "react";
import clsx from "clsx";
import styles from "./ServiceTitle.module.css";

type Props = {
  readonly isActive: boolean;
  readonly className: string;
  readonly children: JSX.Element;
};
const ServiceTitle: FC<Props> = ({ isActive, className, children }) => (
  <div className={isActive ? clsx(styles.active, className) : styles.root}>
    {children}
  </div>
);

export default memo(ServiceTitle);
