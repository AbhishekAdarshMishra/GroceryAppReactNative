import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function CategoriesCard() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={require("../assets/category.png")}
        ></Image>
      </View>
      <Text style={styles.title}>Fruit</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0.2%",
  },

  card: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    borderColor: "#a3e6b1",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    height: 80,
    width: 80,
    borderRadius: 20,
  },
  image: {
    width: 60,
    height: 60,
  },
  title: {
    paddingVertical: 5,
    color: "#444",
    fontWeight: "bold",
  },
});
