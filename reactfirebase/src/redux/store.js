import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import carReducer from "./reducer/carReducer";
import checkoutReducer from "./reducer/checkoutReducer";
import themeReducer from "./reducer/themeReducer";

const reducer = combineReducers({ carReducer, checkoutReducer, themeReducer });
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
