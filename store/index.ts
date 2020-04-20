import { MakeStore } from "next-redux-wrapper";
import { configureStore, Dispatch, AnyAction } from "@reduxjs/toolkit";
import reducer, { RootState } from "./reducer";

const makeStore: MakeStore = (preloadedState: RootState) => {
  const store = configureStore({
    reducer,
    preloadedState,
    devTools: process.env.NODE_ENV === "development",
  });

  if (process.env.NODE_ENV === "development" && module.hot) {
    module.hot.accept("./reducer", () => {
      store.replaceReducer(require("./reducer").default);
    });
  }

  return store;
};

export type AppDispatch = Dispatch<AnyAction>;
export default makeStore;
