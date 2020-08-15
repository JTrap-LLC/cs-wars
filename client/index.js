import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './styles.scss';

// const store = createStore(reducers, composeWithDevTools());

// const rootElement = document.createElement('div');
// rootElement.setAttribute('id', 'root');
// document.body.appendChild(rootElement);

render(
  // wrap the App in the Provider and pass in the store
  <App />,
  document.getElementById('root')
);
