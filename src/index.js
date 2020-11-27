import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import './index.css';
import { store } from './store';
import { planetsLoaded, peopleLoaded } from './store/actions';

import { App } from './components/app';
import { ServiceContextProvider } from './components/service-context';

import { REQUESTS, RequestService } from './services';

const requestService = new RequestService(REQUESTS);

requestService.getPlanets().then(planetsLoaded).then(store.dispatch);
requestService.getPeople().then(peopleLoaded).then(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <ServiceContextProvider value={requestService}>
        <App />
      </ServiceContextProvider>
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
