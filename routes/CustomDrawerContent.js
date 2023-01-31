import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity,
} from "react-native";
import Home from "../components/Home";
import Intro from "../components/Intro";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
export default function CustomDrawerContent(props) {
  const BASE_PATH =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/";
  const proileImage = "react_logo.png";
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: "10%",
        backgroundColor: "#88c96d",
      }}
    >
      {/*Top Large Image */}
      <Image
        source={{ uri: BASE_PATH + proileImage }}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Visit Us"
          onPress={() => Linking.openURL("https://aboutreact.com/")}
        />
        <TouchableOpacity
          onPress={() => {
            Linking.openURL("https://aboutreact.com/");
          }}
        >
          <View style={styles.customItem}>
            <Text>Rate Us</Text>
            <Image
              source={{ uri: BASE_PATH + "star_filled.png" }}
              style={styles.iconStyle}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate({
              name: "Intro",
              component: { Intro },
            })
          }
        >
          <View style={styles.customItem}>
            <Text>Rate Us</Text>
            <Image
              source={{ uri: BASE_PATH + "star_filled.png" }}
              style={styles.iconStyle}
            />
          </View>
        </TouchableOpacity>
      </DrawerContentScrollView>
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          color: "grey",
        }}
      >
        Abhishek Adarsh Mishra
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: "center",
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    color: "white",
  },
});
