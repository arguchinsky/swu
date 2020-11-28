import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ListItem } from '../list-item';
import { ItemDetails } from '../item-details';
import { PersonDetails } from '../person-details';
import { Loading } from '../loading';

import { getPeople } from '../../store/middleware';
import { getRenderData } from '../../utils';

export const People = () => {
  const dispatch = useDispatch();
  const { people, activeItem } = useSelector((state) => state);

  const { isLoaded, items, item, hasItem } = getRenderData(people, activeItem);

  useEffect(() => {
    dispatch(getPeople);
  }, [dispatch]);

  return isLoaded ? (
    <>
      <ListItem items={items} />
      <ItemDetails hasItem={hasItem}>
        <PersonDetails item={item} />
      </ItemDetails>
    </>
  ) : (
    <Loading />
  );
};
