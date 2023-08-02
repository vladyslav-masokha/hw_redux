import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './styles/reset.css';
import './styles/normalize.css';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './App';
import './firebase';
import store from './redux/store';


ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
);
