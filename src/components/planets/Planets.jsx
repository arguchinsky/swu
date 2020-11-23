import React from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from '../list-item';
import { ItemDetails } from '../item-details';
import { Loading } from '../loading';

export const Planets = () => {
  const planets = useSelector((state) => state.planets);
  const activeItem = useSelector((state) => state.activeItem);

  const items = planets.map((planet) => planet.name);
  const item = planets.find((planet) => planet.name === activeItem);

  console.log(item);
  return (
    <>
      <ListItem items={items} />
      {item ? <ItemDetails item={item} /> : <Loading />}
    </>
  );
};
