import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function CarouselCard() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require("../assets/category.png")}
          ></Image>
        </View>
        <View style={styles.contentView}>
          <Text style={styles.offer}>Upto 30% Offer!</Text>
          <Text style={styles.description}>
            Enjoy our big offer of every day
          </Text>
          <View style={styles.openButton}>
            <Text style={styles.buttonText}>Order Now</Text>
          </View>
        </View>
      </View>
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
    flexDirection: "row",
    backgroundColor: "#e1f7e5",
    height: 150,
    width: 280,
    borderRadius: 20,
  },
  image: {
    width: 80,
    height: 80,
  },
  imageView: {
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  contentView: {
    width: "60%",
  },
  title: {
    paddingVertical: 5,
    color: "#444",
    fontWeight: "bold",
  },
  description: {
    marginTop: "4%",
    fontSize: 15,
    fontWeight: "bold",
    color: "#444",
  },
  offer: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#48ab5a",
  },
  openButton: {
    marginTop: "8%",
    width: "70%",
    backgroundColor: "#48ab5a",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
  },
});
