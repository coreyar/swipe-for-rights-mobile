import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import RootContainer from './screens/index'
import configureStore from './redux'

const store = configureStore()

const App = () => (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )

const start = () => {
  AppRegistry.registerComponent('SwipeForRights', () => App)
}

export default start