import React from 'react'
import { Animated, View, Keyboard, LayoutAnimation } from 'react-native'
import Styles from './styles'
import { Metrics } from '../../theme'
// import CongressActions from '../redux/CongressRedux'
// import AnimationActions from '../redux/AnimationRedux'

import { SwipeCards, Card, NoMoreCards, RoundButton, Alert } from '../../components'

class SwipeScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      visibleHeight: Metrics.screenHeight,
      fadeAnim: new Animated.Value(0),
      downAlert: false,
      animation: new Animated.Value(),
      expanded: false,
      initialHeight: Metrics.cardWidth
    }
  }

  componentWillMount () {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)

    // ListView
    this._pressData = {}
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
    Animated.timing(          // Uses easing functions
      this.state.fadeAnim,    // The value to drive
        {toValue: 1}            // Configuration
    ).start()
  }

  keyboardDidShow = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize,
      topLogo: {width: 100, height: 70}
    })
  }

  keyboardDidHide = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  }

  handleYup (card) {
    this.props.supportBill(card)
  }

  handleNope (card) {
    this.props.rejectBill(card)
  }

  handleDown (card) {
    // Open Modal
    this.setState({downAlert: true})
  }

  handleUp (card) {
    console.log('Card was sent up')
  }

  dismissCard () {
    // Closes Modal
    this.setState({downAlert: false})
  }

  saveCard () {
    // Closes Modal
    this.setState({downAlert: false})
  }

  pressCard (bill) {
    this.props.toggleCardExpanded()
  }

  _setMaxDimensions (event) {
    this.setState({
      maxheight: event.nativeEvent.layout.height
    })
  }

  render () {
    return (
      <View contentContainerStyle={{justifyContent: 'center'}} style={[Styles.container, {height: this.state.visibleHeight}]}>
        <SwipeCards
          cards={this.props.bills}
          renderCard={(cardData) => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}
          onClickHandler={(cardData) => this.pressCard(cardData)}
          handleYup={this.handleYup.bind(this)}
          handleNope={this.handleNope.bind(this)}
          handleUp={this.handleUp.bind(this)}
          handleDown={this.handleDown.bind(this)}
          // renderNope={(pan, lastX, lastY) => this.renderYup(pan, lastX, lastY)}
          cardExpanded={this.props.cardExpanded}
          // smoothTransition
        />
        <Alert
          title='What would you like to do with this card?'
          show={this.state.downAlert}
        >
          <View style={Styles.buttonRow}>
            <RoundButton
              onPress={this.dismissCard.bind(this)}
              text={'Dismiss'}
              style={Styles.button}
            />
            <RoundButton
              onPress={this.saveCard.bind(this)}
              text={'Save'}
              style={Styles.button}
            />
          </View>
        </Alert>
      </View>
    )
  }
}

export default SwipeScreen

