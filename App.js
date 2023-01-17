import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import MyStack from './navigation/MyStack'
import {NavigationContainer} from '@react-navigation/native'
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
