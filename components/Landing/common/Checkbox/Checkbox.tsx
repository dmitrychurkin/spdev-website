import React, { memo, FC } from "react";
import clsx from "clsx";
import styles from "./Checkbox.module.css";

type Props = {
  readonly labelElement?: JSX.Element;
} & React.HTMLProps<HTMLInputElement>;
const Checkbox: FC<Props> = ({
  labelElement,
  label,
  className,
  ...otherProps
}) => (
  <label className={clsx(styles.root, className)}>
    <input type="checkbox" {...otherProps} />
    <span>{label ?? labelElement}</span>
  </label>
);

export default memo(Checkbox);
