import React from 'react';
import { Link } from 'react-router-dom';
import './listItem.css';

export const ListItem = () => (
  <ul className='items-container'>
    <li className='item'>
      <Link to='/'>item</Link>
    </li>
    <li className='item'>
      <Link to='/'>item</Link>
    </li>
    <li className='item'>
      <Link to='/'>item</Link>
    </li>
    <li className='item'>
      <Link to='/'>item</Link>
    </li>
    <li className='item'>
      <Link to='/'>item</Link>
    </li>
    <li className='item'>
      <Link to='/'>item</Link>
    </li>
  </ul>
)
