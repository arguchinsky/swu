import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header className='header'>
    <nav className='navigation'>
      <ul className='navigation-list'>
        <li className='navigation-item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='navigation-item'>
          <Link to='/planets'>Planets</Link>
        </li>
        <li className='navigation-item'>
          <Link to='/people'>People</Link>
        </li>
      </ul>
    </nav>
    <h1> Welcome to the StartWars Universe!</h1>
  </header>
);
