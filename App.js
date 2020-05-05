import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './src/components/navigations/NavigationService';
import * as NavigationService from './src/components/navigations/NavigationService';

import MainScreen from './src/components/screens/MainScreen';
import InfoScreen from './src/components/screens/InfoScreen';

const Stack = createStackNavigator();

const App = () => {

  navigateToInfoScreen = () => {
    NavigationService.navigate('Informations')
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="RadZone"
          component={MainScreen}
          options={{ headerRight: () => (
            <Button
              title="Info"
              onPress={this.navigateToInfoScreen}
            />
          )}}
        />
        <Stack.Screen name="Informations" component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
