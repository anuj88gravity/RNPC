import { StyleSheet} from 'react-native'
import React from 'react'
import Home from './Home'
import {Provider} from 'react-redux';
import store from './store';
import DashboardScreen from './src/screens/DashboardScreen';
import DashboardScreen2 from './src/screens/DashboardScreen2';


const App = () => {
  console.log('App Component Rendered');
  return (
   
      <Provider store={store}>
        <Home/>
        <DashboardScreen/>
        <DashboardScreen2/>
      </Provider>
   
  )
}

export default App

const styles = StyleSheet.create({
})