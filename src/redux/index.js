// @flow

import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../sagas'
import { INITIAL_STATE as NetworkStore } from './network'
import { INITIAL_STATE as UserStore } from './user'

export type Store = {
  network: typeof NetworkStore,
  user: typeof UserStore,
}

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    network: require('./network').reducer,
    user: require('./user').reducer,
  })

  return configureStore(rootReducer, rootSaga)
}
