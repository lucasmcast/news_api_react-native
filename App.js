import React from 'react';
import { Provider } from 'react-redux'
import { Main } from './src/components/Main';
import configureStore from './src/redux/store'
import { Header } from './src/components/Header'
import { PersistGate } from 'redux-persist/integration/react'

const {store, persistor} = configureStore()

function App(props) {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header></Header>
        <Main></Main>
      </PersistGate>
    </Provider>
  )
};

export default App;