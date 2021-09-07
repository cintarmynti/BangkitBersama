import React, { useEffect } from 'react'
import { Router } from './config'
import GlobalFont from 'react-native-global-font'

const App = () => {

  useEffect(() => {
    GlobalFont.applyGlobal('Nunito-Regular')
  }, [])

  return (
    <Router />
  )
}

export default App

