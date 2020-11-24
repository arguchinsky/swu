import React from 'react';

export const PlanetDetails = ({ item }) => {
  const { name, diameter, climate, population, terrain } = item;
  return (
    <>
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
    </>
  );
};
