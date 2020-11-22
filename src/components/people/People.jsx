import React from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from '../list-item';
import { ItemDetails } from '../item-details';

export const People = () => {
  const people = useSelector((state) => state.people);
  const activeItem = useSelector((state) => state.activeItem);
  const items = people.map((person) => person.name);

  console.log(activeItem);
  return (
    <>
      <ListItem items={items} />
      {activeItem ? <ItemDetails data={activeItem} /> : <ItemDetails data='People' />}
    </>
  );
};
