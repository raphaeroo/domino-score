import React, { useEffect, useState, useRef } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  Animated
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { X, Clock, Info } from 'react-native-feather'
import { useForm } from 'react-hook-form'

import { Input } from '~/components'
import { RouteNames } from '~/routes/constants'

import styles from './styles'

type DataForm = {
  playerOne: string
  playerTwo: string
  playerThree: string
  playerFour: string
}

export const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const [error, showError] = useState(false)
  const { control, handleSubmit, reset } = useForm()

  const translateX = useRef(new Animated.Value(0)).current

  function onSubmit(data: DataForm) {
    setLoading(true)

    if (data.playerFour && data.playerOne && data.playerThree && data.playerTwo) {
      const teams = {
        teamOne: {
          p1: data.playerOne,
          p2: data.playerTwo
        },
        teamTwo: {
          p1: data.playerThree,
          p2: data.playerFour
        }
      }

      navigation.navigate(RouteNames.Game)
      console.log('TIMES', teams) // TODO: enviar para o mobx
    }
    showError(true)
  }

  useEffect(() => {
    if (error) {
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: true
      }).start()
    } else {
      Animated.spring(translateX, {
        toValue: 700,
        useNativeDriver: true
      }).start()
    }

    setTimeout(() => {
      showError(false)
      setLoading(false)
    }, 5500)
  }, [error, translateX])

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.main}>
        <View style={styles.content}>
          <View style={styles.leftContainer}>
            <Text style={styles.title}>Time 1</Text>
            <Input
              control={control}
              placeholder="Nome do primeiro jogador do time 1"
              fieldName="playerOne"
            />
            <View style={styles.inputSeparator} />
            <Input
              control={control}
              placeholder="Nome do segundo jogador do time 1"
              fieldName="playerTwo"
            />
          </View>
          <View style={styles.versusIconContainer}>
            <X color="white" width={40} height={40} />
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.title}>Time 2</Text>
            <Input
              control={control}
              placeholder="Nome do primeiro jogador do time 2"
              fieldName="playerThree"
            />
            <View style={styles.inputSeparator} />
            <Input
              control={control}
              placeholder="Nome do segundo jogador do time 1"
              fieldName="playerFour"
            />
          </View>
        </View>
        <View style={styles.bottomButtonsContainer}>
          <TouchableOpacity onPress={() => reset([])}>
            <Clock color="white" width={30} height={30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} disabled={loading} onPress={handleSubmit(onSubmit)}>
            {
              loading
                ? <ActivityIndicator color="white" size="large" />
                : <Text style={styles.buttonLabel}>Começar partida</Text>
            }
          </TouchableOpacity>
          <View>
            <Info color="white" width={30} height={30} />
          </View>
        </View>
      </LinearGradient>
      <Animated.View style={[styles.errorNotification, { transform: [{ translateX }] }]}>
        <Text style={styles.errorMessage}>
          Todos os jogadores precisam estar preenchidos
        </Text>
      </Animated.View>
      <StatusBar backgroundColor="#4c669f" />
    </SafeAreaView>
  )
}
