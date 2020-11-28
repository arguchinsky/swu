import React from 'react';

import './itemDetails.css';
import { EmptyDetails } from '../empty-details';

export const ItemDetails = ({ hasItem, children }) => (
  <section className='details'>{hasItem ? children : <EmptyDetails />}</section>
);
