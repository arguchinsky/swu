import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './main.css';
import { Home } from '../home';
import { People } from '../people';
import { Planets } from '../planets';

export const Main = () => (
  <main className='main'>
    <Switch>
      <Route path='/planets' children={Planets}/>
      <Route path='/people' children={People}/>
      <Route path='/' children={Home}/>
    </Switch>    
  </main>
);
