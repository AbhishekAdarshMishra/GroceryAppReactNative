import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { CartItem } from "../App";

export default function PopularCard({ data, navigation }) {
  const cartItemContext = useContext(CartItem);
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <View style={[styles.fullCard]}>
        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            navigation.navigate("descriptionScreen", {
              data: data,
            })
          }
        >
          <Image
            style={styles.image}
            source={require("../assets/fruit1.jpg")}
          ></Image>
        </TouchableOpacity>
        <View style={styles.cardDetails}>
          <View style={styles.details}>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.detailTitle}
            >
              {data.name}
            </Text>
            <Text style={styles.detailPrice}>{data.price}</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              cartItemContext.cartDataDispatch({
                type: "addItem",
                value: data,
              })
            }
            style={styles.add}
          >
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
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
    height: 160,
    width: "100%",
    borderRadius: 10,
  },
  cardDetails: {
    height: 60,
    width: "90%",
    marginHorizontal: "5%",
    marginBottom: "8%",
    backgroundColor: "#f2fcf4",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: "15%",
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
    height: "70%",
    width: "20%",
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
