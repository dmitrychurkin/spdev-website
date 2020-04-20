import React, { FC, memo } from "react";
import clsx from "clsx";
import styles from "./SectionLabel.module.css";

type Props = {
  readonly children: string;
  readonly className?: string;
};
const SectionLabel: FC<Props> = ({ children, className }) => (
  <div className={clsx(styles.root, className)}>{children}</div>
);

export default memo(SectionLabel);
