import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { X, ArrowLeft } from 'react-native-feather'
import { useIsFocused } from '@react-navigation/core'

import { getObject } from '~/services/storage'
import { GameStorageKey } from '~/state/Game'
import { RouteNames } from '~/routes/constants'
import type { Results } from '~/state/Game'

import styles from './styles'

export const HistoricScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<Results[]>([])
  const isFocused = useIsFocused()

  async function loadResults() {
    setLoading(true)

    const results = await getObject(GameStorageKey.value)

    setResults(results)
    setLoading(false)
    return results
  }

  useEffect(() => {
    loadResults()
  }, [isFocused])

  if (loading) {
    return (
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.main}>
        <ActivityIndicator color="white" size="large" />
      </LinearGradient>
    )
  }

  if (!results) {
    return (
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.main}>
        <TouchableOpacity
          onPress={() => navigation.replace(RouteNames.Home)}
          style={styles.backButton}>
          <ArrowLeft color="white" width={30} height={30} />
        </TouchableOpacity>
        <Text style={styles.noMatchLabel}>Nenhuma partida registrada</Text>
      </LinearGradient>
    )
  }

  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.main}>
      <TouchableOpacity
        onPress={() => navigation.replace(RouteNames.Home)}
        style={styles.backButton}>
        <ArrowLeft color="white" width={30} height={30} />
      </TouchableOpacity>
      <FlatList
        data={results}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `${item.gameDay}++${Math.random()}`}
        renderItem={({ item }) => (
          <View key={item.gameDay} style={styles.itemContainer}>
            <View>
              <Text style={styles.gameDayLabel}>{item.gameDay}</Text>
            </View>
            <View style={styles.scoreContainer}>
              <View style={styles.playerOneContainer}>
                <Text style={styles.players}>
                  {item.teamOne.p1} / {item.teamOne.p2}
                </Text>
              </View>
              <View
                style={styles.teamOneScoreContainer}>
                <Text style={styles.playerScore}>{item.scoreTeamOne}</Text>
              </View>
              <View style={styles.versusContainer}>
                <X color="red" width={30} height={30} />
              </View>
              <View style={styles.teamTwoScoreContainer}>
                <Text style={styles.playerScore}>{item.scoreTeamTwo}</Text>
              </View>
              <View style={styles.playerTwoContainer}>
                <Text style={styles.players}>
                  {item.teamTwo.p1} / {item.teamTwo.p2}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </LinearGradient>
  )
}
