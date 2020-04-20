import React, { memo, FC, ReactNode } from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

type FormFactor = "round";
type Props = {
  readonly children: ReactNode;
  readonly className?: string;
  readonly formFactor?: FormFactor;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: FC<Props> = ({
  children,
  formFactor,
  className = "",
  ...attrs
}) => (
  <button
    {...attrs}
    className={clsx(styles.root, className, formFactor && styles[formFactor])}
  >
    {children}
  </button>
);

export default memo(Button);
