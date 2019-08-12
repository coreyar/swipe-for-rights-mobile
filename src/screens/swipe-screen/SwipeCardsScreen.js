// @flow
import React from 'react'
import { Animated, View, LayoutAnimation } from 'react-native'
import { connect } from 'react-redux'
import { SwipeCards, Card, NoMoreCards } from 'react-native-swipe-cards'
import Styles from './styles'
import { Metrics } from '../../theme'
import BillActions from '../../redux/bill'

import { PrimaryButton, Alert } from '../../components'

type Props = {
  cardExpanded: boolean,
  bills: Array<any>,
  supportBill: (card: Object) => void,
  rejectBill: (card: Object) => void,
  toggleCardExpanded: (card: Object) => void,
}

type State = {
  visibleHeight: number,
  fadeAnim: Animated.Value,
  downAlert: boolean,
}

class SwipeScreen extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      visibleHeight: Metrics.screenHeight,
      fadeAnim: new Animated.Value(0),
      downAlert: false,
    }
  }

  componentWillUnmount() {
    const { fadeAnim } = this.state
    Animated.timing(
      // Uses easing functions
      fadeAnim, // The value to drive
      { toValue: 1 }, // Configuration
    ).start()
  }

  keyboardDidShow = e => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    const newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize,
    })
  }

  keyboardDidHide = () => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  }

  handleYup = card => {
    const { supportBill } = this.props
    supportBill(card)
  }

  handleNope = card => {
    const { rejectBill } = this.props
    rejectBill(card)
  }

  handleDown = () => {
    // Open Modal
    this.setState({ downAlert: true })
  }

  handleUp = () => {}

  dismissCard = () => {
    // Closes Modal
    this.setState({ downAlert: false })
  }

  saveCard = () => {
    // Closes Modal
    this.setState({ downAlert: false })
  }

  pressCard = bill => {
    const { toggleCardExpanded } = this.props
    toggleCardExpanded(bill)
  }

  render() {
    const { cardExpanded, bills } = this.props
    const { downAlert, visibleHeight } = this.state
    return (
      <View style={[Styles.container, { height: visibleHeight }]}>
        <SwipeCards
          cards={bills}
          renderCard={cardData => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}
          onClickHandler={cardData => this.pressCard(cardData)}
          handleYup={this.handleYup}
          handleNope={this.handleNope}
          handleUp={this.handleUp}
          handleDown={this.handleDown}
          // renderNope={(pan, lastX, lastY) => this.renderYup(pan, lastX, lastY)}
          cardExpanded={cardExpanded}
          // smoothTransition
        />
        <Alert
          title="What would you like to do with this card?"
          visible={downAlert}
          onDismiss={this.dismissCard}
          actions={[
            <PrimaryButton key="dismiss" onPress={this.dismissCard} style={Styles.button}>
              Dismiss
            </PrimaryButton>,
            <PrimaryButton key="save" onPress={this.saveCard} style={Styles.button}>
              Save
            </PrimaryButton>,
          ]}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    bills: state.congress.bills,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    supportBill: bill => dispatch(BillActions.supportBill(bill)),
    rejectBill: bill => dispatch(BillActions.rejectBill(bill)),
    toggleCardExpanded: cardData => dispatch(BillActions.cardExpand(cardData)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SwipeScreen)
