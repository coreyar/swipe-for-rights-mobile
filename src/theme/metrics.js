// @flow
import {Dimensions} from 'react-native'

const { width, height } = Dimensions.get('window')

// Used via Metrics.baseMargin
const metrics = {
  baseMargin: 10,
  doubleBaseMargin: 20,
  marginHorizontal: 10,
  marginVertical: 10,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}

export default metrics
