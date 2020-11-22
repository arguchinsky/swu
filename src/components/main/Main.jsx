import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './main.css';
import { Home } from '../home';
import { People } from '../people';
import { Planets } from '../planets';

export const Main = () => (
  <main className='main'>
    <Switch>
      <Route path='/planets'>
        <Planets />
      </Route>
      <Route path='/people'>
        <People />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  </main>
);
