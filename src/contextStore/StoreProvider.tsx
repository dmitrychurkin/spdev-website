import React, { FC, createContext, useReducer } from "react";
import initialAppState, { IAppState } from "./state";
import reducer from "./reducer";
import useActions, { IAppActions } from "./useActions";

export const AppStoreContext = createContext<IAppContext>({});

const AppStoreProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAppState);
  const actions = useActions(state, dispatch);
  return (
    <AppStoreContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </AppStoreContext.Provider>
  );
};

export interface IAppContext {
  state?: IAppState;
  dispatch?: Function;
  actions?: IAppActions;
}

export { AppStoreProvider as default };
