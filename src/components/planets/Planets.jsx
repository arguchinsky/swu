import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ListItem } from '../list-item';
import { ItemDetails } from '../item-details';
import { PlanetDetails } from '../planet-details';
import { Loading } from '../loading';

import { getPlanets } from '../../store/middleware';
import { getRenderData } from '../../utils';

export const Planets = () => {
  const { dataLoaded, planets, activeItem } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlanets);
  }, [dispatch]);

  if (dataLoaded) {
    const { items, item, hasItem } = getRenderData(planets, activeItem);

    return (
      <>
        <ListItem items={items} />
        <ItemDetails hasItem={hasItem}>
          <PlanetDetails item={item} />
        </ItemDetails>
      </>
    );
  }

  return <Loading />;
};
