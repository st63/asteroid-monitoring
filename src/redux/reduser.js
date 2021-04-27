import { GET_ASTEOIDS_TO_DESTROY } from "./actions";

const defaultState = {
   asteroidsToDestroy: []
};

export function asteroidsToDestroyReduser(state, action) {
   state = state || defaultState;
   switch (action.type) {
      case GET_ASTEOIDS_TO_DESTROY: {
         state = {
            ...state,
            asteroidsToDestroy: [...state.asteroidsToDestroy, action.asteroidsToDestroy]
         };
      } break;
   }
   return state;
}