import { REQUESTS, RequestService } from '../../services';
import { planetsLoaded, dataRequested, dataLoaded } from '../actions';

const requestService = new RequestService(REQUESTS);

export const getPlanets = (dispatch) => {
  dispatch(dataRequested());
  requestService
    .getPlanets()
    .then(planetsLoaded)
    .then((action) => {
      dispatch(action);
      dispatch(dataLoaded());
    });
};
