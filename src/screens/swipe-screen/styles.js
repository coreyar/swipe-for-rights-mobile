import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../theme'

export default StyleSheet.create({
  gradient: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    height: Metrics.section
  },
  button: {
    margin: Metrics.doubleBaseMargin
  },
  buttonRow: {
    flexDirection: 'row'
  },
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor
    // marginTop: 25
  },
  icon: {
    color: Colors.steel
  },
  message: {
    marginTop: Metrics.baseMargin,
    marginHorizontal: Metrics.baseMargin,
    textAlign: 'center',
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.regular,
    fontWeight: 'bold',
    color: Colors.steel
  }
})
