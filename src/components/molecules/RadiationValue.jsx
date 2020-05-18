import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { CPM, USV, ROENTGEN } from '../../constants/units';

const RadiationValue = ({ value, unit }) => {
  const displayUnit = () => {
    if (unit === CPM) {
      return 'cpm'
    }
    if (unit === USV) {
      return 'μSv/h'
    }
    if (unit === ROENTGEN) {
      return 'R'
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.valueText}>{value}</Text>
      <Text style={styles.unitText}>{displayUnit()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    backgroundColor: '#BCBCBC',
    borderWidth: 1,
    borderRadius: 8,
  },
  valueText: {
    fontSize: 46,
    fontWeight: '300',
    paddingTop: 10,
  },
  unitText: {
    fontSize: 46,
    fontWeight: '300',
    paddingBottom: 10,
  }
});

export default RadiationValue;
