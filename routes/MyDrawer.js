import React from "react";
import CustomDrawerContent from "./CustomDrawerContent";
import Home from "../components/Home";
import Intro from "../components/Intro";
import Description from "../components/Description";
import Cart from "../components/Cart";
import OrderHistory from "../components/OrderHistory";
import { createDrawerNavigator, DrawerContent } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
export default function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Description"
        component={Description}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Order History"
        component={OrderHistory}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Intro"
        component={Intro}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
