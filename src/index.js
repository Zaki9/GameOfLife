import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
 import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import App from './components/app';
import reducers from './reducers';
import rootReducer from './reducers'  ;

const logger = createLogger();

const initialState = {
  width: 10,
  height: 10,
  cells: [
    0, 0, 0, 1, 1, 1, 1, 0, 0, 0,
    0, 0, 1, 0, 0, 0, 0, 1, 0, 0,
    0, 1, 0, 0, 0, 0, 0, 0, 1, 0,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 1, 1, 1, 1, 0, 0, 1,
    0, 1, 0, 0, 0, 0, 0, 0, 1, 0,
    0, 0, 1, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 0, 1, 1, 1, 1, 0, 0, 0
  ]
};

const enhancer = compose(
  applyMiddleware(logger),
);

//const store = createStore(rootReducer, initialState, enhancer);

//const createStoreWithMiddleware = applyMiddleware()(createStore
const store =  createStore(rootReducer) ;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
