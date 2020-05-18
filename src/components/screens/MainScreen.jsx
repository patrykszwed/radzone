import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import Actions from "../molecules/Actions";
import RadiationValue from "../molecules/RadiationValue";
import Indicator from "../molecules/Indicator";

import { CPM, USV, ROENTGEN } from "../../constants/units";
import getMeasurement from "../../api/getMeasurement";

import * as Location from "expo-location";

const CPM_USV_MULTIPLIER = 30;
const USV_ROENTGEN_MULTIPLIER = 8770;
const CPM_ROENTGEN_MULTIPLIER = 263100;
const HOURS_IN_YEAR = 8766;
const FATAL_RADIATION_POISONING_VALUE = 2000000;

class MainScreen extends Component {
  state = {
    radiationValue: null,
    unit: CPM,
    location: null,
    errorMsg: "",
  };

  convertValue = (currentUnit, unitToBeConvertedTo, value) => {
    if (currentUnit === CPM && unitToBeConvertedTo === USV) {
      return (value * (1 / CPM_USV_MULTIPLIER)).toFixed(2);
    } else if (currentUnit === USV && unitToBeConvertedTo === CPM) {
      return (value * CPM_USV_MULTIPLIER).toFixed(2);
    } else if (currentUnit === ROENTGEN && unitToBeConvertedTo === USV) {
      return (value * USV_ROENTGEN_MULTIPLIER).toFixed(2);
    } else if (currentUnit === USV && unitToBeConvertedTo === ROENTGEN) {
      return (value * (1 / USV_ROENTGEN_MULTIPLIER)).toFixed(8);
    } else if (currentUnit === CPM && unitToBeConvertedTo === ROENTGEN) {
      return (value * (1 / CPM_ROENTGEN_MULTIPLIER)).toFixed(8);
    } else if (currentUnit === ROENTGEN && unitToBeConvertedTo === CPM) {
      return (value * CPM_ROENTGEN_MULTIPLIER).toFixed(2);
    }
  };

  onToUnitConvert = (unitToBeConvertedTo) => {
    const { radiationValue, unit } = this.state;
    if (unit === unitToBeConvertedTo) {
      return;
    }
    const newValue = this.convertValue(
      unit,
      unitToBeConvertedTo,
      radiationValue
    );
    this.setState({
      unit: unitToBeConvertedTo,
      radiationValue: newValue,
    });
  };

  onRefreshData = () => {
    const { location } = this.state;
    if (location) {
      const { coords } = location;
      this.setState({ radiationValue: null });
      getMeasurement(coords.latitude, coords.longitude).then((result) => {
        const { value } = result[0];
        this.setState({ radiationValue: value });
      });
    }
  };

  calculatePercentage = () => {
    const { radiationValue, unit } = this.state;
    let sievertValue = radiationValue;
    if (unit !== USV) {
      sievertValue = this.convertValue(unit, USV, radiationValue);
    }
    const percentage =
      ((sievertValue * HOURS_IN_YEAR) / FATAL_RADIATION_POISONING_VALUE) * 100;
    return percentage;
  };

  componentDidMount = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status === "granted") {
      const location = await Location.getCurrentPositionAsync({});
      const { coords } = location;

      getMeasurement(coords.latitude, coords.longitude).then((result) => {
        const { value } = result[0];
        this.setState({ radiationValue: value, location });
      });
    }
  };

  render() {
    const { radiationValue, unit } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.indicatorContainer}>
          <Indicator percentage={this.calculatePercentage()} />
        </View>
        <View style={styles.valueContainer}>
          <RadiationValue value={radiationValue} unit={unit} />
        </View>
        <View style={styles.actionsContainer}>
          <Actions
            convertToUnit={this.onToUnitConvert}
            refreshData={this.onRefreshData}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  indicatorContainer: {
    flex: 1.5,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  valueContainer: {
    flex: 0.6,
    alignItems: "center",
  },
  actionsContainer: {
    flex: 0.5,
    alignItems: "center",
  },
});

export default MainScreen;
