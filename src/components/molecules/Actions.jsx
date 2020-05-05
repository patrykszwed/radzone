import React from 'react';
import { View, StyleSheet } from 'react-native';

import ActionButton from '../atoms/ActionButton';

import { AB_MORE, AB_REFRESH } from '../../constants/actionButtonTypes';

const Actions = () => {
  return (
    <View style={styles.container}>
      <ActionButton
        type={AB_REFRESH}
        onPress={() => console.log('Refresh pressed')}
      />
      <ActionButton
        type={AB_MORE}
        onPress={() => console.log('More pressed')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 260,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Actions;
