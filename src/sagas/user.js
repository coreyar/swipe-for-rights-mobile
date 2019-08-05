// @flow
import { put } from 'redux-saga/effects'
import type { StandardAction} from 'redux'
import { NavigationActions } from 'react-navigation'
import ApiService from '../helpers/Api'
import UserActions, { UserTypes } from '../redux/user'
import NetworkActions from '../redux/network'
import Roots from '../constants'
import type { Store } from '../redux'


export function* user(api: ApiService, store: Store, action: StandardAction): GeneratorType {
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


export default { }