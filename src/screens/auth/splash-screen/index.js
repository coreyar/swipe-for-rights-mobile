// @flow
import React from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import Roots from '../../../constants'
import UserActions from '../../../redux/user'
import { TextInput, SecondaryButton } from '../../../components'
import { Metrics } from '../../../theme'

type Props = {
  error: string,
  login: (email: string, password: string) => void,
  navigation: Navigation,
}

type State = {
  email: string,
  password: string,
}

class SplashScreen extends React.Component<Props, State> {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  login() {
    const { login } = this.props
    const { email, password } = this.state
    login(email, password)
  }

  signup() {
    const { navigation } = this.props
    const { email, password } = this.state
    navigation.navigate(Roots.Onboard, { email, password })
  }

  render() {
    const { error } = this.props
    const { email, password } = this.state
    return (
      <View style={{ flex: 1, justifyContent: 'space-around', margin: Metrics.marginHorizontal }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 28 }}>Swipe For Rights</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <TextInput
            style={{ height: 50 }}
            value={email}
            onChangeText={value => this.setState({ email: value })}
            placeholder="Email"
          />
          <TextInput
            style={{ height: 50 }}
            value={password}
            onChangeText={value => this.setState({ password: value })}
            placeholder="Password"
          />
          <Text style={{ color: 'red', fontSize: 17 }}>{error}</Text>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
            <SecondaryButton onPress={this.login}>Login</SecondaryButton>
            <SecondaryButton onPress={this.signup}>Sign Up</SecondaryButton>
          </View>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    error: state.network.error,
  }
}

function mapDisptachToProps(dispatch) {
  return {
    login: (email, password) => dispatch(UserActions.login(email, password)),
  }
}

export default connect(
  mapStateToProps,
  mapDisptachToProps,
)(SplashScreen)
