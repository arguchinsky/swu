import React from 'react';
import './itemDetails.css';

export const PeopleDetails = ({ name, birthYear, gender, height, hairColor }) => (
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
