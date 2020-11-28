import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPeople, getPlanets } from '../../store/middlewares';

export const Header = () => {
  const dispatch = useDispatch();
  const clickHandle = ({ target: { id } }) => {
    switch (id) {
      case 'planets':
        dispatch(getPlanets);
        break;
      case 'people':
        dispatch(getPeople);
        break;
      default:
        break;
    }
  };

  return (
    <header className='header'>
      <nav className='navigation'>
        <ul className='navigation-list'>
          <li className='navigation-item'>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className='navigation-item'>
            <NavLink id='planets' onClick={clickHandle} to='/planets'>
              Planets
            </NavLink>
          </li>
          <li className='navigation-item'>
            <NavLink id='people' onClick={clickHandle} to='/people'>
              People
            </NavLink>
          </li>
        </ul>
      </nav>
      <h1> Welcome to the StartWars Universe!</h1>
    </header>
  );
};
