// @flow

import { put, call, select } from 'redux-saga/effects'
import UserActions, { UserTypes } from '../redux/user'
import { NavigationActions } from 'react-navigation'
import NetworkActions from '../redux/network'
import { userSelector } from '../selectors'
import Roots from '../constants'


export function* user(api, store, action) {
  if (action.type === UserTypes.LOGIN) {
    const { email, password} = action
    yield put(NetworkActions.startCall(api.login, [email, password], UserActions.loginSuccess))
  } else if (action.type === UserTypes.SIGNUP) {
    const { email, password} = action
    yield put(NetworkActions.startCall(api.signup, [email, password], UserActions.signupSuccess))
  } else if (action.type === UserTypes.SIGNUP_SUCCESS) {
  } else if (action.type === UserTypes.LOGIN_SUCCESS) {
    const location = yield select(userSelector.getAddress)
    if (location) {
      yield put(NavigationActions.navigate({ routeName: Roots.Swipe }))
    } else {
      yield put(NavigationActions.navigate({ routeName: Roots.Onboard }))
    }
  } else if (action.type === UserTypes.SAVE_ADDRESS) {
    const resp = yield put(NetworkActions.startCall(api.saveAddress, [action.address], UserActions.saveAddressSuccess))
    console.log(resp)
  }

}
