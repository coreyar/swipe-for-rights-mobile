// @flow
import { takeLatest, all } from 'redux-saga/effects'
import APIService from '../helpers/Api'

/* ------------- Types ------------- */
import { NetworkTypes } from '../redux/network'
import { UserTypes } from '../redux/user'

/* ------------- Sagas ------------- */

import { network } from './network'
import { user } from './user'

/* ------------- Navigation ------------- */
import store from ".."

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = DebugSettings.useFixtures ? FixtureAPI : API.create()
const api = APIService

/* ------------- Connect Types To Sagas ------------- */
export default function * root (): GeneratorType {
  yield all([
    takeLatest(NetworkTypes.START_CALL, network),
    takeLatest(UserTypes.LOGIN, user, api, store),
    takeLatest(UserTypes.LOGIN_SUCCESS, user, api, store),
    takeLatest(UserTypes.SIGN_UP, user, api, store),
    takeLatest(UserTypes.SAVE_ADDRESS, user, api, store),
    takeLatest(UserTypes.SIGN_UP_SUCCESS, user, api, store),

  ])
}
