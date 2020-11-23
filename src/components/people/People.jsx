import React from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from '../list-item';
import { PeopleDetails } from '../item-details';
import { Loading } from '../loading';

export const People = () => {
  const people = useSelector((state) => state.people);
  const activeItem = useSelector((state) => state.activeItem);

  const items = people.map((person) => person.name);
  const item = people.find((person) => person.name === activeItem);

  return (
    <>
      <ListItem items={items} />
      {item ? (
        <PeopleDetails
          name={item.name}
          birthYear={item.birthYear}
          gender={item.gender}
          height={item.height}
          hairColor={item.hairColor}
        />
      ) : (
        <Loading />
      )}
    </>
  );
};
