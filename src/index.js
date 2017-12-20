import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './containers/App';

import { BrowserRouter } from 'react-router-dom';
import { Provider as Redux } from 'react-redux';
import { Provider as Rebass } from 'rebass';

import configureStore from './core/store/configure-store';
import theme from './styles/rebass-theme';

const store = configureStore();

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Redux store={store}>
    <Rebass theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Rebass>
  </Redux>, 
  document.getElementById('root')
);
// registerServiceWorker();
