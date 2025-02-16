import React from "react";
import { Provider } from "react-redux";
import withRedux, { ReduxWrapperAppProps } from "next-redux-wrapper";
import App from "next/app";
import { ToastProvider } from "react-toast-notifications";
import i18n from "i18n";
import makeStore from "store";
import { RootState } from "store/reducer";
import Preloader from "components/Preloader";
import "swiper/css/swiper.min.css";
import "styles.css";

const { appWithTranslation } = i18n;

class CustomizedApp extends App<ReduxWrapperAppProps<RootState>> {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <ToastProvider>
          <Component {...pageProps} />
          <Preloader />
        </ToastProvider>
      </Provider>
    );
  }
}

export default withRedux(makeStore, {
  debug: process.env.NODE_ENV === "development",
})(appWithTranslation(CustomizedApp));
