import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

import store from './src/redux/store'
import Home from './src/screens/Home'

const App = () => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    ;(async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      })
      setIsReady(true)
    })()
  }, [])

  return isReady ? (
    <Provider store={store}>
      <Home />
    </Provider>
  ) : (
    <AppLoading />
  )
}

export default App
