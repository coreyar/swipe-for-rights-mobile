import React from 'react'
import { Text, View } from 'react-native'
import { CardStyle as styles } from './styles'

function NoMoreCards() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
}

export default NoMoreCards