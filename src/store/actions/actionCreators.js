import { ACTIONS } from './actionTypes';

export const planetsLoaded = (loadedPlanets) => ({ type: ACTIONS.PLANETS_LOADED, loadedPlanets });

export const peopleLoaded = (loadedPeople) => ({ type: ACTIONS.PEOPLE_LOADED, loadedPeople });

export const changedActiveItem = (item) => ({
  type: ACTIONS.CHANGED_ACTIVE_ITEM,
  item,
});

export const dataRequested = () => ({
  type: ACTIONS.REQUEST_DATA,
  isLoaded: false,
});

export const dataLoaded = () => ({
  type: ACTIONS.DATA_LOADED,
  isLoaded: true,
});
