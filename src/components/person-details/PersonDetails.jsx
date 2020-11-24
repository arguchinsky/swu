import React from 'react';

export const PersonDetails = ({ item }) => {
  const { name, birthYear, gender, height, hairColor } = item;
  return (
    <>
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
    </>
  );
};
