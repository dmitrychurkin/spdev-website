import { useCallback, useMemo } from "react";
import * as types from "./types";
import { IAppState, SiteLanguage } from "./state";

const useActions: ActionFactoryHook = (
  state: IAppState,
  dispatch: Function
) => {
  const changeLanguage = useCallback(
    (lang: SiteLanguage) =>
      dispatch({ type: types.CHANGE_LANGUAGE, payload: lang }),
    [dispatch]
  );

  return useMemo(
    () => ({
      changeLanguage
    }),
    [changeLanguage]
  );
};

type ActionFactoryHook = (state: IAppState, dispatch: Function) => IAppActions;

export interface IAppActions {
  readonly changeLanguage: (lang: SiteLanguage) => void;
}

export default useActions;
