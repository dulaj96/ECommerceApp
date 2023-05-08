import { View, Text } from 'react-native';
import React from 'react';
import Home from '../screens/auth/Home';
import MyCart from '../screens/auth/MyCart';
import ProductInfo from '../screens/auth/ProductInfo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={{headerShown:false}} name="Splash" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;