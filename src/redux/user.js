import { createReducer, createActions, Types as ReduxSauceTypes } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  login: ['email', 'password'],
  loginSuccess: ['token'],
  signup: ['email', 'password', 'navigator'],
  signupSuccess: ['token'],

  saveAddress: ['address', 'navigator'],
  saveAddressSuccess: []
})

export const UserTypes = Types
export default Creators


/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  token: undefined
})

/* ------------- Reducers ------------- */

export const loginSuccess = (state, {token}) => state.merge({ token })
export const signupSuccess = (state, {token}) => state.merge({ token })
export const saveAddressSuccess = (state, {address}) => state.merge({address})


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.SIGNUP_SUCCESS]: signupSuccess,
  [Types.SAVE_ADDRESS_SUCCESS]: saveAddressSuccess,
})

/* ------------- Selectors ------------- */

// Is the current user logged in?
// export const isLoggedIn = loginState => loginState.username !== null

