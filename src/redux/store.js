import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {counterReducer} from "./reducers/counterReducer";
import {todoReducer} from "./reducers/todoReducer";
import { usersReducer } from "./reducers/usersReducer";
import createSagaMiddleware from "redux-saga"; 

import rootSaga from "./sagas";


const sagaMiddleware = createSagaMiddleware(); 

const composedEnhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

                            
const store = createStore(
                combineReducers({
                    counter: counterReducer,
                    todo: todoReducer,
                    users: usersReducer,
                }),
                composedEnhancer
                );


export default store;

sagaMiddleware.run(rootSaga);