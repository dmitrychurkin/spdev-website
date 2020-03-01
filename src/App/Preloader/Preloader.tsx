import React, { memo, useState, useCallback } from "react";
import clsx from 'clsx';
import styles from "./Preloader.module.css";

const Preloader = () => {
  const [end, setEnd] = useState(false);
  const [hide, setHide] = useState(false);
  const onAnimationEnd = useCallback(() => setEnd(true), []);
  const onAnimationIteration = useCallback(() => setHide(true), []);
  return (
    <div
      onAnimationEnd={onAnimationEnd}
      onAnimationIteration={onAnimationIteration}
      className={clsx(
        styles.root,
        hide && styles.hide,
        end && styles.end
      )}
      role="alert"
      aria-busy="true"
    >
      <div className={styles.loader}>
        <div className={styles.balls}>
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};

export default memo(Preloader);
