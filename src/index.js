import React, { Component } from 'react'
import { Navigation } from 'react-native-navigation'
import registerScreens  from './screens'
import Roots from './constants'
registerScreens(); // this is where you register all of your app's screens

const start = () => {
  // start the app
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'One',
        screen: Roots.Splash, // this is a registered name for a screen
        icon: require('../assets/cake-icon.png'),
        selectedIcon: require('../assets/cake-icon.png'), // iOS only
        title: 'Screen One'
      },
      {
        label: 'Two',
        screen: Roots.Onboard,
        icon: require('../assets/cake-icon.png'),
        selectedIcon: require('../assets/cake-icon.png'), // iOS only
        title: 'Screen Two'
      }
    ]
  });
}

export default start