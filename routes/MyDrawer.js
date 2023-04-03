import React from "react";
import CustomDrawerContent from "./CustomDrawerContent";
import Home from "../components/Home";
import Intro from "../components/Intro";
import Description from "../components/Description";
import Cart from "../components/Cart";
import OrderHistory from "../components/OrderHistory";
import { createDrawerNavigator, DrawerContent } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity,
} from "react-native";
const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="homeScreen"
      component={Home}
      options={{ title: "Home Screen", headerShown: false }}
    />
    <HomeStack.Screen
      name="descriptionScreen"
      component={Description}
      options={{ title: "Description Screen", headerShown: false }}
    />
    <HomeStack.Screen
      name="cartScreen"
      component={Cart}
      options={{ title: "Cart Screen", headerShown: false }}
    />
  </HomeStack.Navigator>
);
export default function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          drawerActiveTintColor: "#228c3e",
          drawerInactiveTintColor: "white",
          drawerActiveBackgroundColor: "#a0f2a1",
          drawerIcon: ({ focused, size }) => (
            <Image
              source={require("../assets/home.png")}
              style={[
                focused ? styles.drawerActive : styles.drawerInActive,
                { height: 30, width: 30 },
              ]}
            />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Description"
        component={Description}
        options={{
          headerShown: false,
          drawerActiveTintColor: "#228c3e",
          drawerInactiveTintColor: "white",
          drawerActiveBackgroundColor: "#a0f2a1",
          drawerIcon: ({ focused, size }) => (
            <Image
              source={require("../assets/home.png")}
              style={[
                focused ? styles.drawerActive : styles.drawerInActive,
                { height: 30, width: 30 },
              ]}
            />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
          drawerActiveTintColor: "#228c3e",
          drawerInactiveTintColor: "white",
          drawerActiveBackgroundColor: "#a0f2a1",
          drawerIcon: ({ focused, size }) => (
            <Image
              source={require("../assets/home.png")}
              style={[
                focused ? styles.drawerActive : styles.drawerInActive,
                { height: 30, width: 30 },
              ]}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Order History"
        component={OrderHistory}
        options={{
          headerShown: false,
          drawerActiveTintColor: "#228c3e",
          drawerInactiveTintColor: "white",
          drawerActiveBackgroundColor: "#a0f2a1",
          drawerIcon: ({ focused, size }) => (
            <Image
              source={require("../assets/home.png")}
              style={[
                focused ? styles.drawerActive : styles.drawerInActive,
                { height: 30, width: 30 },
              ]}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Intro"
        component={Intro}
        options={{
          headerShown: false,
          drawerActiveTintColor: "#228c3e",
          drawerInactiveTintColor: "white",
          drawerActiveBackgroundColor: "#a0f2a1",
          drawerIcon: ({ focused, size }) => (
            <Image
              source={require("../assets/home.png")}
              style={[
                focused ? styles.drawerActive : styles.drawerInActive,
                { height: 30, width: 30 },
              ]}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerActive: {
    backgroundColor: "#228c3e",
    borderRadius: 60,
    borderColor: "white",
    borderWidth: 2,
  },
  drawerInActive: {},
});
