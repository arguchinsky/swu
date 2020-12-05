import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ListItem } from '../list-item';
import { ItemDetails } from '../item-details';
import { PersonDetails } from '../person-details';
import { Loading } from '../loading';

import { getPeople } from '../../store/middleware';
import { getRenderData } from '../../utils';

export const People = () => {
  const { dataLoaded, people, activeItem } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPeople);
  }, [dispatch]);

  if (dataLoaded) {
    const { items, item, hasItem } = getRenderData(people, activeItem);

    return (
      <>
        <ListItem items={items} />
        <ItemDetails hasItem={hasItem}>
          <PersonDetails item={item} />
        </ItemDetails>
      </>
    );
  }
  return <Loading />;
};
