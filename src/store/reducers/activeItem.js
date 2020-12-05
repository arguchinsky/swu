import { ACTIONS } from '../actions';

export const activeItem = (state = null, { type, item }) => {
  switch (type) {
    case ACTIONS.CHANGED_ACTIVE_ITEM:
      return item;
    default:
      return state;
  }
};
