import Head from 'next/head';
import { FC } from 'react';

type Props = {
  readonly children: JSX.Element | JSX.Element[];
  readonly title: string;
};
const PageLayout: FC<Props> = ({ children, title }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Please insert real description here" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
    {children}
  </>
);

export default PageLayout;
