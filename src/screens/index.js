// @flow
/* eslint import/no-named-as-default: 0 */

import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { StackNavigator, addNavigationHelpers, TabNavigator, TabBarTop } from 'react-navigation'
import type { NavigationDispatch } from 'react-navigation'

import Roots from '../constants'
// Auth
import OnboardScreen from './auth/onboard-screen'
import SplashScreen from './auth/splash-screen'

// Main
import { SwipeCardsScreen, SwipeResultsScreen } from './swipe-screen'

const stack = {
  // Auth
  [Roots.Login]: { screen: SplashScreen },
  [Roots.Onboard]: { screen: OnboardScreen },
  [Roots.Swipe]: {
    screen: TabNavigator({ [Roots.SwipeCards]: { screen: SwipeCardsScreen }, [Roots.SwipeResults]: { screen: SwipeResultsScreen } }, {
      // tabBarPosition: 'top',
      // swipeEnabled: true,
      // animationEnabled: true,
      // tabBarComponent: props => <TabBarTop {...props} indicatorStyle={{ borderBottomColor: Colors.darkBlue, borderBottomWidth: 3 }} />,
      // tabBarOptions: {
      //   activeTintColor: Colors.darkBlue,
      //   inactiveTintColor: Colors.lightGrey,
      //   style: { backgroundColor: Colors.white },
      //   labelStyle: { ...FontStyles.tabBarLabels },
      // } 
    })
  },
}

export const AppNavigator = StackNavigator(stack)


class RootContainer extends React.Component {
  render() {
    const navigation = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav,
    })
    return (
      <View style={{ flex: 1 }}>
        <AppNavigator
          navigation={navigation}
        />
      </View>
    )
  }
}

const mapStateToProps = (state: StoreState) => ({
  nav: state.nav,
})

const mapStateToDispatch = (dispatch: NavigationDispatch) => ({
  dispatch,
})


export default connect(mapStateToProps, mapStateToDispatch)(RootContainer)
