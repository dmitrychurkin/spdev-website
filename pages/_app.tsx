import { Provider } from 'react-redux';
import withRedux, { ReduxWrapperAppProps } from "next-redux-wrapper";
import App from 'next/app'
import i18n from 'i18n';
import makeStore from 'store';
import { RootState } from 'store/reducer';
import Preloader from 'components/Preloader';
import 'styles.css';

const { appWithTranslation } = i18n;

class CustomizedApp extends App<ReduxWrapperAppProps<RootState>> {
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
