import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ListItem } from '../list-item';
import { ItemDetails } from '../item-details';
import { PlanetDetails } from '../planet-details';

import { getPlanets } from '../../store/middleware';
import { getRenderData } from '../../utils';

export const Planets = () => {
  const dispatch = useDispatch();
  const { planets, activeItem } = useSelector((state) => state);

  const { items, item, hasItem } = getRenderData(planets, activeItem);

  useEffect(() => {
    dispatch(getPlanets);
  }, [dispatch]);

  return (
    <>
      <ListItem items={items} />
      <ItemDetails hasItem={hasItem}>
        <PlanetDetails item={item} />
      </ItemDetails>
    </>
  );
};
