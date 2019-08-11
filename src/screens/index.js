// @flow
/* eslint import/no-named-as-default: 0 */

import React from "react";
import { View } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import { Colors, Fonts } from "../theme";
import Roots from "../constants";
// Auth
import OnboardScreen from "./auth/onboard-screen";
import SplashScreen from "./auth/splash-screen";
// Main
import { SwipeCardsScreen, SwipeResultsScreen } from "./swipe-screen";

const stack = createStackNavigator({
  // Auth
  [Roots.Login]: { screen: SplashScreen },
  [Roots.Onboard]: { screen: OnboardScreen },
  [Roots.Swipe]: {
    screen: createBottomTabNavigator(
      {
        [Roots.SwipeCards]: { screen: SwipeCardsScreen },
        [Roots.SwipeResults]: { screen: SwipeResultsScreen }
      },
      {
        tabBarPosition: "top",
        swipeEnabled: true,
        animationEnabled: true,
        tabBarComponent: props => (
          <View
            {...props}
          />
        ),
        tabBarOptions: {
          activeTintColor: Colors.darkBlue,
          inactiveTintColor: Colors.lightGrey,
          style: { backgroundColor: Colors.white },
          labelStyle: { ...Fonts.style.h6 }
        }
      }
    )
  }
});

// $FlowFixMe
export const AppNavigator = createAppContainer(stack);

const RootContainer = () => (
  <View style={{ flex: 1 }}>
    <AppNavigator />
  </View>
);

export default RootContainer
