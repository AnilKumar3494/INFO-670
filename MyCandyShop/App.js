import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//.js files import
import HomeScreen from './screens/HomeScreen';
import store from './store';

//.for navigation
import MainContainer from './navigation/MainContainer';

export default function App() {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>



    // <Provider store={store}>
    //   <HomeScreen />
    // </Provider>

  );
}
