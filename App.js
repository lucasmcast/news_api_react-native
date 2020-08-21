import React from 'react';
import { Provider } from 'react-redux'
import { Main } from './src/components/Main';
import store from './src/redux/store'

function App(props) {

  return (
    <Provider store={store}>
      <Main></Main>
    </Provider>
  )
};

export default App;