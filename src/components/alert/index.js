// @flow
import React from 'react'
import { View, Text } from 'react-native'
import * as Animatable from 'react-native-animatable'
// import Icon from 'react-native-vector-icons/Ionicons'
import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../theme'

const styles =  StyleSheet.create({
  container: {
    position: 'absolute',
    top: (Metrics.screenHeight - 200) / 2,
    width: Metrics.screenWidth,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Metrics.doubleBaseMargin,
    backgroundColor: Colors.primary
  },
  contentContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    height: 150
  }
})

type AlertMessageProps = {
  title: string,
  icon?: string,
  style?: Object,
  show?: bool
}

export default class AlertMessage extends React.Component {
  static defaultProps: { show: boolean }

  props: AlertMessageProps

  render () {
    const {
 children, show, style, title 
} = this.props
    const messageComponent = null
    if (show) {
      return (
        <Animatable.View
          style={[styles.container, style]}
          delay={800}
          animation='bounceIn'
        >
          <View style={styles.contentContainer}>
            {/* <Icon
              name={this.props.icon || 'ios-alert'}
              size={Metrics.icons.large}
              style={styles.icon}
            /> */}
            <Text allowFontScaling={false} style={styles.message}>{title && title.toUpperCase()}</Text>
            {children}
          </View>
        </Animatable.View>
      )
    }

    return messageComponent
  }
}
