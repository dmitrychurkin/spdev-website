import { EnhancedStore } from '@reduxjs/toolkit';
import { NextComponentType } from 'next';
import { Provider } from 'react-redux';
import withRedux from "next-redux-wrapper";
import App from 'next/app'
import i18n from 'i18n';
import makeStore from 'store';
import Preloader from 'components/Preloader';
import 'styles.css';

const { appWithTranslation } = i18n;

type Props = {
  readonly Component: NextComponentType;
  readonly pageProps: any;
  readonly store: EnhancedStore;
};

class CustomizedApp extends App<Props> {
  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <Component {...pageProps} />
        <Preloader />
      </Provider>
    )
  }
}


export default withRedux(makeStore, { debug: process.env.NODE_ENV === 'development' })(appWithTranslation(CustomizedApp));
