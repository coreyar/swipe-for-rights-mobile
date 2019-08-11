// @flow
import { createReducer, createActions } from 'reduxsauce'
import { spread } from '../helpers'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  login: ['email', 'password'],
  loginSuccess: ['token'],
  signUp: ['data'],
  signUpSuccess: ['token'],

  saveAddress: ['address', 'navigator'],
  saveAddressSuccess: []
})

export const UserTypes = Types
export default Creators


/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  token: null,
  address: null,
}

/* ------------- Reducers ------------- */

const loginSuccess = (state, {token}) => spread(state, { token })
const signUpSuccess = (state, {token}) => spread(state, { token })
const saveAddressSuccess = (state, {address}) => spread(state, {address})


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.SIGN_UP_SUCCESS]: signUpSuccess,
  [Types.SAVE_ADDRESS_SUCCESS]: saveAddressSuccess,
})

/* ------------- Selectors ------------- */
