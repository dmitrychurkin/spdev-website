import { AnyAction } from "redux";

export interface IAppState {
  sayHello?: boolean;
}

export interface IHandlers {
  readonly [key: string]: (state: IAppState, action: IAction) => IAppState;
}

export type IAction = AnyAction;
