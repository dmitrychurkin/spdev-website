import React, { FC, memo } from 'react';

type Props = {
  readonly children: string;
};
const SectionLabel: FC<Props> = ({ children }) => (
  <div>{children}</div>
);

export default memo(SectionLabel);
