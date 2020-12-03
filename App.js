import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/store';

enableScreens();

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <StatusBar style="auto" />
        <Navigation />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
