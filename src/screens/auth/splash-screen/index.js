import React from 'react'
import { Text, View } from 'react-native'
import { TextInput, ClearButton } from '../../../components'
import { Metrics } from '../../../theme'
import Roots from '../../../constants'
import Api from '../../../services/Api'

class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  async login() {
    try {
      const resp = await Api.login(this.state.email, this.state.password)
    } catch (e) {
      this.setState({ error: e.response.data })
    }
  }

  pushToAddress() {
    this.props.navigator.push({
      screen: Roots.Onboard,
      title: 'Enter Your Address',
      passProps: {email: this.state.email, password: this.state.password},
      animated: true, 
      animationType: 'fade',
    })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-around', margin: Metrics.marginHorizontal }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 28 }}>Swipe For Rights</Text>
        </View>
        <Text>{this.state.error}</Text>
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <TextInput
            style={{ height: 50 }}
            value={this.state.email}
            onChangeText={(value) => this.setState({ email: value })}
            placeholder={'Email'}
          />
          <TextInput
            style={{ height: 50 }}
            value={this.state.password}
            onChangeText={(value) => this.setState({ password: value })}
            placeholder={'Password'}
            secureTextEntry
            autoCapitalize={false}
          />
          <Text style={{ color: 'red', fontSize: 17 }}>{this.props.error}</Text>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
            <ClearButton text="Login" onPress={() => this.login()} />
            <ClearButton text="Sign Up" onPress={() => this.pushToAddress()} />
          </View>
        </View>
      </View>
    )
  }
}

export default SplashScreen