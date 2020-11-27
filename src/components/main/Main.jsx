import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './main.css';
import { Home } from '../home';
import { People } from '../people';
import { Planets } from '../planets';

export const Main = () => (
  <main className='main'>
    <Switch>
      <Route path='/planets' component={Planets} />
      <Route path='/people' component={People} />
      <Route path='/' component={Home} />
      <Route component={Home} />
    </Switch>
  </main>
);
