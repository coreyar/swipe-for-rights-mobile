import { createReducer, createActions, Types as ReduxSauceTypes } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startCall: ['endpoint', 'args', 'successAction'],
  endCall: [],
  error: ['error']
})

export const NetworkTypes = Types
export default Creators


/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  error: undefined,
  fetching: false
})

/* ------------- Reducers ------------- */

export const startCall = (state) => state.merge({ fetching: true })
export const endCall = (state) => state.merge({ fetching: false})
export const errorReducer = (state, {error}) => {
  let message = error && error.response ? error.response.data : undefined
  message = !message && error && error.message ? error.message : message
  return state.merge({error: message})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.START_CALL]: startCall,
  [Types.END_CALL]: endCall,
  [ReduxSauceTypes.DEFAULT]: errorReducer,
})

/* ------------- Selectors ------------- */


