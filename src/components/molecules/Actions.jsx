import React from "react";
import { View, StyleSheet, ActionSheetIOS } from "react-native";

import ActionButton from "../atoms/ActionButton";

import { AB_MORE, AB_REFRESH } from "../../constants/actionButtonTypes";
import { CPM, USV, ROENTGEN } from "../../constants/units";

const Actions = ({ convertToUnit, refreshData }) => {
  const showChangeUnitModal = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        title: "Select unit:",
        options: [
          "Cancel",
          "Counts per minute",
          "Microsieverts an hour",
          "Roentgen",
        ],
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex === 1) {
          convertToUnit(CPM);
        } else if (buttonIndex === 2) {
          convertToUnit(USV);
        } else if (buttonIndex === 3) {
          convertToUnit(ROENTGEN);
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <ActionButton type={AB_REFRESH} onPress={refreshData} />
      <ActionButton type={AB_MORE} onPress={showChangeUnitModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 260,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Actions;
