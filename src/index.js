import React from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './components/App';
import rootReducer from './reducers';

const initialState = {
  books: [
    {
      id: Math.round(100 * Math.random()),
      title: 'Shreds of Tenderness',
      category: 'Learning',
    },
    {
      id: Math.round(300 * Math.random()),
      title: 'Wheels on the Bus',
      category: 'kids',
    },
    {
      id: Math.round(300 * Math.random()),
      title: 'Expendables',
      category: 'Action',
    },
    {
      id: Math.round(400 * Math.random()),
      title: 'Away and Apart',
      category: 'Sci-fi',
    },
    {
      id: Math.round(500 * Math.random()),
      title: 'The Bye Bye Man',
      category: 'Horror',
    },
    {
      id: Math.round(500 * Math.random()),
      title: 'My Life in Crime',
      category: 'Biography',
    },
  ],
};

const middleware = [thunk];

const store = createStore(rootReducer, initialState,
  compose(applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__
              && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
