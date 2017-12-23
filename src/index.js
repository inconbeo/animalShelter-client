import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DashBoard from './Dashboard';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
      <DashBoard />
    </Provider>,
    document.getElementById('root')
  );
  registerServiceWorker();
  
