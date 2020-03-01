import appState, { IAppState } from "./state";
import * as types from "./types";

export default createReducer(appState, {
  [types.CHANGE_LANGUAGE]: (state: IAppState, { payload: lang }) => ({
    ...state,
    lang
  })
});

function createReducer(appState: IAppState, handlers: IHandlers) {
  return (state = appState, action: IAction) =>
    handlers.hasOwnProperty(action.type)
      ? handlers[action.type](state, action)
      : state;
}

interface IHandlers {
  readonly [key: string]: (state: IAppState, action: IAction) => IAppState;
}
interface IAction {
  readonly type: string;
  readonly payload: any;
}
