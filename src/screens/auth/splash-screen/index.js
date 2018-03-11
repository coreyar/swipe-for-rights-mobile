import React from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import UserActions from '../../../redux/user'
import { TextInput, ClearButton } from '../../../components'
import { Metrics } from '../../../theme'


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

  login() {
    this.props.login(this.state.email, this.state.password)
  }

  signup () {
    this.props.signup(this.state.email, this.state.password, this.props.navigator)
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-around', margin: Metrics.marginHorizontal }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{ fontSize: 28 }}>Swipe For Rights</Text>
        </View>
        <View style={{flex:1, justifyContent: 'space-between'}}>
          <TextInput
            style={{height: 50}}
            value={this.state.email}
            onChangeText={(value) => this.setState({ email: value })}
            placeholder={'Email'}
          />
          <TextInput
            style={{height: 50}}
            value={this.state.password}
            onChangeText={(value) => this.setState({ password: value })}
            placeholder={'Password'}
          />
          <Text style={{color: 'red', fontSize: 17}}>{this.props.error}</Text>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
            <ClearButton text="Login" onPress={() => this.login()}/>
            <ClearButton text="Sign Up" onPress={() => this.signup()}/>
          </View>
        </View>
      </View>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    error: state.network.error
  }
}

function mapDisptachToProps(dispatch) {
  return {
    signup: (email, password, navigator) => dispatch(UserActions.signup(email, password, navigator)),
    login: (email, password) => dispatch(UserActions.login(email, password))
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(SplashScreen)