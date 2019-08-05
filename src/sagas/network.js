// @flow
import type { StandardAction} from 'redux'
import { put, call } from 'redux-saga/effects'
import NetworkActions, { NetworkTypes } from '../redux/network'


export function * network (action: StandardAction): GeneratorType {
  if (action.type === NetworkTypes.START_CALL)
  try {
    const resp = yield call(action.endpoint, ...action.args)
    yield put(action.successAction(resp.data))
  } catch (e) {
      yield put(NetworkActions.error(e))
  } finally {
    yield put(NetworkActions.endCall())
  }
}

export default { }
