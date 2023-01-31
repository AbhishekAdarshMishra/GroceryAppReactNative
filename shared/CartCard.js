import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

export default function CartCard() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/fruit1.jpg")} style={styles.img} />
      <View style={styles.details}>
        <Text style={styles.detailContent}>Fruits</Text>
        <Text style={styles.detailContent}>Rs 60.50 /Kg</Text>
      </View>
      <View style={styles.incView}>
        <View style={styles.incButton}>
          <Text style={styles.incButtonText}>-</Text>
        </View>
        <Text style={styles.weight}>2 Kg</Text>
        <View style={styles.incButton}>
          <Text style={styles.incButtonText}>+</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: "2%",
    backgroundColor: "#fff",
    paddingHorizontal: "4%",
    paddingVertical: "4%",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  img: {
    height: 60,
    width: 60,
  },
  incView: {
    width: "30%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  incButton: {
    backgroundColor: "#88c96d",
    height: 20,
    width: 20,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  incButtonText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  details: {
    justifyContent: "center",
  },
  detailContent: {
    fontWeight: "bold",
    color: "#444",
  },
});
