import React from 'react';

import { NavLink } from 'react-router-dom';

import './header.css';

export const Header = () => (
  <header className='header'>
    <nav className='navigation'>
      <ul className='navigation-list'>
        <li className='navigation-item'>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className='navigation-item'>
          <NavLink to='/planets'>Planets</NavLink>
        </li>
        <li className='navigation-item'>
          <NavLink to='/people'>People</NavLink>
        </li>
      </ul>
    </nav>
    <h1> Welcome to the StartWars Universe!</h1>
  </header>
);
