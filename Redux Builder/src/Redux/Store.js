import {  combineReducers, legacy_createStore } from 'redux';
import {reducer as counterReducer}from "../Redux/Counter/reducer"
import {reducer as themeReducer} from "../Redux/Theme/reducer"


const rooteReducer = combineReducers({counterReducer,themeReducer,})
export const store=legacy_createStore(rooteReducer)

