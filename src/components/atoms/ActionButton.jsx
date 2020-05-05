import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Foundation, Feather } from '@expo/vector-icons';

import { AB_MORE, AB_REFRESH } from '../../constants/actionButtonTypes';

const ActionButton = ({ type, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonWrapper}>
      {type === AB_MORE &&
        <Feather
          name="more-horizontal"
          size={36}
        />
      }
      {type === AB_REFRESH &&
        <Foundation
          name="refresh"
          size={32}
          style={{ marginTop: 5 }}
        />
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: '#BCBCBC',
    width: 65,
    height: 65,
    borderRadius: 50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ActionButton;
