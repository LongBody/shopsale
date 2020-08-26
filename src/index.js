import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { createStore, applyMiddleware } from 'redux';
import myReducer from './reducers/index.js';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

const store = createStore(
  myReducer,
  applyMiddleware(thunk)
)


export default store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
