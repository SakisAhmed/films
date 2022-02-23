import { combineReducers } from "redux";
import { moviesReducers } from "./movies";
export const rootReducer = combineReducers({ moviesReducers});