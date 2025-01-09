import { StyleSheet} from 'react-native'
import React from 'react'
import Home from './Home'
import {Provider} from 'react-redux';
import store from './store';


const App = () => {
  console.log('App Component Rendered');
  return (
   
      <Provider store={store}>
        <Home/>
      </Provider>
   
  )
}

export default App

const styles = StyleSheet.create({
})