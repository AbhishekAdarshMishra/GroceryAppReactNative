import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import CartCard from "../shared/CartCard";
import { CartItem } from "../App";

export default function Cart({ navigation }) {
  const cartItemValue = useContext(CartItem);
  const [translucentDisplay, setTranslucentDisplay] = useState("none");
  const [modalVisibility, setModalVisibility] = useState(false);
  const openModal = (open) => {
    if (open) {
      setTranslucentDisplay("flex");
      setModalVisibility(true);
      cartItemValue.cartDataDispatch({
        type: "reset",
      });
    } else {
      setTranslucentDisplay("none");
      setModalVisibility(false);
    }
  };
  const continueShopping = () => {
    navigation.goBack();
    openModal(false);
  };
  var styleOverlay = {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    elevation: 5,
    display: translucentDisplay,
  };
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisibility}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.close}
              onPress={() => openModal(false)}
            >
              <View>
                <Text style={styles.closeText}>X</Text>
              </View>
            </TouchableOpacity>
            <Image
              source={require("../assets/tick.png")}
              style={styles.tickImg}
            />
            <Text style={styles.modalTitle}>
              Your order is successfully placed
            </Text>
            <Text style={styles.modalText}>
              You can track the delivery in the 'Order History' Section
            </Text>
            <TouchableOpacity
              style={styles.button1}
              onPress={() => continueShopping()}
            >
              <Text style={styles.button1Text}>Continue Shopping</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <Text style={styles.button2Text}>Go to Order History</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backView} onPress={navigation.goBack}>
          <Image
            source={require("../assets/back.png")}
            style={styles.backImg}
          />
        </TouchableOpacity>
        <Text style={styles.titleHeading}>Cart</Text>
      </View>
      <ScrollView
        style={{ marginBottom: "25%" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.addressView}>
          <View style={styles.mapAddreddView}>
            <Text style={styles.heading}>Shipping Address</Text>
            <View style={styles.mapImgView}>
              <View>
                <Image
                  source={require("../assets/pin.png")}
                  style={styles.pin}
                />
              </View>
              <View>
                <Text style={styles.addressDetails}>
                  {" "}
                  Abhishek Adarsh Mishra
                  {/* {cartItemValue.cartDataState[0].name} */}
                </Text>
                <Text style={styles.addressDetails}> 987654***0</Text>
                <Text></Text>
                <Text style={styles.addressDetails}>
                  20 RodgeField Area, Hyderabad, 500032
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.editButtonView}>
            <View style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit</Text>
            </View>
          </View>
        </View>
        <View style={styles.orders}>
          <Text style={styles.heading}>Order Summary</Text>
          {cartItemValue?.cartDataState?.map((item) => (
            <CartCard data={item} />
          ))}
        </View>
      </ScrollView>
      <View style={styles.bottomView}>
        <View style={styles.priceTotalView}>
          <Text style={styles.priceTotalText}>Total</Text>
          <Text style={styles.priceTotal}>
            {cartItemValue.cartDataState.reduce(
              (accumulator, currentValue) =>
                accumulator + currentValue.weight * currentValue.price,
              0
            )}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.buttonView}
          onPress={() => openModal(true)}
        >
          <View>
            <View style={styles.cartButton}>
              <Text style={styles.cartButtonText}>Place Order</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styleOverlay}></View>
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
    height: "8%",
    width: "100%",
    flexDirection: "row",
  },
  titleHeading: {
    position: "absolute",
    left: "45%",
    top: "20%",
    fontWeight: "bold",
    fontSize: 22,
    color: "#444",
  },
  backImg: {
    width: 20,
    height: 20,
  },
  backView: {
    marginTop: "3%",
    marginLeft: "4%",
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    height: 40,
    width: 40,
    justifyContent: "center",
    elevation: 4,
  },
  addressView: {
    flexDirection: "row",
    marginHorizontal: "4%",
  },
  heading: {
    fontSize: 15,
    fontWeight: "bold",
  },
  mapAddreddView: {
    width: "70%",
  },
  mapImgView: {
    flexDirection: "row",
    marginVertical: "5%",
  },
  pin: {
    height: 40,
    width: 40,
  },
  editButtonView: {
    marginTop: "2%",
    width: "30%",
    alignItems: "center",
  },
  orders: {
    marginHorizontal: "4%",
  },
  addressDetails: {
    color: "#9e9e9d",
  },
  editButton: {
    backgroundColor: "#88c96d",
    paddingHorizontal: "20%",
    paddingVertical: "4%",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  editButtonText: {
    fontWeight: "bold",
    color: "#fff",
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
    height: "10%",
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 7,
      height: -7,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 1,
    width: "80%",
  },
  modalTitle: {
    width: "80%",
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "#969493",
  },
  tickImg: {
    width: 80,
    height: 80,
    marginBottom: "10%",
  },
  button1: {
    backgroundColor: "#88c96d",
    paddingHorizontal: "20%",
    paddingVertical: "4%",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  button1Text: {
    fontWeight: "bold",
    color: "white",
  },
  button2: {
    marginTop: "6%",
  },
  button2Text: {
    color: "#88c96d",
  },
  close: {
    position: "absolute",
    right: "6%",
    top: "4%",
  },
  closeText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
