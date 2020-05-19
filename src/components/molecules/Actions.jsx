import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connectActionSheet } from '@expo/react-native-action-sheet';

import ActionButton from '../atoms/ActionButton';

import { AB_MORE, AB_REFRESH } from '../../constants/actionButtonTypes';
import { CPM, USV, ROENTGEN } from '../../constants/units';

const Actions = ({ convertToUnit, showActionSheetWithOptions }) => {
  const showChangeUnitModal = () => {
    showActionSheetWithOptions(
      {
        title: 'Select unit:',
        options: ['Cancel', 'Counts per minute', 'Microsieverts an hour', 'Roentgen'],
        cancelButtonIndex: 0
      },
      buttonIndex => {
        if (buttonIndex === 1) {
          convertToUnit(CPM);
        } else if (buttonIndex === 2) {
          convertToUnit(USV);
        } else if (buttonIndex === 3) {
          convertToUnit(ROENTGEN);
        }
      }
    );
  }

  return (
    <View style={styles.container}>
      <ActionButton
        type={AB_REFRESH}
        onPress={() => console.log('Refresh pressed')}
      />
      <ActionButton
        type={AB_MORE}
        onPress={showChangeUnitModal}
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

const ConnectedApp = connectActionSheet(Actions);

export default ConnectedApp;
