import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

export default function OrderCard() {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <View style={styles.left}>
          <Text style={styles.text1}>Mon, 24 Aug 2023</Text>
          <Text style={styles.text2}>Order #123456789</Text>
          <Text style={styles.text3}>Out for delivery</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.price}>Rs 130</Text>
        </View>
      </View>
      <View style={styles.buttonView}>
        <View style={styles.leftButton}>
          <Text style={styles.leftButtonText}>Cancel Order</Text>
        </View>
        <View style={styles.rightButton}>
          <Text style={styles.rightButtonText}>Repeat Order</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: "2%",
    paddingVertical: "4%",
    paddingHorizontal: "4%",
    backgroundColor: "#fff",
    paddingHorizontal: "5%",
    elevation: 5,
    borderRadius: 10,
  },
  view: {
    flexDirection: "row",
  },
  left: {
    width: "65%",
  },
  right: {
    width: "30%",
  },
  buttonView: {
    flexDirection: "row",
    marginTop: "5%",
  },
  leftButton: {
    width: "50%",
    alignItems: "center",
  },
  rightButton: {
    width: "50%",
    alignItems: "center",
  },
  leftButtonText: {
    color: "red",
    fontWeight: "bold",
  },
  rightButtonText: {
    color: "green",
    fontWeight: "bold",
  },
  price: {
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
  text1: {
    fontSize: 16,
    color: "#6b6864",
  },
  text2: {
    fontWeight: "bold",
  },
  text3: {
    marginTop: "4%",
    color: "#8c8984",
  },
});
