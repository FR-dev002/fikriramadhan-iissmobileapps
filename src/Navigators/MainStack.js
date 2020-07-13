import React from 'react';

import HomeScreen from './../Screens/HomeScreen';
import ReviewScreen from './../Screens/ReviewScreen';
import {createStackNavigator} from '@react-navigation/stack';

const HomeStack = createStackNavigator();
const ReviewStack = createStackNavigator();

export function MainStackNavigator() {
  return (
    <HomeStack.Navigator
      mode="modal"
      screenOptions={{
        headerShown: true,
      }}>
      <HomeStack.Screen name={'Home'} component={HomeScreen} />
      <ReviewStack.Screen name={'Review'} component={ReviewScreen} />
    </HomeStack.Navigator>
  );
};

export default MainStackNavigator;
