import React from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from '../list-item';
import { PlanetsDetails } from '../item-details';
import { Loading } from '../loading';

export const Planets = () => {
  const planets = useSelector((state) => state.planets);
  const activeItem = useSelector((state) => state.activeItem);

  const items = planets.map((planet) => planet.name);
  const item = planets?.find((planet) => planet.name === activeItem);

  return (
    <>
      <ListItem items={items} />
      {item ? (
        <PlanetsDetails
          name={item.name}
          diameter={item.diameter}
          climate={item.climate}
          population={item.population}
          terrain={item.terrain}
        />
      ) : (
        <Loading />
      )}
    </>
  );
};
