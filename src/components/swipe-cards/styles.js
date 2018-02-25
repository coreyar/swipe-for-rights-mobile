import {StyleSheet} from 'react-native'
import { Metrics, Colors, Fonts } from '../../theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  down: {
    borderRadius: 5,
    width: 100,
    backgroundColor: 'orange',
    position: 'absolute',
    padding: 20,
    left: ((Metrics.screenWidth - 32) / 2) - 50,
    top: 50,
    alignItems: 'center'
  },
  downText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white'
  },
  nope: {
    borderColor: 'red',
    borderWidth: 2,
    backgroundColor: 'red',
    position: 'absolute',
    top: 50,
    padding: 20,
    borderRadius: 5,
    right: 20
  },
  nopeText: {
    fontSize: 16,
    color: 'white'
  },
  super: {
    borderRadius: 5,
    width: 100,
    backgroundColor: 'blue',
    position: 'absolute',
    padding: 20,
    left: ((Metrics.screenWidth - 32) / 2) - 50,
    bottom: 50,
    alignItems: 'center'
  },
  superText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white'
  },
  yup: {
    borderColor: 'green',
    borderWidth: 2,
    backgroundColor: 'green',
    position: 'absolute',
    padding: 20,
    top: 50,
    borderRadius: 5,
    left: 20
  },
  yupText: {
    fontSize: 16,
    color: 'white'
  }
})

export const CardStyle = StyleSheet.create({
  actionBar: {
    height: 50,
    width: 20,
    backgroundColor: Colors.primary
  },
  card: {
    flexDirection: 'row',
    // marginVertical: Metrics.doubleBaseMargin,
    // width: Metrics.cardWidth,
    // height: (Metrics.screenHeight - 75) * .75,
    marginTop: 25,
    borderRadius: 5
  },
  column: {
    paddingVertical: Metrics.doubleBaseMargin,
    paddingLeft: 20,
    flex: 1,
    width: (Metrics.screenWidth - 32) - 20,
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noSummaryText: {
    textAlign: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  sideBar: {
    width: 20,
    height: (Metrics.screenHeight - 75) * 0.75,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  summary: {
    flex: 1,
    borderColor: Colors.charcoal,
    borderWidth: 1
  },
  title: {
    ...Fonts.style.h6,
    textAlign: 'center'
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
