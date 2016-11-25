import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'
import * as actions from './actions'



ReactDOM.render(
  <Provider store={store}>
      <App store={store}/>
   </Provider>
    ,
  document.getElementById('root')
);
