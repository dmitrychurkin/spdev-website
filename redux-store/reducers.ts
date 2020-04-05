import { createReducer } from "./helpers";
import appState from "./state";
import * as ActionTypes from "./actionTypes";
import { IAppState, IAction } from "./interfaces";

export default createReducer(appState, {
  [ActionTypes.GREET]: (state: IAppState, action: IAction) => ({ ...state, ...action.payload })
});