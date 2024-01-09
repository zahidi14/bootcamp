import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import carReducer from "./reducer/carReducer";
import checkoutReducer from "./reducer/checkoutReducer";

const reducer = combineReducers({ carReducer, checkoutReducer });
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
