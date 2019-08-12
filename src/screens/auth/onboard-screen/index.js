// @flow
import React from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import UserActions from '../../../redux/user'
import { TextInput, SecondaryButton } from '../../../components'
import { Metrics, Colors } from '../../../theme'

type Props = {
  signUp: ({
    email: string,
    password: string,
    street_address: string,
    locality: string,
    region: string,
    postal_code: string,
  }) => void,
  navigation: Navigation,
}

type State = {
  street_address: string,
  locality: string,
  region: string,
  postal_code: string,
}

class SplashScreen extends React.Component<Props, State> {
  static navigatorStyle = {
    navBarHidden: true,
  }

  constructor(props) {
    super(props)
    this.state = {
      street_address: '',
      locality: '',
      region: '',
      postal_code: '',
    }
  }

  forward() {
    const { navigation, signUp } = this.props
    const { email, password } = navigation.navigate.params
    const { street_address, locality, region, postal_code } = this.state
    if (
      street_address.length > 1 &&
      locality.length > 1 &&
      region.length > 1 &&
      postal_code.length > 1
    ) {
      signUp({ email, password, ...this.state })
    }
  }

  render() {
    const { street_address, locality, region, postal_code } = this.state
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          backgroundColor: Colors.white,
          margin: Metrics.marginHorizontal,
        }}
      >
        <View>
          <TextInput
            style={{ height: 50 }}
            value={street_address}
            onChangeText={value => this.setState({ street_address: value })}
            placeholder="Address"
          />
          <Text style={{ zIndex: 1 }}>{street_address}</Text>
          <Text style={{ zIndex: 1 }}>{`${locality}, ${region} ${postal_code}`}</Text>
        </View>
        <SecondaryButton onPress={() => this.forward()}>Next</SecondaryButton>
      </View>
    )
  }
}

const mapStateToProps = () => ({})

const mapDisptachToProps = dispatch => ({
  signUp: (...data) => dispatch(UserActions.signUp(...data)),
})

export default connect(
  mapStateToProps,
  mapDisptachToProps,
)(SplashScreen)
