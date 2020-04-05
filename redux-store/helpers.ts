import { IAppState, IHandlers, IAction } from "./interfaces"

export function createReducer(initialState: IAppState, handlers: IHandlers & Object) {
  return function reducer(state = initialState, action: IAction) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export function makeActionCreator(type: string, ...argNames: Array<keyof IAppState>) {
  return function(...args: Array<any>) {
    const action: IAction = { type, payload: {} };
    argNames.forEach((arg, index) => {
      action.payload[arg] = args[index];
    })
    return action;
  }
}