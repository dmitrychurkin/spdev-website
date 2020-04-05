import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import state from './state';
import rootReducer from './reducers';
import { IAppState } from './interfaces';

export default function configureStore(initialState: IAppState = state) {
  const composer: any = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
  const store = createStore(rootReducer, initialState, composer(applyMiddleware(thunkMiddleware)));
  const m: any = module;
  if (process.env.NODE_ENV !== 'production' && m.hot) {
    m.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }
  return store;
}