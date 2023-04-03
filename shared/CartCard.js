import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { CartItem } from "../App";

export default function CartCard(props) {
  const cartItemContext = useContext(CartItem);
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={require("../assets/fruit1.jpg")} style={styles.img} />
      </View>
      <View style={styles.details}>
        <Text numberOfLines={1} style={styles.detailContent}>
          {props.data?.name}
        </Text>
        <Text style={styles.detailContent}>{props.data?.price}</Text>
      </View>
      <View style={styles.incView}>
        <TouchableOpacity
          onPress={() =>
            cartItemContext.cartDataDispatch({
              type: "deacreaseWeight",
              value: props.data.id,
            })
          }
          style={styles.incButton}
        >
          <View>
            <Text style={styles.incButtonText}>-</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.weight}>{props.data?.weight}Kg</Text>
        <TouchableOpacity
          onPress={() =>
            cartItemContext.cartDataDispatch({
              type: "increaseWeight",
              value: props.data.id,
            })
          }
          style={styles.incButton}
        >
          <View>
            <Text style={styles.incButtonText}>+</Text>
          </View>
        </TouchableOpacity>
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
  imageView: {
    width: "25%",
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
    width: "45%",
  },
  detailContent: {
    fontWeight: "bold",
    color: "#444",
    width: "80%",
  },
});
