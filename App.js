import React from 'react';
import { Provider } from 'react-redux'
import { Main } from './src/components/Main';
import store from './src/redux/store'
import {Header} from './src/components/Header'
function App(props) {

  return (
    <Provider store={store}>
      <Header></Header>
      <Main></Main>
    </Provider>
  )
};

export default App;