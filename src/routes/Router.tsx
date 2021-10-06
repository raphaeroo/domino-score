import React from 'react'
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '~/screens'
import { RouteNames } from './constants'

const { Screen, Navigator } = createNativeStackNavigator()

export const NavigationRef = createNavigationContainerRef()

export const Router = () => {
  return (
    <NavigationContainer ref={NavigationRef}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name={RouteNames.Home} component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  )
}
