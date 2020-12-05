import { ACTIONS } from '../actions';

export const people = (state = [], { type, loadedPeople }) => {
  switch (type) {
    case ACTIONS.PEOPLE_LOADED:
      return [...loadedPeople];
    default:
      return state;
  }
};
