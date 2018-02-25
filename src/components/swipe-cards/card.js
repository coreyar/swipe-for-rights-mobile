import React from 'react'
import { Animated, ScrollView, Text, View } from 'react-native'
import { CardStyle as styles } from './styles'
import {Metrics} from '../../theme'

class Card extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      animation: new Animated.ValueXY({x: Metrics.cardWidth, y: Metrics.cardHeight}),
      expanded: false
      // initialHeight: Metrics.cardWidth
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.cardExpanded !== nextProps.cardExpanded) {
      this.toggle()
    }
  }

  _setMaxDimensions (event) {
    this.setState({
      maxheight: event.nativeEvent.layout.height
    })
  }

  toggle () {
    // Step 1
    let initialWidthValue = this.props.cardExpanded ? Metrics.screenWidth : Metrics.cardWidth
    let initialHeightValue = this.props.cardExpanded ? Metrics.screenHeight : Metrics.cardWidth
    let finalWidthValue = this.props.cardExpanded ? Metrics.cardWidth : Metrics.screenWidth
    let finalHeightValue = this.props.cardExpanded ? Metrics.cardHeight : Metrics.screenHeight

    this.setState({
      expanded: !this.state.expanded  // Step 2
    })
    this.state.animation.setValue({x: initialWidthValue, y: initialHeightValue})  // Step 3
    Animated.spring(     // Step 4
      this.state.animation,
      {
        toValue: {x: finalWidthValue, y: finalHeightValue}
      }
    ).start()  // Step 5
  }

  _renderSummary () {
    if (this.props.summary_short || this.props.summary) {
      return (
        <ScrollView style={styles.summary}>
          <Text>{this.props.summary_short ? this.props.summary_short : this.props.summary}</Text>
        </ScrollView>
      )
    } else {
      return (
        <View style={[styles.summary, {justifyContent: 'center'}]}>
          <Text style={styles.noSummaryText}>No Summary is available.</Text>
        </View>
      )
    }
  }

  render () {
    let layout = this.state.animation.getLayout()
    return (
      <Animated.View style={[styles.card, {backgroundColor: 'white', height: layout.top, width: layout.left}]} onLayout={this._setMaxDimensions.bind(this)}>
        <View style={styles.column}>
          <View style={styles.topRow}>
            <Text>{`${this.props.chamber.slice(0, 1).toUpperCase()}${this.props.chamber.slice(1, this.props.chamber.length)}`}</Text>
            <Text>{this.props.introduced_on}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>{this.props.official_title}</Text>
          </View>
          <View style={styles.row}>
            {this._renderSummary()}
          </View>
        </View>
        <View style={styles.sideBar}>
          <View style={styles.actionBar} />
        </View>
      </Animated.View>
    )
  }
}



module.exports = { Card }
