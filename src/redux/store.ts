// store.ts
import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import RootReducer from "./RootReducer";

const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;

