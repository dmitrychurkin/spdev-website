import React, { FC, memo, DetailedHTMLProps, InputHTMLAttributes, useState, useRef, ChangeEvent } from 'react';
import clsx from 'clsx';
import styles from './Input.module.css';

type Props = {
  readonly tag: string;
  readonly className?: string;
  readonly withCounter?: boolean;
  readonly maxCount?: number;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
const Input: FC<Props> = ({
  tag: Element,
  className,
  maxLength,
  onChange,
  withCounter = false,
  maxCount = 0,
  ...other
}) => {
  const [count, setCount] = useState(0)
  const inputAdditionalAttrs = useRef({
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      if (typeof onChange === 'function') {
        onChange(e);
      }
      if ((typeof maxCount === 'number') || withCounter) {
        setCount(e.target.value.length);
      }
    }
  });

  return (
    <div className={clsx(styles.root, className)}>
      <Element {...inputAdditionalAttrs.current} {...other} />
      <div className={styles.focuser} />
      {(((typeof maxLength === 'number') && (maxLength > 0)) || (maxCount > 0)) && (
        <div className={styles.counter}>
          <span className={styles.counterCurrent}>{count}</span>
          <span>/{maxLength ?? maxCount}</span>
        </div>
      )}
    </div>
  );
};

export default memo(Input);
