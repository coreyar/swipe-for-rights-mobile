// @flow

import * as React from 'react'
import { TextInput } from 'react-native-paper'

type Props = {|
  mode?: 'flat' | 'outlined',
  label?: string,
  placeholder?: ?string,
  onChangeText: (value: string) => void,
  value: string,
  error?: string,
  secureTextEntry?: boolean,
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
  autoCorrect?: ?boolean,
|}

type State = {}

export default class Input extends React.Component<Props, State> {
  static defaultProps = {
    mode: 'flat',
    placeholder: undefined,
    error: undefined,
    secureTextEntry: false,
    keyboardType: 'default',
    autoFocus: false,
    autoCorrect: undefined,
    maxLength: null,
    onSubmitEditing: undefined,
    style: null,
    label: '',
  }

  props: Props

  input: ?TextInput

  render() {
    const {
      mode,
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
    } = this.props
    return (
      <TextInput
        mode={mode}
        label={label}
        value={value}
        error={error}
        secureTextEntry={secureTextEntry}
        style={style}
        maxLength={maxLength}
        onChangeText={onChangeText}
        ref={ref => {
          this.input = ref
        }}
        keyboardType={keyboardType}
        onSubmitEditing={onSubmitEditing}
        autoFocus={autoFocus}
        autoCorrect={autoCorrect}
        placeholder={placeholder}
      />
    )
  }
}
