import React from 'react'
import {
  NavigationContainer,
  createNavigationContainerRef
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen, GameScreen, HistoricScreen } from '~/screens'
import { RouteNames } from './constants'

const { Screen, Navigator } = createNativeStackNavigator()

export const NavigationRef = createNavigationContainerRef()

export const Router = () => {
  return (
    <NavigationContainer ref={NavigationRef}>
      <Navigator
        screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }}
      >
        <Screen name={RouteNames.Home} component={HomeScreen} />
        <Screen name={RouteNames.Game} component={GameScreen} />
        <Screen name={RouteNames.Historic} component={HistoricScreen} />
      </Navigator>
    </NavigationContainer>
  )
}
