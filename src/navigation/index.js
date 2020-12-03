import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

//screens
import Tasks from '../screen/Tasks';

const Stack = createStackNavigator();

const defaultOptions = {
  animationEnabled: false,
  headerStyle: {},
  headerBackTitle: null,
  headerLeftContainerStyle: {},
  headerRightContainerStyle: {},
  headerShown: false,
}

const AppNavigator = () => {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={defaultOptions} initialRouteName={"Tasks"}>
          <Stack.Screen name="Tasks" component={Tasks} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default AppNavigator;
