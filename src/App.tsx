import React, { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import ImmersiveMode from 'react-native-immersive-mode'
import SplashScreen from 'react-native-splash-screen'

import { Router } from './routes/Router'

export const App = () => {
  useEffect(() => {
    SplashScreen.hide()
    ImmersiveMode.fullLayout(true)
    ImmersiveMode.setBarMode('Bottom')
  }, [])

  return (
    <SafeAreaProvider>
      <Router />
    </SafeAreaProvider>
  )
}
