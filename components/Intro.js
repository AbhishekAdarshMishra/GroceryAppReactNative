import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

export default function Intro() {
  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <Image
          source={require("../assets/service.jpg")}
          style={styles.serviceImage}
        />
        <View style={styles.bottomPage}>
          <Text style={styles.title}>Lets find the best & healthy Grocery</Text>
          <Text style={styles.content}>
            Online grocery delivery - Quick and easy to find grocery
          </Text>
          <StatusBar style="auto" />
          <View style={styles.getStarted}>
            <Text style={styles.getStartedText}>Get Started</Text>
          </View>
        </View>
      </View>
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
  serviceImage: {
    height: "60%",
    width: "100%",
    borderRadius: 20,
  },
  bottomPage: {
    marginTop: "-22%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    paddingTop: "18%",
    height: "50%",
    alignItems: "center",
  },
  title: {
    paddingHorizontal: "10%",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    paddingHorizontal: "20%",
    paddingVertical: "5%",
    textAlign: "center",
    color: "#969696",
  },
  getStarted: {
    backgroundColor: "#77c971",
    paddingVertical: "6%",
    width: "80%",
    alignItems: "center",
    borderRadius: 18,
    marginTop: "10%",
  },
  getStartedText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
