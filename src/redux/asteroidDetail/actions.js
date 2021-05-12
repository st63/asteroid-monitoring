import { getAsteroidsDetail } from '../../api/index';

export const GET_ASTEROIDS_DETAIL = 'GET_ASTEROIDS_DETAIL';

export const getAsteroidsDetailAC = (id) => (dispatch) => {
  getAsteroidsDetail(id).then((response) => {
    dispatch({
      type: GET_ASTEROIDS_DETAIL,
      allApproachData: response,
    });
  });
};
