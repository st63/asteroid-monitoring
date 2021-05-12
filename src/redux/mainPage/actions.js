import { getAsteroids } from '../../api/index';
import { DateTime } from "luxon";

export const GET_ASTEROIDS = 'GET_ASTEROIDS';
export const LOAD_MORE = 'LOAD_MORE';

export const getAsteroidsAC = (currentDate) => {
   return (dispatch) => {
      getAsteroids(currentDate).then((response) => {

         const allAsteroidsObject = response;
         const allAsteroidsCountKeys = Object.keys(allAsteroidsObject);
         let allAsteroids = [];
         let onlyDangerousAsteroids = [];

         for (let i = 0; i < allAsteroidsCountKeys.length; i++) {

            const date = DateTime.now().plus({ days: i }).toISODate();

            for (let asteroid of allAsteroidsObject[date]) {

               allAsteroids.push(asteroid);

               if (asteroid.is_potentially_hazardous_asteroid) {
                  onlyDangerousAsteroids.push(asteroid)
               }
            }
         }

         let asteroidsToDisplay = [];

         for (let i = 0; i < 5; i++) {

            asteroidsToDisplay.push(allAsteroids[i])
         }

         dispatch({
            type: GET_ASTEROIDS,
            allAsteroids,
            asteroidsToDisplay,
            onlyDangerousAsteroids,
         });
      });
   };
};

export function loadMoreAC(moreAsteroids) {
   return {
      type: LOAD_MORE,
      moreAsteroids,
   }
}