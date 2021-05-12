import { GET_ASTEROIDS_TO_DESTROY } from './actions';

const defaultState = {
  asteroidsToDestroy: [],
};

export function asteroidElementReducer(state, action) {
  state = state || defaultState;
  switch (action.type) {
    case GET_ASTEROIDS_TO_DESTROY: {
      state = {
        ...state,
        asteroidsToDestroy: [...state.asteroidsToDestroy, action.asteroidsToDestroy],
      };
    } break;
  }
  return state;
}
