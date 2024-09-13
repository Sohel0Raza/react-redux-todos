import { applyMiddleware, createStore } from "redux";
import { todosReducer } from "./services/reduceres/todosReducer";
import { thunk } from "redux-thunk";

export const store = createStore(todosReducer, applyMiddleware(thunk))