import React, { Component } from 'react'
import { Navigation } from 'react-native-navigation'
import registerScreens  from './screens'
import Roots from './constants'
registerScreens(); // this is where you register all of your app's screens

const start = () => {
  // start the app
  Navigation.startSingleScreenApp({
    screen: {
      screen: Roots.Splash,
      navigatorStyle: {navBarHidden: true},
    },
  })
}

export default start