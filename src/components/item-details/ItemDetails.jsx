import React from 'react';

import './itemDetails.css';
import { Loading } from '../loading';

export const ItemDetails = ({ hasItem, children }) => (
  <section className='details'>{hasItem ? children : <Loading />}</section>
);
