import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App cellWidth={15} cellHeight={15} fps={10} />
  </Provider>,
  document.getElementById('root')
);
