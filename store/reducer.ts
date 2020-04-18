import { createReducer } from '@reduxjs/toolkit';

// TODO: replace createReducer with combineReducers once slices ready
const rootReducer = createReducer({}, {}); // combineReducers({});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
