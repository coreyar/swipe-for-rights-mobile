// @flow
import type { Store } from '../redux'

const getAddress = (store: Store) => store.user.address

const selectors = {
  getAddress,
}

export default selectors
