import React from 'react';
import {CustomHooks} from './Hooks/CustomHooks';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './Screens/SplashScreen';
import MainStackNavigator from './Navigators/MainStack';

const Rootstack = createStackNavigator();

export default () => {
  const {loading} = CustomHooks();

  const renderScreen = () => {
    if (loading) {
      return <Rootstack.Screen name={'Splash'} component={SplashScreen} />;
    } else {
      return (
        <Rootstack.Screen name={'MainStack'} component={MainStackNavigator} />
      );
    }
  };

  return (
    <NavigationContainer>
      <Rootstack.Navigator
        mode="modal"
        screenOptions={{
          headerShown: false,
        }}>
        {renderScreen()}
      </Rootstack.Navigator>
    </NavigationContainer>
  );
};
