import { applyMiddleware, combineReducers, createStore } from 'redux';
import { asteroidElementReducer } from "./asteroidElement/reducer";
import { mainPageReducer } from './mainPage/reducer';
import { asteroidDetailReduser } from '../redux/asteroidDetail/reducer';
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
   mainPage: mainPageReducer,
   asteroidElement: asteroidElementReducer,
   asteroidDetail: asteroidDetailReduser,
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));