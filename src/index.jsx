import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './Main';
import generateId from './helpers/generateId';

localStorage.setItem('sessionId', generateId(15));

ReactDOM.render(
  <Main>
    <App />
  </Main>,
  document.getElementById('root'),
);
