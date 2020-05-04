import React, { useState } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";

export const InfoPage = () => {
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
  backButton: {
    marginTop: 30,
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center",
    padding: 50,
  },
  contentContainer: {
    paddingTop: 30,
  },
  textInfoMain: {
    fontSize: 22,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
    // color: "#000",
    fontWeight: "bold",
    margin: 15,
  },
  textInfo: {
    fontSize: 14,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
    // color: "#000",
    padding: 10,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10,
    marginBottom: 60,
  },
  mainImage: {
    width: 70,
    height: 40,
    resizeMode: "contain",
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)",
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
  inputText: {
    borderColor: "gray",
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    borderRadius: 20,
    padding: 10,
  },
});
