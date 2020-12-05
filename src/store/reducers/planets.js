import { ACTIONS } from '../actions';

export const planets = (state = [], { type, loadedPlanets }) => {
  switch (type) {
    case ACTIONS.PLANETS_LOADED:
      return [...loadedPlanets];
    default:
      return state;
  }
};
