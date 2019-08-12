// @flow
import { createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getBills: [],
})

export const BillTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {}

/* ------------- Reducers ------------- */

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {})

/* ------------- Selectors ------------- */
