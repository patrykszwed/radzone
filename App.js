import React from "react";
import { StyleSheet, View } from "react-native";
import { InfoPage } from "./components/InfoPage";

export default function App() {
  return (
    <View style={styles.container}>
      <InfoPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
