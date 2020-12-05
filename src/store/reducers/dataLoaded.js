import { ACTIONS } from '../actions';

export const dataLoaded = (state = false, { type, isLoaded }) => {
  switch (type) {
    case ACTIONS.REQUEST_DATA:
      return isLoaded;
    case ACTIONS.DATA_LOADED:
      return isLoaded;
    default:
      return state;
  }
};
