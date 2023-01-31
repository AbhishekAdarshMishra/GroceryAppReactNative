import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function PopularCard() {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <View style={[styles.fullCard]}>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("../assets/fruit1.jpg")}
          ></Image>
        </View>
        <View style={styles.cardDetails}>
          <View style={styles.details}>
            <Text style={styles.detailTitle}>Apple</Text>
            <Text style={styles.detailPrice}>$6.70/Kg</Text>
          </View>
          <View style={styles.add}>
            <Text style={styles.addText}>+</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "46%",
    margin: 5,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    shadowColor: "black",
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  fullCard: {
    width: "100%",
  },
  card: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 140,
    width: "100%",
    borderRadius: 10,
  },
  cardDetails: {
    height: 50,
    width: "90%",
    marginHorizontal: "5%",
    marginBottom: "8%",
    backgroundColor: "#f2fcf4",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  details: {
    marginLeft: "6%",
  },
  detailTitle: {
    fontWeight: "bold",
    color: "#444",
  },
  detailPrice: {
    fontWeight: "bold",
    color: "#49ab5b",
  },
  add: {
    backgroundColor: "#5acc7c",
    height: "50%",
    width: "16%",
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 0,
  },
  addText: {
    fontWeight: "bold",
    color: "#fff",
  },
  image: {
    width: 100,
    height: 100,
  },
});
