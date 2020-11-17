import React from 'react';
import './main.css';
import { ListItem } from '../list-item';
import { ItemDetails } from '../item-details';

export const Main = () => (
  <main className='main'>
    <ListItem />
    <ItemDetails />
  </main>
);
