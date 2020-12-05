import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ListItem } from '../list-item';
import { PersonDetails } from '../person-details';
import { Loading } from '../loading';

import { getPeople } from '../../store/middleware';
import { getTitles, getActiveItem } from '../../utils';

export const People = () => {
  const { dataLoaded, people, activeItem } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPeople);
  }, [dispatch]);

  if (dataLoaded) {
    const titles = getTitles(people);
    const item = getActiveItem(people, activeItem);
    return (
      <>
        <ListItem titles={titles} />
        <PersonDetails item={item} />
      </>
    );
  }
  return <Loading />;
};
