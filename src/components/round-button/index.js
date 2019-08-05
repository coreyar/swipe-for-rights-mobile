// @flow
import * as React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../theme'

const styles =  StyleSheet.create({
  button: {
    height: 45,
    width: 100,
    borderRadius: 5,
    margin: Metrics.doubleBaseMargin,
    backgroundColor: Colors.darkBlue,
    justifyContent: 'center'
  },
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
  text?: React.Node,
  children?: ?string,
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
    if (typeof buttonText === 'string') {
      return buttonText.toUpperCase()
    }
    return buttonText
  }

  render () {
    const { onPress } = this.props
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{this.getText()}</Text>
      </TouchableOpacity>
    )
  }
}
