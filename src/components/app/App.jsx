import React from 'react';
import './app.css';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../header'
import { Main } from '../main';

export const App = () => (
  <BrowserRouter>
    <Header />
    <Main />
  </BrowserRouter>
);
