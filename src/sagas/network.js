// @flow
import { put, call } from 'redux-saga/effects'
import NetworkActions, { NetworkTypes } from '../redux/network'

export function* network(action: StandardAction): GeneratorType {
  if (action.type === NetworkTypes.START_CALL) {
    const { args, endpoint, successAction } = action.payload
    try {
      const resp = yield call(endpoint, ...args)
      yield put(successAction(resp.data))
    } catch (e) {
      yield put(NetworkActions.error(e))
    } finally {
      yield put(NetworkActions.endCall())
    }
  }
}

export default {}
