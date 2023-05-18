import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {counterReducer} from "./reducers/counterReducer";

const composedEnhancer = composeWithDevTools();

const store = createStore(
                combineReducers({
                    counter: counterReducer,
                }),
                composedEnhancer
                );

export default store;