import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/app';
import { RequestService } from './services'

const rService = new RequestService();

rService.getPlanets().then(console.info);
rService.getPeople().then(console.info);

ReactDOM.render(<App />, document.getElementById('root'));
