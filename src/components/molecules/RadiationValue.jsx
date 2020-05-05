import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RadiationValue = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.valueText}>44 cpm</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    backgroundColor: '#BCBCBC',
    borderWidth: 1,
    borderRadius: 8,
  },
  valueText: {
    fontSize: 46,
    fontWeight: '300',
    paddingTop: 10,
    paddingBottom: 10,
  }
});

export default RadiationValue;
