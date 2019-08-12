// @flow
import * as React from 'react'
import type { ViewStyle, TextStyle } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { Button } from 'react-native-paper'

type Props = {|
  mode?: 'text' | 'outlined' | 'contained',
  onPress: () => void,
  children: ?string | React.Node,
  style?: ?ViewStyle,
  uppercase?: boolean,
  accessibilityLabel?: ?string,
  contentStyle?: ?ViewStyle | TextStyle,
  disabled?: boolean,
  compact?: boolean,
  loading?: boolean,
  icon?: ?React.Node,
|}

const defaultProps = {
  mode: 'contained',
  style: null,
  uppercase: false,
  accessibilityLabel: null,
  contentStyle: null,
  disabled: false,
  compact: false,
  loading: false,
  icon: null,
}

export const PrimaryButton = (props: Props) => <Button {...props} mode="contained" uppercase dark />

PrimaryButton.defaultProps = defaultProps

export const SecondaryButton = (props: Props) => <Button {...props} mode="contained" uppercase />

SecondaryButton.defaultProps = defaultProps

export default Button
