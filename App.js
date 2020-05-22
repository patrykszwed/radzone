import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

import { navigationRef } from './src/components/navigations/NavigationService';
import * as NavigationService from './src/components/navigations/NavigationService';

import MainScreen from './src/components/screens/MainScreen';
import InfoScreen from './src/components/screens/InfoScreen';

const Stack = createStackNavigator();

const App = () => {

  const navigateToInfoScreen = () => {
    NavigationService.navigate('Information')
  }

  return (
    <ActionSheetProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen
            name="RadZone"
            component={MainScreen}
            options={{ headerRight: () => (
              <Button
                title="Info"
                onPress={navigateToInfoScreen}
              />
            )}}
          />
          <Stack.Screen name="Information" component={InfoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ActionSheetProvider>
  );
}

export default App;
