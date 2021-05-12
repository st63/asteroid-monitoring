import { GET_ASTEROIDS, LOAD_MORE } from './actions';

const defaultState = {
  allAsteroids: [],
  asteroidsToDisplay: [],
  onlyDangerousAsteroids: [],
};

export function mainPageReducer(state, action) {
  state = state || defaultState;
  switch (action.type) {
    case GET_ASTEROIDS: {
      state = {
        ...state,
        allAsteroids: action.allAsteroids,
        asteroidsToDisplay: action.asteroidsToDisplay,
        onlyDangerousAsteroids: action.onlyDangerousAsteroids,
      };
    } break;

    case LOAD_MORE: {
      state = {
        ...state,
        asteroidsToDisplay: [...state.asteroidsToDisplay, ...action.moreAsteroids],
      };
    } break;
  }
  return state;
}
