import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  ImageBackground,
  Image,
} from "react-native";
import OrderCard from "../shared/OrderCard";
export default function OrderHistory() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backView}>
          <Image
            source={require("../assets/back.png")}
            style={styles.backImg}
          />
        </View>
        <Text style={styles.titleHeading}>Order History</Text>
      </View>
      <View style={styles.tab}>
        <Text style={styles.tabText}>Active</Text>
        <Text style={styles.tabText}>Past</Text>
        <Text style={styles.tabText}>Cancel</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.cards}>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </ScrollView>
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
    left: "35%",
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
    elevation: 5,
  },
  tab: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: "5%",
    paddingVertical: "3%",
    borderRadius: 10,
    elevation: 5,
  },
  tabText: {
    font: 20,
    fontWeight: "bold",
  },
  cards: {
    marginHorizontal: "5%",
    marginVertical: "5%",
  },
});
