import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import RootContainer from './screens/index'
import configureStore from './redux'

const store = configureStore()

const theme = DefaultTheme

const App = () => (
  <Provider store={store}>
    <PaperProvider theme={theme}>
      <RootContainer />
    </PaperProvider>
  </Provider>
)

const start = () => {
  AppRegistry.registerComponent('SwipeForRights', () => App)
}

export default start
