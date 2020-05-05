import React from 'react';
import { View, StyleSheet } from 'react-native';

import Actions from '../molecules/Actions';
import RadiationValue from '../molecules/RadiationValue';
import Indicator from '../molecules/Indicator';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.indicatorContainer}>
        <Indicator />
      </View>
      <View style={styles.valueContainer}>
        <RadiationValue />
      </View>
      <View style={styles.actionsContainer}>
        <Actions />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorContainer: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  valueContainer: {
    flex: 0.5,
    alignItems: 'center',
  },
  actionsContainer: {
    flex: 0.5,
    alignItems: 'center',
  }
});

export default MainScreen;
