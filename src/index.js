import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/configure-store';
import App from './components/app/app';

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // document.getElementById('root')
  document.getElementById('ticket')
);
