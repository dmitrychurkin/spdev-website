import React, { memo, useEffect, useRef, FC, useState } from 'react';
import Map from './Map';
import styles from './Location.module.css';

type Props = {
  readonly activeLocation?: LocationKey;
};
const GoogleMap: FC<Props> = ({ activeLocation}) => {
  const refMap = useRef<HTMLDivElement>(null);
  const [googleMap, setGoogleMap] = useState<Map>();
  
  useEffect(() => {
    const { current: el } = refMap;
    if (el instanceof HTMLDivElement) {
      setGoogleMap(new Map({ el }));
    }
  }, []);

  useEffect(() => {
    if (googleMap instanceof Map && typeof activeLocation === 'number') {
      googleMap.handleTransition(activeLocation);
    }
  }, [activeLocation]);

  return <div className={styles.map} ref={refMap} />;
};

export enum LocationKey {
  IVANO_FRANKOVSK,
  MARIUPOL
};

export default memo(GoogleMap);
