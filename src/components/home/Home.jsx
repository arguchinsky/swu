import React from 'react';

import './home.css';

import img from '../../../assets/images/home-img.gif';

export const Home = () => (
  <div className='home'>
    <img className='home-img' alt='giant_robot' src={img} />
  </div>
);
