import { Store } from 'redux';
import { NextComponentType, NextPageContext } from 'next';
import { Provider } from 'react-redux';
import withRedux from "next-redux-wrapper";
import App, { AppContext, AppInitialProps } from 'next/app'
import i18n from '../i18n';
import configureStore from '../redux-store';
import { IAppState, IAction } from '../redux-store/interfaces';
import '../styles.css';

const { appWithTranslation } = i18n;
const appStore = configureStore();

type Props = {
  readonly Component: NextComponentType<NextPageContext<IAppState, IAction>, any, {}>;
  readonly pageProps: any;
  readonly store: Store<IAppState, IAction>;
};
function CustomizedApp({ Component, pageProps, store }: Props) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

CustomizedApp.getInitialProps = async (appContext: AppContext) => {
  const initialProps: AppInitialProps = await App.getInitialProps(appContext)
  return initialProps;
}


export default withRedux(() => appStore)(appWithTranslation(CustomizedApp));
