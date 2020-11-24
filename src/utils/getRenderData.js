export const getRenderData = (storeList, storeActive) => {
  const items = storeList.map((listItem) => listItem.name);
  const item = storeList.find((listItem) => listItem.name === storeActive);
  const hasItem = item ?? false;

  return { items, item, hasItem };
};
