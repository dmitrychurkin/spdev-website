import React, { FC, memo, useState, useRef } from "react";
import clsx from "clsx";
import styles from "./Input.module.css";

type Props = {
  readonly tag?: string;
  readonly withCounter?: boolean;
} & React.HTMLProps<HTMLInputElement | HTMLTextAreaElement>;
const Input: FC<Props> = ({
  tag: Element = "input",
  withCounter = false,
  className,
  maxLength,
  onChange,
  ...otherProps
}) => {
  const [count, setCount] = useState(0);
  const inputAdditionalAttrs = useRef({
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      if (typeof onChange === "function") {
        onChange(e);
      }
      if (withCounter) {
        setCount(e.target.value.length);
      }
    },
  });

  return (
    <div className={clsx(styles.root, className)}>
      <Element {...inputAdditionalAttrs.current} {...otherProps} />
      <div className={styles.focuser} />
      {withCounter && typeof maxLength === "number" && maxLength > 0 && (
        <div className={styles.counter}>
          <span className={styles.counterCurrent}>{count}</span>
          <span>/{maxLength}</span>
        </div>
      )}
    </div>
  );
};

export default memo(Input);
