import React from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from '../list-item';
import { ItemDetails } from '../item-details';
import { PlanetDetails } from '../planet-details';

import { getRenderData } from '../../utils';

export const Planets = () => {
  const planets = useSelector((state) => state.planets);
  const activeItem = useSelector((state) => state.activeItem);

  const { items, item, hasItem } = getRenderData(planets, activeItem);

  return (
    <>
      <ListItem items={items} />
      <ItemDetails hasItem={hasItem}>
        <PlanetDetails item={item} />
      </ItemDetails>
    </>
  );
};
