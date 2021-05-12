import { DateTime } from 'luxon';
import { getAsteroids } from '../../api/index';

export const GET_ASTEROIDS = 'GET_ASTEROIDS';
export const LOAD_MORE = 'LOAD_MORE';

export const getAsteroidsAC = (currentDate) => (dispatch) => {
  getAsteroids(currentDate).then((response) => {
    const allAsteroidsObject = response;
    const allAsteroidsCountKeys = Object.keys(allAsteroidsObject);
    const allAsteroids = [];
    const onlyDangerousAsteroids = [];

    for (let i = 0; i < allAsteroidsCountKeys.length; i++) {
      const date = DateTime.now().plus({ days: i }).toISODate();

      for (const asteroid of allAsteroidsObject[date]) {
        allAsteroids.push(asteroid);

        if (asteroid.is_potentially_hazardous_asteroid) {
          onlyDangerousAsteroids.push(asteroid);
        }
      }
    }

    const asteroidsToDisplay = [];

    for (let i = 0; i < 5; i++) {
      asteroidsToDisplay.push(allAsteroids[i]);
    }

    dispatch({
      type: GET_ASTEROIDS,
      allAsteroids,
      asteroidsToDisplay,
      onlyDangerousAsteroids,
    });
  });
};

export function loadMoreAC(moreAsteroids) {
  return {
    type: LOAD_MORE,
    moreAsteroids,
  };
}
