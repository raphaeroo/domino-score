import React, { useState } from 'react'
import { View, StatusBar, Pressable, Text, TouchableOpacity } from 'react-native'
import { MinusSquare } from 'react-native-feather'
import { RouteNames } from '~/routes/constants'
import { useStore } from '~/state/RootStore'

import styles from './styles'

export const GameScreen = ({ navigation }) => {
  const [scoreTeamOne, setScoreTeamOne] = useState(0)
  const [scoreTeamTwo, setScoreTeamTwo] = useState(0)
  const [loading, setLoading] = useState(false)
  const { gameStore: { endGame } } = useStore()

  function handleSubmit() {
    setLoading(true)

    const results = {
      t1: scoreTeamOne,
      t2: scoreTeamTwo
    }
    endGame(results)

    navigation.replace(RouteNames.Home)
  }

  return (
    <>
      <View style={styles.container}>
        <Pressable
          style={styles.containerLeft}
          onPress={() => setScoreTeamOne((prev) => prev + 1)}>
          <Text style={styles.textScore}>{String(scoreTeamOne)}</Text>
          <TouchableOpacity
            onPress={() => setScoreTeamOne((prev) => (prev >= 1 ? prev - 1 : prev))}>
            <MinusSquare color="white" width={45} height={45} />
          </TouchableOpacity>
        </Pressable>
        <Pressable
          style={styles.containerRight}
          onPress={() => setScoreTeamTwo((prev) => prev + 1)}>
          <Text style={styles.textScore}>{String(scoreTeamTwo)}</Text>
          <TouchableOpacity
            onPress={() => setScoreTeamTwo((prev) => (prev >= 1 ? prev - 1 : prev))}>
            <MinusSquare color="white" width={45} height={45} />
          </TouchableOpacity>
        </Pressable>
        <TouchableOpacity
          onPress={handleSubmit}
          disabled={loading}
          style={styles.endGameButton}>
          <Text style={styles.endGameButtonLabel}>{'FIM\nDE\nJOGO'}</Text>
        </TouchableOpacity>
      </View>
      <StatusBar backgroundColor="black" translucent={false} />
    </>
  )
}
