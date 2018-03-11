import React from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import UserActions from '../../../redux/user'
import { AddressAutoComplete, ClearButton } from '../../../components'
import { Metrics, Colors } from '../../../theme'
import { formatAddressComponents } from '../../../helpers'

class SplashScreen extends React.Component {
  static navigatorStyle = {
    navBarHidden: true
  }
  constructor(props) {
    super(props)
    this.state = {
      street_address: '',
      locality: '',
      region: '',
      postal_code: ''
    }
  }

  forward() {
    const { email, password } = this.props.navigation.state.params
    const { street_address, locality, region, postal_code } = this.state
    if (street_address.length > 1 && locality.length > 1 && region.length > 1 && postal_code.length > 1) {
      this.props.signUp({email, password, ...this.state})
    }
  }

  render() {
    const { street_address, locality, region, postal_code } = this.state
    return (
      <View style={{ flex: 1, justifyContent: 'space-around', backgroundColor: Colors.white, margin: Metrics.marginHorizontal, }}>
        <View>
          <AddressAutoComplete
            placeholder={'Address'}
            minLength={2}
            autoFocus={false}
            returnKeyType={'search'}
            listViewDisplayed="auto"
            fetchDetails
            onPress={(data, details: Object = { address_components: [] }) => {
              const location = formatAddressComponents(details.address_components)
              this.setState(location)
            }}
            query={{
              key: 'AIzaSyD_yOPKqXfTecErD_gbOWMQNOXzE8g0qrs', //New key
              language: 'en',
              types: 'address',
            }}
            currentLocation
            currentLocationLabel="Current location"
            nearbyPlacesAPI="GooglePlacesSearch"
            GooglePlacesSearchQuery={{ rankby: 'distance' }}
            debounce={0}
          />
          <Text style={{zIndex: 1}}>{street_address}</Text>
          <Text style={{zIndex: 1}}>{`${locality}, ${region} ${postal_code}`}</Text>
        </View>
        <ClearButton
          text={"Next"}
          onPress={() => this.forward()}
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    error: state.network.error
  }
}

function mapDisptachToProps(dispatch) {
  return {
    signUp: (data) => dispatch(UserActions.signUp(data))
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(SplashScreen)