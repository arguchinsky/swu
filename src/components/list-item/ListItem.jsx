/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useDispatch } from 'react-redux';
import { v1 } from 'uuid';

import { changedActiveItem } from '../../store/actions';

import './listItem.css';

export const ListItem = ({ items }) => {
  const dispatch = useDispatch();
  const clickHandler = ({ target: { id } }) => dispatch(changedActiveItem(id));

  return (
    <ul className='items-container'>
      {items.map((item) => (
        <li className='item' onClick={clickHandler} key={v1()} id={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};
