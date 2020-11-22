import React from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from '../list-item';
import { ItemDetails } from '../item-details';

export function People() {
  const statePeople = useSelector((state) => state.statePeople);

  console.log(statePeople);

  return (
    <>
      <ListItem />
      <ItemDetails data="People" />
    </>
  );
}
