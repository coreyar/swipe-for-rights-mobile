import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Provider, Subscribe, Container } from 'unstated'
import UserActions from '../../../redux/user'
import { TextInput, ClearButton } from '../../../components'
import { Metrics } from '../../../theme'
import { LoginContainer } from '../../../containers'

function Login(props) {
  return (
    <Subscribe to={[LoginContainer]}>
      {loginState => (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <TextInput
            style={{ height: 50 }}
            value={loginState.state.email}
            onChangeText={(value) => loginState.setEmail(value)}
            placeholder={'Email'}
          />
          <TextInput
            style={{ height: 50 }}
            value={loginState.state.password}
            onChangeText={(value) => loginState.setPassword(value)}
            placeholder={'Password'}
          />
          <Text style={{ color: 'red', fontSize: 17 }}>{loginState.error}</Text>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
            <ClearButton text="Login" onPress={() => loginState.login()} />
            <ClearButton text="Sign Up" onPress={() => props.navigate('Onboard')} />
          </View>
        </View>
      )}
    </Subscribe>
  );
}


class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <Provider>
        <View style={{ flex: 1, justifyContent: 'space-around', margin: Metrics.marginHorizontal }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 28 }}>Swipe For Rights</Text>
          </View>
          <Login navigate={this.props.navigation.navigate} />
        </View>
      </Provider>
    )
  }
}

export default SplashScreen