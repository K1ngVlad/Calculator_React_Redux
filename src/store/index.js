import { composeWithDevTools } from 'redux-devtools-extension';
import inputReducer from './inputReducer.js';

const { createStore, combineReducers } = require('redux');

const rootReducer = combineReducers({
  input: inputReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
