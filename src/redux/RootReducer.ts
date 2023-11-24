// RootReducer.ts
import {combineReducers} from '@reduxjs/toolkit';
import SearchReducer, { SearchStateType } from './reducer/SearchReducer';

export type RootStateType = {
    searchState: SearchStateType
}

const RootReducer = combineReducers({
    searchState: SearchReducer,
});

export default RootReducer;
