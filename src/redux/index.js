// @flow

import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../sagas/'
import { AppNavigator } from '../screens'

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'))

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state)
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    network: require('./network').reducer,
    user: require('./user').reducer,
    nav: navReducer,
    
  })

  return configureStore(rootReducer, rootSaga)
}
