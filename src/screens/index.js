// @flow
/* eslint import/no-named-as-default: 0 */

import React from 'react'
import { View } from 'react-native'
import { Navigation } from 'react-native-navigation';
import Roots from '../constants'
// Auth
import OnboardScreen from './auth/onboard-screen'
import SplashScreen from './auth/splash-screen'

// Main
import { SwipeCardsScreen, SwipeResultsScreen } from './swipe-screen'

// register all screens of the app (including internal ones)
export default function registerScreens() {
  Navigation.registerComponent(Roots.Splash, () => SplashScreen);
  Navigation.registerComponent(Roots.Onboard, () => OnboardScreen);
  Navigation.registerComponent(Roots.SwipeCards, () => SwipeCardsScreen);
  Navigation.registerComponent(Roots.SwipeResult, () => SwipeResultsScreen);
}
