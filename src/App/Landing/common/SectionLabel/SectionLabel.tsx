import React, { FC, memo } from 'react';

const SectionLabel: FC = ({ children }) => (
  <div>{children}</div>
);

export default memo(SectionLabel);
