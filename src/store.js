import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import artists from './reducers/artists'
import logger from 'redux-logger'

export default () => createStore(
  combineReducers({ artists }),
  applyMiddleware(thunkMiddleware, logger)
)
