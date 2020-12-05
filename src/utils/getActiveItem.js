/* eslint-disable implicit-arrow-linebreak */

export const getActiveItem = (collection, activeItem) =>
  collection.find((item) => item.name === activeItem);
