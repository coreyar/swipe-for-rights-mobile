// @flow

import React from 'react'
import { TouchableWithoutFeedback, StyleSheet, View, TextInput, Text, Animated } from 'react-native'

import { Fonts, Colors, Metrics } from '../../theme'

type InputPropTypes = {
  label?: ?string,
  placeholder?: ?string,
  onChangeText: (value: string) => void,
  value: string,
  error?: ?string,
  isFocused: boolean,
  secureTextEntry: boolean,
  accessoryView?: ?React$Element<*>,
  helpText?: ?string,
  keyboardType: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'ascii-capable' | 'numbers-and-punctuation' | 'url' | 'number-pad' | 'name-phone-pad' | 'decimal-pad' | 'twitter' | 'web-search',
  autoFocus: boolean,
  maxLength?: ?number,
  style?: StyleSheet.Styles | Object,
  onSubmitEditing?: ?() => void,
  returnKeyType: string,
  isAnimated: boolean,
  autoCorrect?: ?boolean,
  focusForAccessory: boolean,
}

export default class Input extends React.Component {
  static defaultProps: InputPropTypes = {
    label: undefined,
    placeholder: undefined,
    error: undefined,
    secureTextEntry: false,
    accessoryView: undefined,
    helpText: undefined,
    keyboardType: 'default',
    autoFocus: false,
    value: '',
    isFocused: false,
    returnKeyType: 'done',
    isAnimated: false,
    focusForAccessory: true,
    onChangeText: () => { },
    autoCorrect: undefined,
    maxLength: null,
    onSubmitEditing: undefined,
    style: null,
  }

  constructor(props: InputPropTypes) {
    super(props)
    this.animated = new Animated.Value(0)
    this.state = {
      isFocused: this.props.isFocused || false,
      inputRange: [0, 1],
      outputRange: [0, 1],
    }
  }

  state: {
    isFocused: boolean,
    inputRange: Array<number>,
    outputRange: Array<number>,
  }


  componentDidMount() {
    if (this.props.isAnimated) {
      this.fadeIn()
    } else {
      this.updateRanges()
    }
  }

  props: InputPropTypes

  input: ?Object
  animated: Object

  fadeIn() {
    Animated.timing(this.animated, {
      toValue: 1,
      duration: 1000,
    }).start()
  }

  updateRanges() {
    this.setState({
      inputRange: [1, 1],
      outputRange: [1, 1],
    })
  }

  focus() {
    if (this.input) {
      this.input.focus()
    } else {
      console.warn('Input ref not defined')
    }
  }

  renderErrorOrHelpText() {
    const color = this.props.error ? Colors.salmon : Colors.lightGrey

    const text = this.props.error || this.props.helpText

    if (text && this.props.value) {
      return (
        <Text
          style={{
            color,
            fontSize: 12,
            lineHeight: 16,
            marginTop: -6,
          }}
        >
          {text}
        </Text>
      )
    }
    return null
  }

  renderAccessoryView() {
    const accessory = (
      <View style={{
        flexDirection: 'column',
        alignSelf: 'flex-end',
        marginTop: -24,
        paddingBottom: 3,
        backgroundColor: 'transparent',
        height: 20,
        width: 20,
      }}
      >
        {this.props.accessoryView}
      </View>
    )
    if (this.props.accessoryView && !this.props.focusForAccessory) {
      return accessory
    } else if (this.props.accessoryView && this.state.isFocused) {
      return accessory
    }
    return null
  }

  render() {
    const active = this.state.isFocused
    const error = this.props.error
    const primaryColor = (error ? Colors.salmon : Colors.darkBlue)

    const opacity = this.animated.interpolate({
      inputRange: this.state.inputRange,
      outputRange: this.state.outputRange,
    })
    const accessory = this.renderAccessoryView()
    return (
      <View style={[{ marginBottom: Metrics.marginVertical / 2, height: 48 }, this.props.style]}>
        <TouchableWithoutFeedback onPress={this.focus.bind(this)}>
          <View style={{ flex: 1 }}>
            <Animated.View
              style={[{
                marginBottom: 10,
                borderBottomWidth: active ? 3 : 1,
                borderBottomColor: 'blue',
                flex: 1,
              }]}
            >
              <Animated.Text style={StyleSheet.flatten([
                { color: primaryColor },
                { opacity },
              ])}
              >
                {this.props.placeholder || this.props.label}
              </Animated.Text>
              <TextInput
                secureTextEntry={this.props.secureTextEntry}
                underlineColorAndroid="rgba(0,0,0,0)"
                style={StyleSheet.flatten([
                  {
                    color: 'black',
                    fontSize: 17,
                    flex: 1,
                    paddingTop: 0,
                    paddingBottom: 0,
                    flexDirection: 'column',
                    marginTop: 2,
                    // backgroundColor: 'transparent',
                    ...(accessory ? {
                      marginRight: 46,
                    } : {}),
                  },
                ])}
                maxLength={this.props.maxLength}
                value={this.props.value}
                onChangeText={this.props.onChangeText}
                ref={(ref) => { this.input = ref }}
                onFocus={() => this.setState({ isFocused: true })}
                onBlur={() => this.setState({ isFocused: false })}
                keyboardType={this.props.keyboardType}
                onSubmitEditing={this.props.onSubmitEditing}
                returnKeyType={this.props.returnKeyType}
                autoFocus={this.props.autoFocus}
                autoCorrect={this.props.autoCorrect}
                placeholder={this.props.placeholder}
              />
              {accessory}
            </Animated.View>
            {this.renderErrorOrHelpText()}
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}
