import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const details = [
  { key: "App version", value: "2.0" },
  { key: "Created by", value: "Groupd D" },
  { key: "Data provider", value: "Safecast" },
];

const InfoScreen = () => {
  const { container, infoTableHeader, infoTableItem } = styles;
  return (
    <View>
      <Text style={infoTableHeader}>APPLICATION DETAILS</Text>
      <FlatList
        data={details}
        renderItem={({ item }) => (
          <View style={container}>
            <Text style={infoTableItem}>{item.key}</Text>
            <Text style={infoTableItem}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderColor: "#bcbcbc",
    borderWidth: 0.5,
    fontSize: 14,
  },
  infoTableHeader: {
    color: "#BFBFC4",
    paddingTop: 40,
    paddingLeft: 15,
    paddingBottom: 5,
  },
  infoTableItem: {
    padding: 10,
    paddingLeft: 15,
  },
});
