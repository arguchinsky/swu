import { ACTIONS } from './actionTypes';

export const planetsLoaded = (planets) => ({ type: ACTIONS.PLANETS_LOADED, planets });
export const peopleLoaded = (people) => ({ type: ACTIONS.PEOPLE_LOADED, people });
export const changedActiveItem = (item) => ({
  type: ACTIONS.CHANGED_ACTIVE_ITEM,
  activeItem: item,
});
