import { makeActionCreator } from "./helpers";
import * as ActionTypes from "./actionTypes";

export const greet = makeActionCreator(ActionTypes.GREET, 'sayHello');
