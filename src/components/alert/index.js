// @flow
import * as React from 'react'
import { Dialog, Portal } from 'react-native-paper'
import Button from '../buttons'

type Props = {|
  title: string,
  visible: boolean,
  onDismiss: () => void,
  actions: Array<typeof Button>,
  children?: ?React.Node,
  dismissable?: boolean,
|}

const AlertMessage = (props: Props) => {
  const { visible, onDismiss, title, children, actions, dismissable } = props
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss} dismissable={dismissable}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>{children}</Dialog.Content>
        <Dialog.Actions>{actions}</Dialog.Actions>
      </Dialog>
    </Portal>
  )
}

AlertMessage.defaultProps = { dismissable: true, children: null }

export default AlertMessage
