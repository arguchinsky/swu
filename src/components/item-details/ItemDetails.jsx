import React from 'react';

import { EmptyDetails } from '../empty-details';

import './itemDetails.css';

export const ItemDetails = ({ hasItem, children }) => (
  <section className='details'>{hasItem ? children : <EmptyDetails />}</section>
);
