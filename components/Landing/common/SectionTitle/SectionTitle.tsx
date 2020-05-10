import React, { FC, memo } from "react";
import clsx from "clsx";
import styles from "./SectionTitle.module.css";

type Props = {
  readonly className?: string;
  readonly children: JSX.Element;
};
const SectionTitle: FC<Props> = ({ className, children }) => (
  <div className={clsx(styles.root, className)}>{children}</div>
);

export default memo(SectionTitle);
