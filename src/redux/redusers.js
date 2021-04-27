import { combineReducers, createStore } from 'redux';
import { asteroidsToDestroyReduser } from "./reduser";

let redusers = combineReducers({
   asteroidsToDestroyPage: asteroidsToDestroyReduser,
});

export let store = createStore(redusers);