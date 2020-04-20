import Head from "next/head";
import React, { FC, memo } from "react";

type Props = {
  readonly children: JSX.Element | JSX.Element[];
  readonly title: string;
};
const PageLayout: FC<Props> = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </>
);

export default memo(PageLayout);
