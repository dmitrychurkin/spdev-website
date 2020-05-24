import React, { memo, forwardRef, ForwardRefRenderFunction } from "react";
import clsx from "clsx";
import styles from "./Checkbox.module.css";

type Props = {
  readonly labelElement?: JSX.Element;
} & React.HTMLProps<HTMLInputElement>;
const Checkbox: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { labelElement, label, className, ...otherProps },
  ref
) => (
  <label className={clsx(styles.root, className)}>
    <input ref={ref} type="checkbox" {...otherProps} />
    <span>{label ?? labelElement}</span>
  </label>
);

export default memo(forwardRef(Checkbox));
