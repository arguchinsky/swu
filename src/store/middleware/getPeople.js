import { REQUESTS, RequestService } from '../../services';
import { peopleLoaded, dataRequested, dataLoaded } from '../actions';

const requestService = new RequestService(REQUESTS);

export const getPeople = (dispatch) => {
  dispatch(dataRequested());
  requestService
    .getPeople()
    .then(peopleLoaded)
    .then((action) => {
      dispatch(action);
      dispatch(dataLoaded());
    });
};
