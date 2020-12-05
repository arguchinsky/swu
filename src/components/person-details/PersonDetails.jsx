import React from 'react';

import { EmptyDetails } from '../empty-details';

export const PersonDetails = ({ item }) => {
  if (item) {
    const { name, birthYear, gender, height, hairColor } = item;
    return (
      <section className='details'>
        <h2>{name}</h2>
        <ul>
          <li>
            <strong>Birth Year: </strong>
            {birthYear}
          </li>
          <li>
            <strong>Gender: </strong>
            {gender}
          </li>
          <li>
            <strong>Height: </strong>
            {height}
          </li>
          <li>
            <strong>Hair Color: </strong>
            {hairColor}
          </li>
        </ul>
      </section>
    );
  }
  return <EmptyDetails />;
};
