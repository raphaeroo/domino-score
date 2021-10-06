import React, { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SplashScreen from 'react-native-splash-screen'

import { Router } from './routes/Router'

export const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <SafeAreaProvider>
      <Router />
    </SafeAreaProvider>
  )
}
