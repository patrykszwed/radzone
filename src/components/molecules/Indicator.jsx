import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import colorBetween from 'color-between';

const TINT_COLOR = '#00ff00';
const TINT_COLOR_SECONDARY = '#ff0000';

const Indicator = ({ percentage }) => {

  const calculateColor = (fillValue) => {
    const percentage = (fillValue / 100).toFixed(2);
    return colorBetween(TINT_COLOR, TINT_COLOR_SECONDARY, percentage, 'hex');
  }

  const fillValue = percentage;
  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={350}
        width={20}
        backgroundWidth={5}
        fill={fillValue}
        tintColor={TINT_COLOR}
        tintColorSecondary={TINT_COLOR_SECONDARY}
        backgroundColor='#BCBCBC'
        arcSweepAngle={240}
        rotation={240}
        lineCap='round'
      >
        {
          (fillValue) => {
            if (fillValue > 75) {
              return (
                <AntDesign
                  name='warning'
                  size={180}
                  color={calculateColor(fillValue)}
                />
              )
            } else {
              return (
                <MaterialIcons
                  name='face'
                  size={180}
                  color={calculateColor(fillValue)}
                />
              )
            }
          }
        }
      </AnimatedCircularProgress>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    alignItems: 'center',
  },
});

export default Indicator;
