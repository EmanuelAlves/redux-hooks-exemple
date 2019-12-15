import { combineReducers, createStore } from "redux";

import { nameReducer } from "./reducers/nameReducer";

const store = createStore(combineReducers({ nameReducer }));

export default store;
