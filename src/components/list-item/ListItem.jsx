/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
// import { useDispatch } from 'react-redux';
import { v1 } from 'uuid';

import './listItem.css';

export const ListItem = ({ items }) => {
  const clickHandle = (event) => console.log(event.target.id);

  return (
    <ul className='items-container'>
      {items.map((item) => (
        <li className='item' onClick={clickHandle} key={v1()} id={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};
