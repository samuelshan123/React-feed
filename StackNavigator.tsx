import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from './src/components/bottom-navigation/BottomTabNavigator';
import Login from './src/components/auth/login';
import Register from './src/components/auth/register';

export default function StackNavigator() {

  const Stack = createNativeStackNavigator();

  const commonHeaderOptions = {
    headerStyle: {
      backgroundColor: '#1877F2',
    },
    headerTintColor: '#fff',
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' options={commonHeaderOptions} component={Login}/>
        <Stack.Screen name='Register' options={commonHeaderOptions} component={Register}/>
        <Stack.Screen name='Dashboard' component={BottomTabNavigator} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
