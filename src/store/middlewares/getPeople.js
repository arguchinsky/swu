import { peopleLoaded } from '../actions';
import { REQUESTS, RequestService } from '../../services';

const requestService = new RequestService(REQUESTS);

export const getPeople = (dispatch) => {
  requestService.getPeople().then(peopleLoaded).then(dispatch);
};
