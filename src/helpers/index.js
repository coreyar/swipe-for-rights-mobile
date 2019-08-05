// @flow
import produce from "immer"

export function formatAddressComponents(locationArray: Array<Object>) {
  const locationKeys = ['street_number', 'route', 'locality', 'administrative_area_level_1', 'postal_code']
  const locationData = {
    street_number: {},
    route: {},
    locality: {},
    administrative_area_level_1: {},
    postal_code: {},
  }
  for (let i = 0; i < locationArray.length; i++) {
    // Grab each component in the array
    const data = locationArray[i]
    for (let j = 0; j < locationKeys.length; j++) {
      // Check and see if a type we care about is in the types array
      const idx = data.types.indexOf(locationKeys[j])
      if (idx >= 0) {
        // It is in the array so save it
        locationData[locationKeys[j]] = locationArray[i]
      }
    }
  }
  const location = {
    street_address: `${locationData.street_number.long_name} ${locationData.route.long_name}`,
    locality: locationData.locality.long_name,
    region: locationData.administrative_area_level_1.short_name,
    postal_code: locationData.postal_code.long_name,
  }
  return location
}

// $FlowFixMe
export const spread = produce(Object.assign)