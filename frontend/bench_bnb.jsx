import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

//just for testing
import { signup, login, logout } from './util/session_api_util';
//

document.addEventListener('DOMContentLoaded', () =>{
  const root = document.getElementById('root');
  const store = configureStore();

  window.getState = store.getState;
  windwo.dispatch = store.dispatch;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  
  ReactDOM.render(<img src="https://iheartdogs.com/wp-content/uploads/2017/01/PoodleStress1.jpg" />, root);
})