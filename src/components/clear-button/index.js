// @flow
import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../theme'

const styles =  StyleSheet.create({
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin
  }
})

type Props = {
  onPress: () => void,
  text?: string,
  children?: string,
}

export default class RoundedButton extends React.Component<Props> {
  static defaultProps = {
    children: null,
    text: '',
  }

  props: Props

  getText () {
    const { children, text } = this.props
    const buttonText = text || children || ''
    return buttonText.toUpperCase()
  }

  render () {
    const { onPress, text } = this.props
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    )
  }
}
