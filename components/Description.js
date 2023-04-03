import React, { useState, useContext } from "react";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { CartItem } from "../App";

export default function Description({ navigation, route }) {
  const cartItemContext = useContext(CartItem);
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backView} onPress={navigation.goBack}>
            <Image
              source={require("../assets/back.png")}
              style={styles.backImg}
            />
          </TouchableOpacity>
        </View>
        <Image
          source={require("../assets/category.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.priceView}>
        <Text style={styles.price}>{route.params.data.price}/Kg</Text>
      </View>

      <ScrollView style={styles.desc}>
        <View style={styles.head}>
          <Text style={styles.title}>{route.params.data.name}</Text>
          <View style={styles.incView}>
            <TouchableOpacity
              onPress={() =>
                cartItemContext.cartDataDispatch({
                  type: "deacreaseWeight",
                  value: route.params.data.id,
                })
              }
              style={styles.incButton}
            >
              <Text style={styles.incButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.weight}>{route.params.data.weight}</Text>
            <TouchableOpacity
              onPress={() =>
                cartItemContext.cartDataDispatch({
                  type: "increaseWeight",
                  value: route.params.data.id,
                })
              }
              style={styles.incButton}
            >
              <Text style={styles.incButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ratingView}>
          <Image source={require("../assets/star.png")} style={styles.star} />
          <Image source={require("../assets/star.png")} style={styles.star} />
          <Image source={require("../assets/star.png")} style={styles.star} />
          <Image source={require("../assets/star.png")} style={styles.star} />
          <Text style={styles.rating}>(4/5)</Text>
        </View>

        <View>
          <Text style={styles.title2}>Description</Text>
          <Text style={styles.content}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.PageMaker including versions of Lorem
            Ipsum.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
      </ScrollView>
      <View style={styles.bottomView}>
        <View style={styles.priceTotalView}>
          <Text style={styles.priceTotalText}>Total</Text>
          <Text style={styles.priceTotal}>
            Rs{" "}
            {cartItemContext.cartDataState.reduce(
              (accumulator, currentValue) =>
                accumulator + currentValue.weight * currentValue.price,
              0
            )}
          </Text>
        </View>
        <View style={styles.buttonView}>
          <View style={styles.cartButton}>
            <Text style={styles.cartButtonText}>Go To Cart</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  header: {
    marginTop: "10%",
    height: "15%",
    width: "100%",
  },
  backImg: {
    width: 30,
    height: 30,
  },
  backView: {
    marginTop: "3%",
    marginLeft: "5%",
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    height: 40,
    width: 40,
    justifyContent: "center",
    elevation: 5,
  },
  imageView: {
    backgroundColor: "#88c96d",
    width: "100%",
    height: 400,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
  },
  image: {
    alignSelf: "center",
    height: "60%",
    width: "60%",
    borderRadius: 20,
  },
  priceView: {
    alignSelf: "center",
    backgroundColor: "#fff",
    marginTop: -10,
    paddingHorizontal: "8%",
    paddingVertical: "2%",
    borderRadius: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#444",
  },
  desc: {
    marginHorizontal: "4%",
  },
  head: {
    flexDirection: "row",
    padding: "1.5%",
  },
  title: {
    width: "60%",
    fontSize: 32,
  },
  incView: {
    width: "40%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  incButton: {
    backgroundColor: "#88c96d",
    height: 30,
    width: 30,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  incButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  star: {
    width: 25,
    height: 25,
    marginHorizontal: 2,
  },
  ratingView: {
    marginHorizontal: "3%",
    flexDirection: "row",
  },
  rating: {
    marginLeft: "3%",
    alignSelf: "center",
    color: "#9ca199",
    fontWeight: "bold",
  },
  title2: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: "4%",
    marginLeft: "2%",
  },
  content: {
    marginTop: "4%",
    marginLeft: "2%",
  },
  bottomView: {
    paddingVertical: "5%",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  priceTotalView: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
  buttonView: {
    alignItems: "center",
    width: "50%",
  },
  priceTotalText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  priceTotal: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#88c96d",
  },
  cartButton: {
    backgroundColor: "#88c96d",
    paddingHorizontal: "10%",
    paddingVertical: "5%",
    borderRadius: 10,
  },
  cartButtonText: {
    fontWeight: "bold",
    color: "#fff",
  },
});
