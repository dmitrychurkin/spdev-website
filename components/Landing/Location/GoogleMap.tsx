import React, { memo, useEffect, useRef, FC, useState } from "react";
import Map, { MapRegions } from "./Map";
import styles from "./Location.module.css";

type Props = {
  readonly activeLocation?: MapRegions;
};

const GoogleMap: FC<Props> = ({ activeLocation }) => {
  const refMap = useRef<HTMLDivElement>(null);
  const [googleMap, setGoogleMap] = useState<Map>();

  useEffect(() => {
    const { current: el } = refMap;
    if (el instanceof HTMLDivElement) {
      setGoogleMap(new Map({ el }));
    }
  }, []);

  useEffect(() => {
    if (googleMap instanceof Map && activeLocation) {
      googleMap.handleTransition(activeLocation);
    }
  }, [activeLocation, googleMap]);

  return <div className={styles.map} ref={refMap} />;
};

export default memo(GoogleMap);
