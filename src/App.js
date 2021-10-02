import React from 'react'
import { Router, store } from './config'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App

