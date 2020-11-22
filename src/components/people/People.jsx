import React, { useState } from 'react';
// import { useSelector } from 'react-redux';

import { ListItem } from '../list-item';
import { ItemDetails } from '../item-details';

export function People() {
  const [people, setPeople] = useState();

  return (
  <>
    <ListItem />
    <ItemDetails data='People'/>
  </>
  )
};
