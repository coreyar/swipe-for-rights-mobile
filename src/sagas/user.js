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
  } else if (action.type === UserTypes.LOGIN_SUCCESS){
    yield put(NavigationActions.navigate({ routeName: Roots.Swipe }))
  } else if (action.type === UserTypes.SIGN_UP) {
    const { data } = action
    yield put(NetworkActions.startCall(api.signUp, [data], UserActions.signUpSuccess))
  } else if (action.type === UserTypes.SIGN_UP_SUCCESS) {
    yield put(NavigationActions.navigate({ routeName: Roots.Swipe }))
  }
}
