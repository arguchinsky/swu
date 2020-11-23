import React from 'react';
import './itemDetails.css';

export const PlanetsDetails = ({ name, diameter, climate, population, terrain }) => (
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
