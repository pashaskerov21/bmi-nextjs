import {combineReducers} from '@reduxjs/toolkit';
import SearchReducer from './reducer/SearchReducer';
import LocaleReducer from './reducer/LocaleReducer';

const RootReducer = combineReducers({
    searchState: SearchReducer,
    localeState: LocaleReducer,
});

export default RootReducer;
