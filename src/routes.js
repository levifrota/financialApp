import { useColorScheme } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
const Stack = createNativeStackNavigator();

import Main from './pages/main/index.js';
import NewEntry from './pages/NewEntry/NewEntry.js';
import Report from './pages/Report/Report.js';

const StackScreens = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="NewEntry" component={NewEntry} />
      <Stack.Screen name="Report" component={Report} />
    </Stack.Navigator>
  );
};

export default () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StackScreens />
    </NavigationContainer>
  );
};
