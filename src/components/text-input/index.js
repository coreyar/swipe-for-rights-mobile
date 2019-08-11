// @flow

import React from 'react';
import {
  TouchableWithoutFeedback,
  View,
  TextInput,
  Text,
  Animated
} from 'react-native';

import { Colors } from '../../theme';
import styles from './styles'

type Props = {
  label?: ?string,
  placeholder?: ?string,
  onChangeText: (value: string) => void,
  value: string,
  error?: ?string,
  isFocused?: boolean,
  secureTextEntry?: boolean,
  accessoryView?: ?React$Element<*>,
  helpText?: ?string,
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search',
  autoFocus?: boolean,
  maxLength?: ?number,
  style?: Object,
  onSubmitEditing?: ?() => void,
  isAnimated?: boolean,
  autoCorrect?: ?boolean,
  focusForAccessory?: boolean
}

type State = {
    isFocused: boolean,
    inputRange: Array<number>,
    outputRange: Array<number>
  };

export default class Input extends React.Component<Props, State> {
  static defaultProps = {
    label: undefined,
    placeholder: undefined,
    error: undefined,
    isFocused: false,
    focusForAccessory: false,
    isAnimated: false,
    secureTextEntry: false,
    accessoryView: undefined,
    helpText: undefined,
    keyboardType: 'default',
    autoFocus: false,
    autoCorrect: undefined,
    maxLength: null,
    onSubmitEditing: undefined,
    style: null
  };

  props: Props;

  input: ?Object;

  animated: Object;

  constructor(props: Props) {
    super(props);
    this.animated = new Animated.Value(0);
    const { isFocused } = this.props
    this.state = {
      isFocused: isFocused || false,
      inputRange: [0, 1],
      outputRange: [0, 1]
    };
  }

  componentDidMount() {
    const { isAnimated } = this.props
    if (isAnimated) {
      this.fadeIn();
    } else {
      this.updateRanges();
    }
  }

  focus = () => {
    if (this.input) {
      this.input.focus();
    }
  }

  updateRanges() {
    this.setState({
      inputRange: [1, 1],
      outputRange: [1, 1]
    });
  }

  fadeIn() {
    Animated.timing(this.animated, {
      toValue: 1,
      duration: 1000
    }).start();
  }

  renderErrorOrHelpText() {
    const { error, helpText, value } = this.props
    const color = error ? Colors.salmon : Colors.lightGrey;

    const text = error || helpText;

    if (text && value) {
      return (
        <Text style={styles.helpText(color)}>
          {text}
        </Text>
      );
    }
    return null;
  }

  renderAccessoryView() {
    const { accessoryView, focusForAccessory } = this.props
    const { isFocused } = this.state
    const accessory = (
      <View
        style={styles.accessoryView}
      >
        {accessoryView}
      </View>
    );
    if (accessoryView && !focusForAccessory) {
      return accessory;
    }
    if (accessoryView && isFocused) {
      return accessory;
    }
    return null;
  }

  render() {
    const {
      value,
      label,
      error,
      style,
      keyboardType,
      onSubmitEditing,
      autoFocus,
      autoCorrect,
      placeholder,
      maxLength,
      onChangeText,
      secureTextEntry,
    } = this.props;
    const { isFocused: active, inputRange, outputRange } = this.state;
    const primaryColor = error ? Colors.salmon : Colors.darkBlue;

    const opacity = this.animated.interpolate({
      inputRange,
      outputRange
    });
    const accessory = this.renderAccessoryView();
    return (
      <View
        style={[
          styles.container,
          style
        ]}
      >
        <TouchableWithoutFeedback onPress={this.focus}>
          <View style={{ flex: 1 }}>
            <Animated.View
              style={styles.animatedView(active)}
            >
              <Animated.Text
                style={styles.placeholder({color: primaryColor, opacity})}
              >
                {placeholder || label}
              </Animated.Text>
              <TextInput
                secureTextEntry={secureTextEntry}
                underlineColorAndroid="rgba(0,0,0,0)"
                style={styles.textInput(!!accessory)}
                maxLength={maxLength}
                value={value}
                onChangeText={onChangeText}
                ref={ref => {
                  this.input = ref;
                }}
                onFocus={() => this.setState({ isFocused: true })}
                onBlur={() => this.setState({ isFocused: false })}
                keyboardType={keyboardType}
                onSubmitEditing={onSubmitEditing}
                autoFocus={autoFocus}
                autoCorrect={autoCorrect}
                placeholder={placeholder}
              />
              {accessory}
            </Animated.View>
            {this.renderErrorOrHelpText()}
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
