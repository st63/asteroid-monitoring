export const GET_ASTEOIDS_TO_DESTROY = 'GET_ASTEOIDS_TO_DESTROY';

export function pushAsteroidToDestroyAC(asteroidsToDestroy) {
   return {
      type: GET_ASTEOIDS_TO_DESTROY,
      asteroidsToDestroy,
   }
}