import { StyleSheet, Text, View } from "react-native";
import MyDrawer from "./routes/MyDrawer";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React, { useReducer } from "react";

export const CartItem = React.createContext();
const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "addItem":
      console.log(JSON.stringify(state));
      if (state.some((val) => val.id === action.value.id)) {
        return state.map((val) =>
          val.id === action.value.id ? { ...val, weight: val.weight + 1 } : val
        );
      }
      return [...state, action.value];
    case "increaseWeight":
      return state.map((val) =>
        val.id === action.value ? { ...val, weight: val.weight + 1 } : val
      );
    case "deacreaseWeight":
      return state.map((val) =>
        val.id === action.value ? { ...val, weight: val.weight - 1 } : val
      );
    case "reset":
      return initialState;
  }
};

export default function App() {
  const [cartData, dispatch] = useReducer(reducer, initialState);
  return (
    <View style={styles.app}>
      <NavigationContainer>
        <CartItem.Provider
          value={{ cartDataState: cartData, cartDataDispatch: dispatch }}
        >
          <MyDrawer />
        </CartItem.Provider>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f7f7f7",
  },
  background: {
    width: "100%",
    height: "100%",
    padding: "2.5%",
  },
});
