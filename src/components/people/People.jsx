import React from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from '../list-item';
import { ItemDetails } from '../item-details';
import { PersonDetails } from '../person-details';

import { getRenderData } from '../../utils';

export const People = () => {
  const people = useSelector((state) => state.people);
  const activeItem = useSelector((state) => state.activeItem);

  const { items, item, hasItem } = getRenderData(people, activeItem);

  return (
    <>
      <ListItem items={items} />
      <ItemDetails hasItem={hasItem}>
        <PersonDetails item={item} />
      </ItemDetails>
    </>
  );
};
