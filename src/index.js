import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import { store } from './store';

import { App } from './components/app';
import { ServiceContextProvider } from './components/service-context';

import { REQUESTS, RequestService } from './services';

const requestService = new RequestService(REQUESTS);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ServiceContextProvider value={requestService}>
        <App />
      </ServiceContextProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
