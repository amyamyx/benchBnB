import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import configureStore from './store/store';

//just for testing
import { signup, login, logout } from './actions/session_actions';
import { fetchBenches } from './actions/bench_actions';
//

document.addEventListener('DOMContentLoaded', () =>{
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  };

  delete window.currentuser;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.signup = signup;
  // window.login = login;
  // window.logout =logout;
  window.fetchBenches = fetchBenches;

  

  ReactDOM.render(<Root store={ store } />, root);
})