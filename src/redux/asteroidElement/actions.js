export const GET_ASTEROIDS_TO_DESTROY = 'GET_ASTEROIDS_TO_DESTROY';

export function pushAsteroidToDestroyAC(asteroidsToDestroy) {
  return {
    type: GET_ASTEROIDS_TO_DESTROY,
    asteroidsToDestroy,
  };
}
