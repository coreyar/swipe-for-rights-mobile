import React from 'react'
import { Text, View } from 'react-native'
import { Provider, Subscribe, Container } from 'unstated'
import UserActions from '../../../redux/user'
import { AddressAutoComplete, ClearButton } from '../../../components'
import { Metrics, Colors } from '../../../theme'
import { formatAddressComponents } from '../../../helpers'
import { LoginContainer } from '../../../containers'

const replaceUndef = (value) => value ? value : ''

class OnboardScreen extends React.Component {
  static navigatorStyle = {
    navBarHidden: true
  }

  render() {
    return (
      <Provider>
        <Subscribe to={[LoginContainer]}>
          {loginState => {
            const { street_address, locality, region, postal_code } = loginState.state.location
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
                      loginState.setLocation(location)
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
                  <Text style={{ zIndex: 1 }}>{replaceUndef(street_address)}</Text>
                  <Text style={{ zIndex: 1 }}>{`${replaceUndef(locality)}, ${replaceUndef(region)} ${replaceUndef(postal_code)}`}</Text>
                </View>
                <ClearButton
                  text={"Next"}
                  onPress={() => loginState.signUp()}
                />
              </View>
            )
          }}
        </Subscribe>
      </Provider>
    )
  }
}

export default OnboardScreen
