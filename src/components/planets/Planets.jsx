import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ListItem } from '../list-item';
import { PlanetDetails } from '../planet-details';
import { Loading } from '../loading';

import { getPlanets } from '../../store/middleware';
import { getTitles, getActiveItem } from '../../utils';

export const Planets = () => {
  const { dataLoaded, planets, activeItem } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlanets);
  }, [dispatch]);

  if (dataLoaded) {
    const titles = getTitles(planets);
    const item = getActiveItem(planets, activeItem);

    return (
      <>
        <ListItem titles={titles} />
        <PlanetDetails item={item} />
      </>
    );
  }

  return <Loading />;
};
