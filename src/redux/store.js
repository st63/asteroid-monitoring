import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { asteroidElementReducer } from './asteroidElement/reducer';
import { mainPageReducer } from './mainPage/reducer';
import { asteroidDetailReduser } from './asteroidDetail/reducer';

const reducers = combineReducers({
  mainPage: mainPageReducer,
  asteroidElement: asteroidElementReducer,
  asteroidDetail: asteroidDetailReduser,
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
