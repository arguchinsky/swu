import { ACTIONS } from '../actions';

const initialState = {
  planets: [],
  people: [],
  activeList: [],
  activeItem: null
};

export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTIONS.PLANETS_LOADED:
      return {
        ...state,
        planets: action.planets,
      }
    case ACTIONS.PEOPLE_LOADED: 
      return {
        ...state,
        people: action.people,
      }
    case ACTIONS.CHANGED_ACTIVE_LIST: 
      return {
        ...state,
        activeList: action.activeList,
      }
    case ACTIONS.CHANGED_ACTIVE_ITEM: 
      return {
        ...state,
        activeItem: action.activeItem,
      }
    default: 
      return state;
  }
}
