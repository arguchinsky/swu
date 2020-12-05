import React from 'react';

import { EmptyDetails } from '../empty-details';

export const PlanetDetails = ({ item }) => {
  if (item) {
    const { name, diameter, climate, population, terrain } = item;
    return (
      <section className='details'>
        <h2>{name}</h2>
        <ul>
          <li>
            <strong>Diameter: </strong>
            {diameter}
          </li>
          <li>
            <strong>Climate: </strong>
            {climate}
          </li>
          <li>
            <strong>Population: </strong>
            {population}
          </li>
          <li>
            <strong>Terrain: </strong>
            {terrain}
          </li>
        </ul>
      </section>
    );
  }

  return <EmptyDetails />;
};
