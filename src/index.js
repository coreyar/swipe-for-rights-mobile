import React, {Component} from 'react' // eslint-disable-line
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import RootContainer from './screens/index'
import configureStore from './redux'

const store = configureStore()

class App extends Component {
  render() {
    return  (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )

  }
}

const start = () => {
  AppRegistry.registerComponent('SwipeForRights', () => App)
}

export default start