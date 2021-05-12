export const GET_ASTEROIDS_DETAIL = 'GET_ASTEROIDS_DETAIL';

const defaultState = {
  allApproachData: [],
};

export function asteroidDetailReduser(state = defaultState, action) {
  switch (action.type) {
    case GET_ASTEROIDS_DETAIL: {
      state = {
        ...state,
        allApproachData: action.allApproachData,
      };
    } break;
  }
  return state;
}
