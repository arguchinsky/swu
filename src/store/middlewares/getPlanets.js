import { REQUESTS, RequestService } from '../../services';
import { planetsLoaded } from '../actions';

const requestService = new RequestService(REQUESTS);

export const getPlanets = (dispatch) => {
  requestService.getPlanets().then(planetsLoaded).then(dispatch);
};
