import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'

import { Input } from '~/components'

import styles from './styles'

export const HomeScreen = () => {
  const [playerOne, setPlayerOne] = useState<string>('')
  const [playerTwo, setPlayerTwo] = useState<string>('')
  const [playerThree, setPlayerThree] = useState<string>('')
  const [playerFour, setPlayerFour] = useState<string>('')

  function onSubmit() {
    const defineTeams = {
      teamOne: {
        p1: playerOne,
        p2: playerTwo
      },
      teamTwo: {
        p1: playerThree,
        p2: playerFour
      }
    }
    console.log('TIMES', defineTeams)
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.main}>
        <View style={styles.content}>
          <View style={styles.leftContainer}>
            <Text style={styles.title}>Time 1</Text>
            <Input
              placeholder="Nome do primeiro jogador do time 1"
              onChangeText={(value) => setPlayerOne(value)}
              value={playerOne}
            />
            <View style={styles.inputSeparator} />
            <Input
              placeholder="Nome do segundo jogador do time 1"
              onChangeText={(value) => setPlayerTwo(value)}
              value={playerTwo}
            />
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.title}>Time 2</Text>
            <Input
              placeholder="Nome do primeiro jogador do time 2"
              onChangeText={(value) => setPlayerThree(value)}
              value={playerThree}
            />
            <View style={styles.inputSeparator} />
            <Input
              placeholder="Nome do segundo jogador do time 1"
              onChangeText={(value) => setPlayerFour(value)}
              value={playerFour}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={onSubmit}
        >
          <Text style={styles.buttonLabel}>
            Começar partida
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  )
}
