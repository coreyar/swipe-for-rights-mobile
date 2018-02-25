import { takeLatest, all } from 'redux-saga/effects'
import API from '../services/Api'

/* ------------- Types ------------- */
import { NetworkTypes } from '../redux/network'
import { UserTypes } from '../redux/user'

/* ------------- Sagas ------------- */

import { network } from './network'
import { user } from './user'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = DebugSettings.useFixtures ? FixtureAPI : API.create()
const api = API.create()

/* ------------- Navigation ------------- */
import store from '../'

/* ------------- Connect Types To Sagas ------------- */
export default function * root () {
  yield all([
    takeLatest(NetworkTypes.START_CALL, network),
    takeLatest(UserTypes.LOGIN, user, api, store),
    takeLatest(UserTypes.LOGIN_SUCCESS, user, api, store),
    takeLatest(UserTypes.SIGNUP, user, api, store),
    takeLatest(UserTypes.SAVE_ADDRESS, user, api, store),
    takeLatest(UserTypes.SIGNUP_SUCCESS, user, api, store),

  ])
}
