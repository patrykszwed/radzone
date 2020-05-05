import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";

export const InfoScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      />
      <Modal
        animationType="slide"
        transparent={false}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.container}>
          <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
          />
          <View>
            <Text style={styles.textInfoMain}>App version</Text>
            <Text style={styles.textInfo}>1.0</Text>

            <Text style={styles.textInfoMain}>Created by</Text>
            <Text style={styles.textInfo}>
              Group D:
              {"\n"}
              {"\n"} Patryk Szwed
              {"\n"} Jakub Zbąski
              {"\n"} Jarosław Danielak
              {"\n"} Patryk Kawa
            </Text>

            <Text style={styles.textInfoMain}>Data provider</Text>
            <Text style={styles.textInfo}>Safecast</Text>
          </View>
          <ScrollView />
        </View>
      </Modal>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => {
            setIsModalVisible(true);
          }}
        >
          <View>
            <Image
              source={require("../assets/info.png")}
              style={styles.mainImage}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonsContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
    flexDirection: "row",
    marginRight: 20,
    marginLeft: 20,
    justifyContent: "space-around",
  },
  contentContainer: {
    paddingTop: 30,
  },
  textInfoMain: {
    fontSize: 22,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
    fontWeight: "bold",
    margin: 15,
  },
  textInfo: {
    fontSize: 14,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
    padding: 10,
  },
  mainImage: {
    width: 70,
    height: 40,
    resizeMode: "contain",
  },
});
